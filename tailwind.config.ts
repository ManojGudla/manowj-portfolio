import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#080809', pink:'#FF2DA8', lime:'#D4FF24', paper:'#F5F3EE', muted:'#999995' }, fontFamily: { sans:['var(--font-inter)','sans-serif'], display:['var(--font-space)','sans-serif'] }, boxShadow: { 'pink':'0 0 0 1px rgba(255,45,168,.35),0 12px 40px rgba(255,45,168,.08)' } } }, plugins: [] };
export default config;
