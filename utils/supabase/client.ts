import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_VERCEL_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_VERCEL_SUPABASE_ANON_KEY!,
  );
