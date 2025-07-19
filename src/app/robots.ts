import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/checkout/',
          '/perfil/',
          '/pedidos/',
          '/carrito/',
          '/_next/',
          '/static/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/checkout/',
          '/perfil/',
          '/pedidos/',
          '/carrito/',
        ],
      },
    ],
    sitemap: 'https://rincondeduendes.com/sitemap.xml',
    host: 'https://rincondeduendes.com',
  }
} 