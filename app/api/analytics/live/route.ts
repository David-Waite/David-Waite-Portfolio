import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const since = new Date(Date.now() - 5 * 60 * 1000).toISOString();

  const { count } = await supabase
    .from("page_views")
    .select("*", { count: "exact", head: true })
    .gte("created_at", since);

  return NextResponse.json({ count: count ?? 0 });
}
