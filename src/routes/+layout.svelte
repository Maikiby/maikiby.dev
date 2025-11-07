<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, initializeStores, Toast } from '@skeletonlabs/skeleton';
	import BSkyIcon from '~icons/ri/bluesky-fill';
	import GithubMark from '~icons/mdi/github';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	initializeStores();
</script>

<!-- Pass contents to the App Shell -->
<Toast />
<AppShell>
	{#snippet header()}
	
			<AppBar>
				{#snippet lead()}
					
						<h1 class="h1 font-bold">Welcome to my portfolio!</h1>
					
					{/snippet}
				{#snippet trail()}
					
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
					
					{/snippet}
			</AppBar>
		
	{/snippet}
	{@render children?.()}
</AppShell>
