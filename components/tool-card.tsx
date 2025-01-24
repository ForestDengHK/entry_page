import { Tool } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const isToolBlog = tool.name.toLowerCase().includes('blog');
  
  return (
    <Card className={cn(
      "flex h-full flex-col transition-all duration-300",
      tool.featured && "relative border-primary bg-primary/5 shadow-lg hover:shadow-xl"
    )}>
      {tool.featured && (
        <div className="absolute -top-2 -right-2 rounded-full bg-primary p-1.5 text-primary-foreground shadow-lg">
          <Star className="h-4 w-4 fill-current" />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className={cn(
            "line-clamp-2",
            tool.featured && "text-primary"
          )}>{tool.name}</CardTitle>
          <div className="flex flex-wrap gap-2">
            {tool.featured && (
              <Badge variant="default" className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
            <Badge variant={tool.type === 'self_dev' ? 'default' : 'secondary'} className="shrink-0">
              {tool.type === 'self_dev' ? 'Self-developed' : 'External'}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-4 flex items-center gap-2">
          <Badge variant={tool.featured ? "default" : "outline"} className={cn(
            tool.featured && "bg-primary/20 text-primary hover:bg-primary/30"
          )}>{tool.language}</Badge>
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
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium hover:underline",
            tool.featured ? "text-primary" : "text-muted-foreground"
          )}
        >
          {isToolBlog ? 'Visit Blog' : 'Visit Tool'} <ExternalLink className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
}