<script lang="ts">
	import { onMount } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-50 w-full border-b border-(--color-surface-200) bg-(--body-background-color)/95 backdrop-blur supports-backdrop-filter:bg-(--body-background-color)/60">
	<div class="container mx-auto flex h-16 items-center justify-between px-4">
		<a href="/" class="text-xl font-bold text-(--heading-font-color)" onclick={closeMenu}>
			Portfolio
		</a>

		<div class="flex items-center gap-4">
			<!-- Desktop Navigation -->
			<nav class="hidden md:flex gap-6 mr-4">
				{#each ['About', 'Projects', 'Skills', 'Contact'] as item}
					<a
						href="#{item.toLowerCase()}"
						class="text-sm font-medium text-(--base-font-color) transition-colors hover:text-(--color-primary-500)"
					>
						{item}
					</a>
				{/each}
			</nav>

			<ThemeToggle />

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden p-2 text-(--base-font-color)"
				onclick={toggleMenu}
				aria-label="Toggle menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					{#if isMenuOpen}
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					{:else}
						<line x1="4" x2="20" y1="12" y2="12" />
						<line x1="4" x2="20" y1="6" y2="6" />
						<line x1="4" x2="20" y1="18" y2="18" />
						{/if}
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if isMenuOpen}
		<div class="md:hidden border-t border-(--color-surface-200) bg-(--body-background-color)">
			<nav class="flex flex-col p-4 gap-4">
				{#each ['About', 'Projects', 'Skills', 'Contact'] as item}
					<a
						href="#{item.toLowerCase()}"
						class="text-sm font-medium text-(--base-font-color) hover:text-(--color-primary-500)"
						onclick={closeMenu}
					>
						{item}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>
