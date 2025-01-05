'use client';

import { useState } from 'react';
import { Tool, tools } from '@/lib/types';
import { Search } from '@/components/ui/search';
import { ToolCard } from '@/components/tool-card';
import { FeedbackForm } from '@/components/feedback-form';
import { Footer } from '@/components/footer';
import { Wrench } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = tools.filter((tool) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.language.toLowerCase().includes(searchTerm) ||
      tool.purpose.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Wrench className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold tracking-tight">Swift Tools</h1>
            </div>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A curated collection of self-developed and recommended tools to enhance your workflow.
            </p>
          </div>

          <div className="mb-12 flex justify-center">
            <Search value={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.url} tool={tool} />
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center">
              <p className="text-lg text-muted-foreground">No tools found matching your search criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FeedbackForm />
    </div>
  );
}