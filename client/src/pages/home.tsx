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

export default function Home() {
  return (
    <div className="page-home" data-testid="container-home">
      {scatteredPositions.map((pos, index) => {
        const clickable = index === 14 || index === 20;
        const href =
          index === 14 ? 'https://deltarune.com/romb' :
          index === 20 ? 'https://deltarune.com/dess' : undefined;
        return (
          <span
            key={index}
            className={`scattered${clickable ? ' scattered--clickable' : ''}`}
            style={pos}
            onClick={href ? () => window.open(href, '_blank') : undefined}
            data-testid={`text-scattered-${index}`}
          >
            hi
          </span>
        );
      })}
      <div className="page-home__center">
        <h1
          className="greeting"
          data-testid="text-greeting"
          onClick={() => window.location.href = '/bio'}
        >
          hi
        </h1>
      </div>
    </div>
  );
}