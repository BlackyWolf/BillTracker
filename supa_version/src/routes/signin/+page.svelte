<script lang="ts">
    import type { ActionData } from './$types';

    export let form: ActionData;
</script>

<div class="flex flex-grow flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-200">
    <div class="sm:mx-auto sm:w-full sm:max-w-md flex items-center">
        <i class="fa-duotone fa-envelope-open-dollar fa-3x text-indigo-600"></i>

        <div class="ml-6">
            <h2
                class="text-3xl font-bold tracking-tight text-gray-900"
            >
                Sign in to your account
            </h2>

            <p class="mt-2 text-sm text-gray-600">
                Or
                <a
                    href="/signup"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    signup for free
                </a>
            </p>
        </div>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form class="space-y-6" method="POST">
                {#if (form?.error)}
                    <p class="text-red-600 font-semibold text-sm mb-4">{form.error}</p>
                {/if}

                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>

                    <div class="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="password"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>

                    <div class="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />

                        <label
                            for="remember-me"
                            class="ml-2 block text-sm text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <a
                            href="/reset-password"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
