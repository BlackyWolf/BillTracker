import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createClient } from '@supabase/auth-helpers-sveltekit';
import type { SupabaseClient } from '@supabase/supabase-js';

export const supabase: SupabaseClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);;
