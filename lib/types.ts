export interface Tool {
  name: string;
  url: string;
  type: 'self_dev' | 'external';
  language: string;
  description: string;
  purpose: string;
  featured?: boolean;
}

export const tools: Tool[] = [
  {
    name: 'Swifttools Official Blog',
    url: 'https://blog.swifttools.eu',
    type: 'self_dev',
    language: 'Next.js',
    description: 'Official blog for Swift Tools Owner (Forest), featuring articles about development, tools, and technology.',
    purpose: 'Share knowledge and updates about Forest and development topics.',
    featured: true,
  },
  {
    name: 'Markdown Online Editor & Exporter',
    url: 'https://mdexport.swifttools.eu',
    type: 'self_dev',
    language: 'Python',
    description: 'An online editor for creating markdown documents with export functionality.',
    purpose: 'Simplify markdown document creation and export.',
  },
  {
    name: 'Markdown Convert Tool',
    url: 'http://mdconvert.swifttools.eu',
    type: 'self_dev',
    language: 'Python',
    description: 'Converts files in other formats (PDF, DOCX, XML, etc.) to markdown.',
    purpose: 'Enable easy conversion to markdown from various file types.',
  },
  {
    name: 'Social Media Download Tool',
    url: 'https://cobalt.tools/',
    type: 'external',
    language: 'Unknown',
    description: 'Download videos, audios from social platforms (TikTok, Instagram, X, YouTube etc.).',
    purpose: 'Easy video and audio downloading.',
  },
];
