import { Tool } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="line-clamp-2">{tool.name}</CardTitle>
          <Badge variant={tool.type === 'self_dev' ? 'default' : 'secondary'} className="shrink-0">
            {tool.type === 'self_dev' ? 'Self-developed' : 'External'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-4 flex items-center gap-2">
          <Badge variant="outline">{tool.language}</Badge>
        </div>
        <p className="mb-2 text-sm text-muted-foreground">{tool.description}</p>
        <p className="text-sm">
          <span className="font-medium">Purpose:</span> {tool.purpose}
        </p>
      </CardContent>
      <CardFooter>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Visit Tool <ExternalLink className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
}