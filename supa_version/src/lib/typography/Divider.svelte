<script lang="ts">
    export let text: string;
</script>

<div class="relative my-6">
    <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-center text-sm">
        <span class="bg-white px-2 text-gray-500">
            {text}
        </span>
    </div>
</div>
