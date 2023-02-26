<script lang="ts">
    import { joinCss } from '$lib/utilities/css.utilities';

    export let cols: number | undefined = undefined;
    export let css = '';
    export let id: string | undefined = undefined;
    export let label: string;
    export let name: string;
    export let placeholder: string | undefined = undefined;
    export let rows: number | undefined = undefined;

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

    <textarea
        {cols}
        {name}
        id={id || name}
        class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
        {placeholder}
        {rows}
    ></textarea>
</div>
