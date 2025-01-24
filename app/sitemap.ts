import { tools } from '@/lib/types';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.swifttools.eu';

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // Add all tools to sitemap
  const toolRoutes = tools.map((tool) => ({
    url: tool.url,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...routes, ...toolRoutes];
} 