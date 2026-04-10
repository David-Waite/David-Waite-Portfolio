import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import styles from "./analytics.module.css";

export const metadata: Metadata = {
  title: "David Waite | Analytics",
};

export const revalidate = 60;

type PageView = {
  id: number;
  page: string;
  referrer: string;
  device: string;
  country: string;
  created_at: string;
};

type LinkClick = {
  id: number;
  project: string;
  url: string;
  session_id: string;
  created_at: string;
};

export default async function AnalyticsPage() {
  const [{ data }, { data: clickData }] = await Promise.all([
    supabase.from("page_views").select("*").order("created_at", { ascending: false }),
    supabase.from("link_clicks").select("*").order("created_at", { ascending: false }),
  ]);

  const views: PageView[] = data ?? [];
  const clicks: LinkClick[] = clickData ?? [];

  const totalViews = views.length;
  const uniqueVisitors = new Set(views.map((v) => v.session_id).filter(Boolean)).size;

  const viewsByPage = views.reduce<Record<string, number>>((acc, v) => {
    acc[v.page] = (acc[v.page] ?? 0) + 1;
    return acc;
  }, {});

  const viewsByDevice = views.reduce<Record<string, number>>((acc, v) => {
    const d = v.device || "unknown";
    acc[d] = (acc[d] ?? 0) + 1;
    return acc;
  }, {});

  const viewsByCountry = views.reduce<Record<string, number>>((acc, v) => {
    const c = v.country || "Unknown";
    acc[c] = (acc[c] ?? 0) + 1;
    return acc;
  }, {});

  const viewsByReferrer = views.reduce<Record<string, number>>((acc, v) => {
    const r = v.referrer || "direct";
    acc[r] = (acc[r] ?? 0) + 1;
    return acc;
  }, {});

  const clicksByProject = clicks.reduce<Record<string, number>>((acc, c) => {
    acc[c.project] = (acc[c.project] ?? 0) + 1;
    return acc;
  }, {});
  const sortedClicks = Object.entries(clicksByProject).sort((a, b) => b[1] - a[1]);

  const sortedPages = Object.entries(viewsByPage).sort((a, b) => b[1] - a[1]);
  const sortedCountries = Object.entries(viewsByCountry).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const sortedReferrers = Object.entries(viewsByReferrer).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const maxPageViews = sortedPages[0]?.[1] ?? 1;

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Analytics</h1>
      <p className={styles.subheading}>Live data from real visitors. Updates every 60 seconds.</p>

      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{totalViews}</span>
          <span className={styles.statLabel}>Total Page Views</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{uniqueVisitors}</span>
          <span className={styles.statLabel}>Unique Visitors</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{viewsByDevice["mobile"] ?? 0}</span>
          <span className={styles.statLabel}>Mobile Visits</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{viewsByDevice["desktop"] ?? 0}</span>
          <span className={styles.statLabel}>Desktop Visits</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{clicks.length}</span>
          <span className={styles.statLabel}>External Project Clicks</span>
        </div>
      </div>

      <div className={styles.bentoGrid}>
        <div className={`${styles.card} ${styles.viewsByPage}`}>
          <h2 className={styles.cardTitle}>Views by Page</h2>
          <div className={styles.barChart}>
            {sortedPages.map(([page, count]) => (
              <div key={page} className={styles.barRow}>
                <span className={styles.barLabel}>{page}</span>
                <div className={styles.barTrack}>
                  <div
                    className={styles.bar}
                    style={{ width: `${(count / maxPageViews) * 100}%` }}
                  />
                </div>
                <span className={styles.barCount}>{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Top Countries</h2>
          <ul className={styles.list}>
            {sortedCountries.map(([country, count]) => (
              <li key={country} className={styles.listItem}>
                <span>{country}</span>
                <span className={styles.listCount}>{count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Top Referrers</h2>
          <ul className={styles.list}>
            {sortedReferrers.map(([referrer, count]) => (
              <li key={referrer} className={styles.listItem}>
                <span className={styles.referrerText}>{referrer}</span>
                <span className={styles.listCount}>{count}</span>
              </li>
            ))}
          </ul>
        </div>

        {sortedClicks.length > 0 && (
          <div className={`${styles.card} ${styles.fullWidth}`}>
            <h2 className={styles.cardTitle}>External Project Clicks</h2>
            <div className={styles.barChart}>
              {sortedClicks.map(([project, count]) => (
                <div key={project} className={styles.barRow}>
                  <span className={styles.barLabel}>{project}</span>
                  <div className={styles.barTrack}>
                    <div
                      className={styles.bar}
                      style={{ width: `${(count / (sortedClicks[0][1] ?? 1)) * 100}%` }}
                    />
                  </div>
                  <span className={styles.barCount}>{count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={`${styles.card} ${styles.fullWidth}`}>
          <h2 className={styles.cardTitle}>Recent Visits</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Device</th>
                  <th>Country</th>
                  <th>Referrer</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {views.slice(0, 20).map((v) => (
                  <tr key={v.id}>
                    <td>{v.page}</td>
                    <td>{v.device}</td>
                    <td>{v.country}</td>
                    <td className={styles.referrerText}>{v.referrer || "direct"}</td>
                    <td>{new Date(v.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
