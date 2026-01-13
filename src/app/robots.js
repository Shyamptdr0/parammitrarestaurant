import { MetadataRoute } from 'next'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/static/'],
    },
    sitemap: 'https://www.parammitrarestaurant.in/sitemap.xml',
  }
}
