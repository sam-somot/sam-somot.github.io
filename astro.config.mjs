import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://sam-somot.github.io', base: '/', output: 'static', integrations: [sitemap()], vite: { plugins: [yaml()] } });
