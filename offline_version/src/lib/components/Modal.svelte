<script lang="ts">
    function hideModal() {
        show = false;
    }

    function hideModalOnClick(event: MouseEvent) {
        if (event.target?.classList?.contains('modal-bg')) {
            show = false;
        }
    }

    function hideModalOnKey(event: KeyboardEvent) {
        console.log(event);
    }

    export let show = false;
</script>

{#if show}
    <div
        class="modal-bg fixed bg-gray-900/25 h-full w-full top-0 right-0"
        on:click={hideModalOnClick}
        on:keyup={hideModalOnKey}
    >
        <div class="modal-bg flex w-full h-full">
            <div class="bg-white m-auto w-1/4 rounded-md shadow-md overflow-hidden">
                {#if $$slots.header}
                    <div
                        class="px-4 py-2 font-semibold text-sm border-b border-gray-300 bg-gray-100 text-gray-600 flex items-center"
                    >
                        <slot name="header"></slot>

                        <button type="button" class="ml-auto" on:click={hideModal}>
                            <i class="fa-duotone fa-xmark fa-2x"></i>
                        </button>
                    </div>
                {/if}

                <div class="p-4 relative">
                    <slot />

                    {#if !$$slots.header}
                        <button type="button" class="ml-auto absolute right-2 top-1" on:click={hideModal}>
                            <i class="fa-duotone fa-xmark fa-2x"></i>
                        </button>
                    {/if}
                </div>

                {#if $$slots.footer}
                    <div class="px-4 py-2 border-t border-gray-300 bg-gray-100 text-gray-600">
                        <slot name="footer"></slot>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}
