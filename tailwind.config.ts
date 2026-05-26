import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#030712',
        bgSoft: '#050816',
        bgAlt: '#070A12',
        card: 'rgba(255,255,255,0.045)',
        borderSoft: 'rgba(255,255,255,0.10)',
        textMuted: 'rgba(255,255,255,0.65)',
        neon: '#8B5CF6',
        neonDeep: '#7C3AED',
        accent: '#F97316'
      },
      maxWidth: { frame: '1440px', panel: '1320px' },
      boxShadow: { neon: '0 0 40px rgba(139,92,246,.35)' }
    }
  },
  plugins: []
};

export default config;
