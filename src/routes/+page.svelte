<script lang="ts">
	import { page } from '$app/stores';
	let currentTile: number = 0;
	import { AppRail, AppRailAnchor, AppRailTile, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
</script>

<div class="container mx-auto p-8 space-y-8">
	<AppRail>
		<!-- --- -->
		<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<span>Mittens</span>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<span>Pharma Assist</span>
		</AppRailTile>
	</AppRail>

	<TabGroup
		justify="justify-center"
		active="variant-filled-primary"
		hover="hover:variant-soft-primary"
		flex="flex-1 lg:flex-none"
		rounded=""
		border=""
		class="bg-surface-100-800-token w-full"
	>
		<TabAnchor href="/about" selected={$page.url.pathname === '/about'}>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<span>(label)</span>
		</TabAnchor>
		<TabAnchor href="/pharma" selected={$page.url.pathname === '/pharma'}>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<span>(label)</span>
		</TabAnchor>
		<TabAnchor href="/mittens" selected={$page.url.pathname === '/mittens'}>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<span>(label)</span>
		</TabAnchor>
	</TabGroup>
</div>
