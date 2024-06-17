// Docs: https://vitejs.dev/guide/env-and-mode

/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="unplugin-icons/types/svelte" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
