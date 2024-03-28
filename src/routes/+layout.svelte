<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import BSkyIcon from '~icons/ri/bluesky-fill';
	import GithubMark from '~icons/mdi/github';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<h1 class="h1 font-bold">Welcome to my portfolio!</h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn variant-filled-tertiary"
					href="https://bsky.app/profile/maikiby.dev"
					target="_blank"
					rel="noreferrer"
				>
					<BSkyIcon />
				</a>
				<a
					class="btn variant-filled"
					href="https://github.com/Maikiby"
					target="_blank"
					rel="noreferrer"
				>
					<GithubMark />
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
