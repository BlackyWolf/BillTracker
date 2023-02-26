<script lang="ts">
    import { joinCss } from '$lib/utilities/css.utilities';

    type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning'  |'info';
    type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    type ButtonType = 'button' | 'reset' | 'submit';

    function getColor(color: ButtonColor) {
        switch (color) {
            case 'primary': return 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus:ring-indigo-500';
            case 'success': return 'bg-green-100 text-green-700 hover:bg-green-200 focus:ring-green-500';
            case 'danger': return 'bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-500';
        }
    }

    function getSize(size: ButtonSize) {
        switch (size) {
            case 'xs': return 'px-2.5 py-1.5 text-xs';
            case 'sm': return 'px-3 py-2 text-sm';
            case 'md': return 'px-4 py-2 text-sm';
            case 'lg': return 'px-4 py-2 text-base';
            case 'xl': return 'px-6 py-3 text-base';
        }
    }

    export let color: ButtonColor;
    export let css = '';
    export let size: ButtonSize = 'md';
    export let type: ButtonType = 'button';

    const classes = joinCss(
        'inline-flex items-center rounded border border-transparent',
        'font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2',
        getColor(color),
        getSize(size),
        css
    );
</script>

<button
    {type}
    class={classes}
    on:click
>
    <slot />
</button>
