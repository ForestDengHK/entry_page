export interface Tool {
  name: string;
  url: string;
  type: 'self_dev' | 'external';
  language: string;
  description: string;
  purpose: string;
}

export const tools: Tool[] = [
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
