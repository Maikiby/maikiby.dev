<script lang="ts">
	import '../app.css';
	import { Home, Briefcase, Mail, User } from 'lucide-svelte';
</script>

<div class="flex h-screen bg-white dark:bg-gray-900">
	<!-- Sidebar -->
	<aside
		class="w-20 flex-col items-center space-y-8 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 py-8 hidden sm:flex"
	>
		<a
			href="/"
			class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
			aria-label="Home"
		>
			<Home class="h-6 w-6" />
		</a>
		<a
			href="/portfolio"
			class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
			aria-label="Portfolio"
		>
			<Briefcase class="h-6 w-6" />
		</a>
		<a
			href="/about"
			class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
			aria-label="About"
		>
			<User class="h-6 w-6" />
		</a>
		<a
			href="/contact"
			class="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
			aria-label="Contact"
		>
			<Mail class="h-6 w-6" />
		</a>
	</aside>

	<!-- Main Content -->
	<main class="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
		<slot />
	</main>
</div>