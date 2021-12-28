import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,ts}'],
    exclude: [
      'node_modules',
      '.git',
      'excluded',
      'dist',
      'windi.config.{ts,js}',
      'tailwind.config.{ts,js}',
    ],
  },
  shortcuts: {
    bn: 'rounded border border-gray-300 text-gray-600 px-4 py-2 m-2 inline-block hover:shadow',
    btn: 'rounded border border-gray-300 text-gray-600 px-4 py-2 m-2 inline-block hover:shadow',
  },
});
