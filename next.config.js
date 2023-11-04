/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
     },
    images: {
        domains: ['placehold.it', 'via.placeholder.com','lumiere-a.akamaihd.net','www.skidrow-games.com','cdn.akamai.steamstatic.com','cdn2.unrealengine.com',
    'steamcdn-a.akamaihd.net'
    ],
     },
}

module.exports = nextConfig
