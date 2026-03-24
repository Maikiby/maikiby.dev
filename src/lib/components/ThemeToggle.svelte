<script lang="ts">
	import { Sun, Moon } from '@lucide/svelte';
	import { theme } from '$lib/theme.svelte';

	let { class: className = '' } = $props();
</script>

<button
	type="button"
	class="p-2 rounded-lg hover:bg-(--color-surface-200) transition-colors text-(--base-font-color) {className}"
	onclick={() => theme.toggle()}
	aria-label="Toggle theme"
>
	{#if theme.current === 'light'}
		<Moon size={20} />
	{:else}
		<Sun size={20} />
	{/if}
</button>
