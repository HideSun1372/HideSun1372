import { Link } from "wouter";

export default function Bio() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8" data-testid="container-bio">
      <div className="max-w-2xl">
        <h1 
          className="text-[20px] font-normal tracking-[-0.01em] leading-none mb-6" 
          data-testid="text-bio-name"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          Justin Chen
        </h1>
        <p 
          className="text-[20px] font-normal tracking-[-0.01em] leading-relaxed text-muted-foreground mb-8" 
          data-testid="text-bio-description"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          Middle school developer which designs random stuff for fun
        </p>
        <Link href="/">
          <a 
            className="text-[20px] font-normal tracking-[-0.01em] leading-none text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            data-testid="link-back-home"
            style={{ WebkitFontSmoothing: 'antialiased' }}
          >
            ← back
          </a>
        </Link>
      </div>
    </div>
  );
}
