"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function getSessionId(): string {
  let id = localStorage.getItem("session_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("session_id", id);
  }
  return id;
}

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const device = /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
      ? "mobile"
      : "desktop";
    const referrer = document.referrer || "direct";
    const session_id = getSessionId();

    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ page: pathname, referrer, device, session_id }),
    });
  }, [pathname]);

  return null;
}
