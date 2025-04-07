import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://judeeseka-portfolio.vercel.app',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}