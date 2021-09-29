type registerType = 'prompt' | 'autoUpdate'

const pwaConfig = {
  includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],  
  manifest: {
    name: 'Globely',
    short_name: 'Globely',
    description: 'Shows a globe',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      }
    ]
  },
  workbox: {
    sourcemap: true,
    cleanupOutdatedCaches: false,
  },
  registerType: "prompt" as registerType,
};

export default pwaConfig;
