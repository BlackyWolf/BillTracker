<script lang="ts">
    import { invalidate } from '$app/navigation';
    import { supabase } from '$lib/utilities/supabase';
    import { onMount } from 'svelte';
    import '../app.css';

    onMount(() => {
        const { data: { subscription }} = supabase.auth.onAuthStateChange(() => {
            invalidate('supabase:auth');
        });

        return () => {
            subscription.unsubscribe();
        };
    });
</script>

<svelte:head>
    <script src="https://kit.fontawesome.com/e66b7b4324.js" crossorigin="anonymous"></script>
</svelte:head>

<slot />
