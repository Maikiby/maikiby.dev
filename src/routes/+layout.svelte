<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import GoogleLogo from '~icons/mdi/google';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<h1 class="h1 font-bold">Welcome to my portfolio!</h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn variant-filled gap-1"
					href="https://google.com"
					target="_blank"
					rel="noreferrer"
				>
					<GoogleLogo />Google
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
		<!-- --- -->
	</svelte:fragment>
	<slot />
</AppShell>
