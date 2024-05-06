import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin({
    solid: {
      moduleName: "@lightningjs/solid",
      generate: 'universal',
    },
  })],
  resolve: {
    alias: {
      theme: '@lightningjs/l3-ui-theme-base',
    },
    dedupe: ['solid-js', '@lightningjs/solid', '@lightningjs/solid-primitives', '@lightningjs/renderer'],
  },
  optimizeDeps: {
    include: [],
    exclude: [
    '@lightningjs/solid',
    '@lightningjs/solid-primitives',
    '@lightningjs/solid-ui',
    '@lightningjs/renderer/core',
    '@lightningjs/renderer/workers/renderer']
  },
  server: {
    hmr: false,
  },
});
