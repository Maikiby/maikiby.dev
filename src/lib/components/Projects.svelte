<script lang="ts">
	const projects = [
		{
			title: 'Project One',
			description: 'A brief description of the project and the technologies used to build it.',
			tags: ['SvelteKit', 'Tailwind', 'TypeScript'],
			demoUrl: '#',
			repoUrl: '#'
		},
		{
			title: 'Project Two',
			description: 'A brief description of the project and the technologies used to build it.',
			tags: ['React', 'Node.js', 'MongoDB'],
			demoUrl: '#',
			repoUrl: '#'
		},
		{
			title: 'Project Three',
			description: 'A brief description of the project and the technologies used to build it.',
			tags: ['Vue', 'Firebase', 'Sass'],
			demoUrl: '#',
			repoUrl: '#'
		}
	];
</script>

<section id="projects" class="py-20 px-4">
	<div class="container mx-auto max-w-6xl">
		<h2 class="mb-12 text-center text-3xl font-bold text-(--heading-font-color)">Projects</h2>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div class="overflow-hidden rounded-lg border border-(--color-surface-200) bg-(--body-background-color) transition-transform hover:-translate-y-1">
					<div class="aspect-video bg-(--color-surface-200)"></div>
					<div class="p-6">
						<h3 class="mb-2 text-xl font-bold text-(--heading-font-color)">{project.title}</h3>
						<p class="mb-4 text-(--base-font-color)">{project.description}</p>
						<div class="mb-6 flex flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="rounded-full bg-(--color-primary-100) px-3 py-1 text-xs font-medium text-(--color-primary-700) dark:bg-(--color-primary-900) dark:text-(--color-primary-100)">
									{tag}
								</span>
							{/each}
						</div>
						<div class="flex gap-4">
							<a
								href={project.demoUrl}
								class="text-sm font-medium text-(--color-primary-500) hover:underline"
							>
								Live Demo
							</a>
							<a
								href={project.repoUrl}
								class="text-sm font-medium text-(--base-font-color) hover:underline"
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
