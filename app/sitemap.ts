import { tools } from '@/lib/types';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.swifttools.eu';
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

  // Add blog route
  const blogRoute = {
    url: 'https://blog.swifttools.eu',
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  };

  // Add all tools to sitemap, excluding the blog since it's already added
  const toolRoutes = tools
    .filter(tool => tool.url !== 'https://blog.swifttools.eu')
    .map((tool) => ({
      url: tool.url,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  return [...routes, blogRoute, ...toolRoutes];
} 