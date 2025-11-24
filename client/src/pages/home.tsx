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
    { top: '5%', left: '45%' },
    { top: '10%', right: '5%' },
    { top: '25%', left: '15%' },
    { top: '28%', right: '30%' },
    { top: '32%', left: '70%' },
    { top: '42%', left: '25%' },
    { top: '45%', right: '45%' },
    { top: '55%', left: '5%' },
    { top: '58%', right: '35%' },
    { top: '75%', left: '90%' },
    { top: '78%', right: '8%' },
    { top: '6%', left: '28%' },
    { top: '20%', left: '55%' },
    { top: '70%', left: '8%' },
    { top: '75%', left: '5%' },
    { top: '95%', left: '5%' },
    { top: '58%', left: '18%' },
    { top: '62%', left: '32%' },
    { top: '60%', left: '42%' },
    { top: '56%', left: '28%' },
    { top: '63%', left: '22%' },
    { top: '59%', left: '38%' },
    { top: '61%', left: '15%' },
    { top: '88%', left: '55%' },
    { top: '92%', left: '62%' },
    { top: '90%', left: '72%' },
    { top: '88%', right: '15%' },
    { top: '93%', right: '8%' },
    { top: '90%', left: '45%' },
    { top: '82%', left: '18%' },
    { top: '85%', left: '25%' },
    { top: '87%', left: '32%' },
    { top: '83%', left: '12%' },
    { top: '92%', left: '28%' },
    { top: '88%', left: '38%' },
  ];

  const handleRombClick = () => {
    window.open('https://deltarune.com/romb', '_blank');
  };

  const handleDessClick = () => {
    window.open('https://deltarune.com/dess', '_blank');
  };

  return (
    <div className="relative h-screen overflow-hidden" data-testid="container-home">
      {scatteredPositions.map((pos, index) => (
        <div
          key={index}
          className={`absolute text-[20px] font-normal tracking-[-0.01em] leading-none text-muted-foreground/40 ${(index === 14 || index === 20) ? 'cursor-pointer hover:text-foreground transition-colors' : ''}`}
          style={{ 
            ...pos,
            WebkitFontSmoothing: 'antialiased'
          }}
          onClick={index === 14 ? handleRombClick : index === 20 ? handleDessClick : undefined}
          data-testid={`text-scattered-${index}`}
        >
          hi
        </div>
      ))}
      
      <div className="flex items-center justify-center h-full">
        <h1 
          className="text-[20px] font-normal tracking-[-0.01em] leading-none cursor-pointer hover:text-foreground transition-colors" 
          data-testid="text-greeting"
          style={{ WebkitFontSmoothing: 'antialiased' }}
          onClick={() => window.location.href = '/bio'}
        >
          hi
        </h1>
      </div>
    </div>
  );
}
