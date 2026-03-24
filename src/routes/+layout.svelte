<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col bg-(--body-background-color) text-(--base-font-color) font-(--base-font-family)">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
