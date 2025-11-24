export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden" data-testid="container-home">
      <div className="flex items-center justify-center h-full">
        <h1 
          className="text-[20px] font-normal tracking-[-0.01em] leading-none" 
          data-testid="text-greeting"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          hi
        </h1>
      </div>

      <div 
        className="absolute bottom-[15%] left-[20%]"
        style={{ WebkitFontSmoothing: 'antialiased' }}
      >
        <h2 
          className="text-[20px] font-normal tracking-[-0.01em] leading-none mb-2" 
          data-testid="text-name"
        >
          Justin Chen
        </h2>
        <p 
          className="text-[20px] font-normal tracking-[-0.01em] leading-tight text-muted-foreground" 
          data-testid="text-description"
        >
          Middle school developer which designs random stuff for fun
        </p>
      </div>
    </div>
  );
}
