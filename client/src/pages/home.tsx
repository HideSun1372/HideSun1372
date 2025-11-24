export default function Home() {
  const scatteredPositions = [
    { top: '8%', left: '12%' },
    { top: '15%', right: '18%' },
    { top: '12%', left: '65%' },
    { top: '22%', left: '85%' },
    { top: '35%', left: '8%' },
    { top: '38%', right: '10%' },
    { top: '65%', right: '12%' },
    { top: '68%', left: '75%' },
    { top: '18%', left: '38%' },
    { top: '72%', right: '25%' },
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
