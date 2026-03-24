<script lang="ts">
	const skills = [
		'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Svelte', 'React', 'Node.js', 'Tailwind CSS', 'Git', 'SQL'
	];
</script>

<section id="skills" class="py-20 px-4 bg-(--body-background-color)">
	<div class="container mx-auto max-w-4xl text-center">
		<h2 class="mb-12 text-3xl font-bold text-(--heading-font-color)">Skills</h2>
		<div class="flex flex-wrap justify-center gap-4">
			{#each skills as skill}
				<div class="rounded-lg border border-(--color-surface-200) bg-(--body-background-color) px-6 py-3 text-lg font-medium text-(--base-font-color) shadow-sm transition-all hover:-translate-y-1 hover:bg-(--color-primary-500) hover:text-(--color-primary-contrast-500) hover:shadow-md cursor-default">
					{skill}
				</div>
			{/each}
		</div>
	</div>
</section>
