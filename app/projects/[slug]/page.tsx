import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
import { projects, type ContentBlock, type ListItem } from "@/data/projects";
import styles from "./page.module.css";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title };
}

function renderListItem(item: ListItem, index: number) {
  if (typeof item === "string") {
    return <li key={index}>{item}</li>;
  }
  return (
    <li key={index}>
      {item.text}
      <ul>
        {item.subItems.map((sub, j) => (
          <li key={j}>{sub}</li>
        ))}
      </ul>
    </li>
  );
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return <p key={index}>{block.text}</p>;

    case "heading":
      if (block.level === 2) return <h2 key={index}>{block.text}</h2>;
      return <h3 key={index}>{block.text}</h3>;

    case "list":
      return (
        <ul key={index}>{block.items.map((item, j) => renderListItem(item, j))}</ul>
      );

    case "image":
      return (
        <figure key={index} className={styles.figure}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt} className={styles.articleImage} />
          {block.caption && (
            <figcaption className={styles.caption}>{block.caption}</figcaption>
          )}
        </figure>
      );

    case "video":
      return (
        <div key={index} className={styles.videoContainer}>
          <iframe
            title={block.title ?? "Project video"}
            src={block.src}
            allowFullScreen
          />
        </div>
      );

    default:
      return null;
  }
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.content) notFound();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.meta}>
          <div className={styles.tagRow}>
            {project.madeWith.map((tech) => (
              <span key={tech} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              View on GitHub
            </a>
          )}
        </div>
      </header>

      <hr className={styles.divider} />

      <article className={styles.article}>
        {project.content.map((block, i) => renderBlock(block, i))}
      </article>
    </div>
  );
}
