<script lang="ts">
    import { joinCss } from '$lib/utilities/css.utilities';
    import type { HTMLInputTypeAttribute } from 'svelte/elements';

    export let css = '';
    export let id: string | undefined = undefined;
    export let label: string;
    export let list: string;
    export let name: string;
    export let placeholder: string | undefined = undefined;
    export let type: HTMLInputTypeAttribute = 'text';

    if (list === id) {
        throw new Error('The properties \'list\' and \'id\' cannot be the same');
    }

    const classes = joinCss(
        'rounded-md border border-gray-300 px-3 py-2 shadow-sm',
        'focus-within:border-indigo-600 focus-within:ring-1',
        'focus-within:ring-indigo-600',
        css
    );
</script>

<div class={classes}>
    <label
        for={id || name}
        class="block text-xs font-medium text-gray-900"
    >
        {label}
    </label>

    <input
        {type}
        {name}
        {list}
        id={id || name}
        class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
        {placeholder}
    >

    <datalist id={list}>
        <slot />
    </datalist>
</div>
