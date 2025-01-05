export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex items-center justify-center md:h-24">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          © 2025{' '}
          <a
            href="https://www.linkedin.com/in/forest-deng-3163ab21/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Forest Deng
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}