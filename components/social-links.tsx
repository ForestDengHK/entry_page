'use client';

import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';
import { FeedbackForm } from './feedback-form';

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
  );
}

export function SocialLinks() {
  const socialLinks = [
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@况且频道',
      label: 'YouTube',
      color: 'text-red-500 hover:text-red-600',
    },
    {
      icon: XIcon,
      href: 'https://twitter.com/deng_forest',
      label: 'X (Twitter)',
      color: 'text-foreground hover:text-foreground/80',
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      {socialLinks.map((social) => (
        <Button
          key={social.label}
          variant="outline"
          size="icon"
          className={`rounded-full bg-background shadow-lg ${social.color}`}
          asChild
        >
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <social.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
      <FeedbackForm />
    </div>
  );
} 