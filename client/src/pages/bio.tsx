import { Link } from "wouter";
import gifImage from "@assets/egbnebde4z5f1_1764012886964.gif";
import projectGif from "@assets/ch3-spoiler-i-ripped-all-of-this-guys-sprites-and-made-some-v0-olxlbovsfb5f1_1764012956214.gif";
import contactImage from "@assets/273063-253_1764013414243.gif";

export default function Bio() {
  const projects = [
    {
      name: "Random Color Generator",
      description: "A website that shows you random colors when you press spacebar"
    },
    {
      name: "Snake Game Clone",
      description: "Built a simple snake game using JavaScript and canvas"
    },
    {
      name: "Todo List App",
      description: "My first React project - a basic todo app with local storage"
    },
    {
      name: "Discord Bot",
      description: "A bot that sends random memes from Reddit"
    },
    {
      name: "Weather Dashboard",
      description: "Shows the weather using a free API, made it look cool with gradients",
      hasWeatherLink: true
    }
  ];

  const handleWeatherClick = () => {
    window.open('https://deltarune.com/weather', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8" data-testid="container-bio">
      <div className="max-w-2xl w-full">
        <div className="flex items-center gap-6 mb-6">
          <h1 
            className="text-[20px] font-normal tracking-[-0.01em] leading-none" 
            data-testid="text-bio-name"
            style={{ WebkitFontSmoothing: 'antialiased' }}
          >
            Justin Chen
          </h1>
          <img 
            src={gifImage} 
            alt="character gif" 
            className="w-16 h-16 object-contain"
            data-testid="gif-character"
          />
        </div>
        <p 
          className="text-[20px] font-normal tracking-[-0.01em] leading-relaxed text-muted-foreground mb-12" 
          data-testid="text-bio-description"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          Middle school developer which designs random stuff for fun
        </p>

        <div className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            <h2 
              className="text-[20px] font-normal tracking-[-0.01em] leading-none"
              data-testid="text-projects-heading"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              Projects
            </h2>
            <img 
              src={projectGif} 
              alt="project gif" 
              className="w-16 h-16 object-contain"
              data-testid="gif-projects"
            />
          </div>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} data-testid={`project-${index}`}>
                <h3 
                  className="text-[20px] font-normal tracking-[-0.01em] leading-none mb-2"
                  style={{ WebkitFontSmoothing: 'antialiased' }}
                >
                  {project.name}
                </h3>
                <p 
                  className="text-[20px] font-normal tracking-[-0.01em] leading-relaxed text-muted-foreground"
                  style={{ WebkitFontSmoothing: 'antialiased' }}
                >
                  {project.hasWeatherLink ? (
                    <>
                      Shows the{' '}
                      <span 
                        onClick={handleWeatherClick}
                        className="cursor-pointer hover:text-foreground transition-colors"
                        data-testid="link-weather"
                      >
                        weather
                      </span>
                      {' '}using a free API, made it look cool with gradients
                    </>
                  ) : (
                    project.description
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            <h2 
              className="text-[20px] font-normal tracking-[-0.01em] leading-none"
              data-testid="text-contact-heading"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              Contact Me
            </h2>
            <img 
              src={contactImage} 
              alt="contact image" 
              className="w-16 h-16 object-contain"
              data-testid="img-contact"
            />
          </div>
          <div className="space-y-3">
            <p 
              className="text-[20px] font-normal tracking-[-0.01em] leading-relaxed text-muted-foreground"
              data-testid="text-email"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              Email: justin.chen@example.com
            </p>
            <p 
              className="text-[20px] font-normal tracking-[-0.01em] leading-relaxed text-muted-foreground"
              data-testid="text-github"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              GitHub: github.com/justinchen
            </p>
            <p 
              className="text-[20px] font-normal tracking-[-0.01em] leading-relaxed text-muted-foreground"
              data-testid="text-discord"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              Discord: justin#1234
            </p>
          </div>
        </div>

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
