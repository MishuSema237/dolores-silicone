import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Dolores Silicone",
        short_name: "Dolores Silicone",
        description: "Handcrafted silicone reborn babies designed with passion and precision.",
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#db2777',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/assets/og-logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/assets/og-logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
