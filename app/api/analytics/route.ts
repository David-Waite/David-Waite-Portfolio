import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { page, referrer, device, session_id } = await request.json();

  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    "Unknown";

  await supabase.from("page_views").insert({ page, referrer, device, country, session_id });

  return NextResponse.json({ ok: true });
}
