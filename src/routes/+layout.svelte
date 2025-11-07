<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, initializeStores, Toast } from '@skeletonlabs/skeleton';
	import BSkyIcon from '~icons/ri/bluesky-fill';
	import GithubMark from '~icons/mdi/github';

	initializeStores();
</script>

<!-- Pass contents to the App Shell -->
<Toast />
<AppShell>
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
	<slot />
</AppShell>
