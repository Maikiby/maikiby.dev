import { browser } from '$app/environment';

class Theme {
    private _current = $state<'light' | 'dark'>('dark');

    constructor() {
        if (browser) {
            const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
            if (saved) {
                this._current = saved;
            } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                this._current = 'light';
            }
            this.apply();
        }
    }

    get current() {
        return this._current;
    }

    toggle() {
        this._current = this._current === 'light' ? 'dark' : 'light';
        if (browser) {
            localStorage.setItem('theme', this._current);
            this.apply();
        }
    }

    private apply() {
        if (browser) {
            if (this._current === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }
}

export const theme = new Theme();
