<script lang="ts">
	import { page } from '$app/stores';
	let currentTile: number = $state(0);
	import {
		type ToastSettings, Navigation, Tabs } from '@skeletonlabs/skeleton-svelte';
	import { Home, Briefcase, Info, Mail } from 'lucide-svelte';

	const toastStore = getToastStore();
	function comingSoon(event: MouseEvent) {
		event.preventDefault();
		const t: ToastSettings = {
			message: 'This page is coming soon!',
			background: 'preset-filled-warning-500'
		};
		toastStore.trigger(t);
	}
</script>

<div class="flex h-full">
	<div class="h-full">
		<Navigation>
			<Navigation.Tile bind:group={currentTile} name="tile-1" value={0} title="Mittens Project">
				{#snippet lead()}
								<Briefcase size={24} />
							{/snippet}
				<span>Mittens</span>
			</Navigation.Tile>
			<Navigation.Tile bind:group={currentTile} name="tile-2" value={1} title="Pharma Assist Project">
				{#snippet lead()}
								<Briefcase size={24} />
							{/snippet}
				<span>Pharma Assist</span>
			</Navigation.Tile>
		</Navigation>
	</div>

	<div class="flex-1 p-4 md:p-10 flex flex-col items-center space-y-8">
		<Tabs
			justify="justify-center"
			active="preset-filled-primary-500"
			hover="hover:preset-tonal-primary"
			flex="flex-1 lg:flex-none"
			class="bg-surface-100-900 w-full max-w-lg"
		>
			<Tabs.Control href="/" selected={$page.url.pathname === '/'}>
				{#snippet lead()}
								<Home size={24} />
							{/snippet}
				<span>Home</span>
			</Tabs.Control>
			<Tabs.Control href="/about" on:click={comingSoon} rel="noreferrer">
				{#snippet lead()}
								<Info size={24} />
							{/snippet}
				<span>About</span>
			</Tabs.Control>
			<Tabs.Control href="/contact" on:click={comingSoon} rel="noreferrer">
				{#snippet lead()}
								<Mail size={24} />
							{/snippet}
				<span>Contact</span>
			</Tabs.Control>
		</Tabs>

		<div class="w-full max-w-4xl">
			{#if currentTile === 0}
				<div class="card w-full max-w-md preset-filled-surface-100-900 p-4 text-center">
					<h2 class="h2 mb-4">Mittens Project</h2>
					<p>This is where the detailed description for the Mittens project will go. You can add images, links, and more.</p>
				</div>
			{:else if currentTile === 1}
				<div class="card w-full max-w-md preset-filled-surface-100-900 p-4 text-center">
					<h2 class="h2 mb-4">Pharma Assist Project</h2>
					<p>This is where the detailed description for the Pharma Assist project will go. You can add images, links, and more.</p>
				</div>
			{/if}
		</div>
	</div>
</div>
