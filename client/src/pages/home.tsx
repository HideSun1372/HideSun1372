export default function Home() {
  const scatteredPositions = [
    { top: '10%', left: '15%' },
    { top: '20%', right: '20%' },
    { top: '15%', left: '70%' },
    { top: '75%', right: '15%' },
    { top: '80%', left: '60%' },
    { top: '40%', left: '5%' },
    { top: '50%', right: '8%' },
    { top: '25%', left: '45%' },
    { top: '70%', left: '85%' },
    { top: '30%', right: '35%' },
  ];

  return (
    <div className="relative h-screen overflow-hidden" data-testid="container-home">
      {scatteredPositions.map((pos, index) => (
        <div
          key={index}
          className="absolute text-[20px] font-normal tracking-[-0.01em] leading-none text-muted-foreground/40"
          style={{ 
            ...pos,
            WebkitFontSmoothing: 'antialiased'
          }}
          data-testid={`text-scattered-${index}`}
        >
          hi
        </div>
      ))}
      
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
