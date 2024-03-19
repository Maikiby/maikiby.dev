import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const neoFlutter: CustomThemeConfig = {
	name: 'neo-flutter',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #f3b6cf 
		"--color-primary-50": "253 244 248", // #fdf4f8
		"--color-primary-100": "253 240 245", // #fdf0f5
		"--color-primary-200": "252 237 243", // #fcedf3
		"--color-primary-300": "250 226 236", // #fae2ec
		"--color-primary-400": "247 204 221", // #f7ccdd
		"--color-primary-500": "243 182 207", // #f3b6cf
		"--color-primary-600": "219 164 186", // #dba4ba
		"--color-primary-700": "182 137 155", // #b6899b
		"--color-primary-800": "146 109 124", // #926d7c
		"--color-primary-900": "119 89 101", // #775965
		// secondary | #fbee64 
		"--color-secondary-50": "254 252 232", // #fefce8
		"--color-secondary-100": "254 252 224", // #fefce0
		"--color-secondary-200": "254 251 216", // #fefbd8
		"--color-secondary-300": "253 248 193", // #fdf8c1
		"--color-secondary-400": "252 243 147", // #fcf393
		"--color-secondary-500": "251 238 100", // #fbee64
		"--color-secondary-600": "226 214 90", // #e2d65a
		"--color-secondary-700": "188 179 75", // #bcb34b
		"--color-secondary-800": "151 143 60", // #978f3c
		"--color-secondary-900": "123 117 49", // #7b7531
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #FF5733 
		"--color-error-50": "255 230 224", // #ffe6e0
		"--color-error-100": "255 221 214", // #ffddd6
		"--color-error-200": "255 213 204", // #ffd5cc
		"--color-error-300": "255 188 173", // #ffbcad
		"--color-error-400": "255 137 112", // #ff8970
		"--color-error-500": "255 87 51", // #FF5733
		"--color-error-600": "230 78 46", // #e64e2e
		"--color-error-700": "191 65 38", // #bf4126
		"--color-error-800": "153 52 31", // #99341f
		"--color-error-900": "125 43 25", // #7d2b19
		// surface | #775965 
		"--color-surface-50": "235 230 232", // #ebe6e8
		"--color-surface-100": "228 222 224", // #e4dee0
		"--color-surface-200": "221 214 217", // #ddd6d9
		"--color-surface-300": "201 189 193", // #c9bdc1
		"--color-surface-400": "160 139 147", // #a08b93
		"--color-surface-500": "119 89 101", // #775965
		"--color-surface-600": "107 80 91", // #6b505b
		"--color-surface-700": "89 67 76", // #59434c
		"--color-surface-800": "71 53 61", // #47353d
		"--color-surface-900": "58 44 49", // #3a2c31
		
	}
};
