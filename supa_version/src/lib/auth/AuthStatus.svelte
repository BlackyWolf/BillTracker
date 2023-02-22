<script lang="ts">
    import type { Session } from '@supabase/supabase-js';

    export let css: string = '';
    export let session: Session;
</script>

<span class={css}>
    {#if session}
        Welcome, {session.user.email}
    {:else}
        Sign In
    {/if}
</span>
