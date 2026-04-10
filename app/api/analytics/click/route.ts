import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { project, url, session_id } = await request.json();

  await supabase.from("link_clicks").insert({ project, url, session_id });

  return NextResponse.json({ ok: true });
}
