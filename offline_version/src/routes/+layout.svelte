<script>
    import '../app.css';
</script>

<svelte:head>
    <script src="https://kit.fontawesome.com/e66b7b4324.js" crossorigin="anonymous"></script>
</svelte:head>

<nav class="bg-white px-8 py-4 border-b border-gray-400">
    <a href="/" class="text-4xl flex font-quicksand">
        <span class="font-semibold">Bill</span>
        <span class="font-thin border-b border-black">Tracker</span>
    </a>
</nav>

<div class="flex flex-grow">
    <nav class="flex flex-col w-64 border-r border-gray-400">
        <a href="/bills" class="link">
            <i class="fa-duotone fa-file-invoice-dollar fa-2x mr-4 text-red-600"></i>

            <span class="font-semibold">Bills</span>
        </a>
    </nav>

    <main class="p-8">
        <slot />
    </main>
</div>

<style>
    .link {
        @apply block py-3 pl-8 flex items-center;
    }

    .link:hover {
        @apply bg-slate-200 duration-150 transition-all;
    }
</style>
