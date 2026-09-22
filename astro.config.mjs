import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
export default defineConfig({ site: 'https://sam-somot.github.io', base: '/', output: 'static', vite: { plugins: [yaml()] } });
