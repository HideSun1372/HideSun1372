import { Link } from "wouter";
import gifImage from "@assets/egbnebde4z5f1_1764012886964.gif";
import projectGif from "@assets/ch3-spoiler-i-ripped-all-of-this-guys-sprites-and-made-some-v0-olxlbovsfb5f1_1764012956214.gif";
import contactImage from "@assets/273063-253_1764013414243.gif";

export default function Bio() {
  const projects = [
    {
      name: "ZETATRAVELER",
      description: "A simple RPG game inspired by Earthbound, Undertale, etc.",
      url: "https://zetatraveler.vercel.app"
    },
    {
      name: "Debation",
      description: "A debate app consisting of learning features, practicing features and a lot more.",
      url: "https://debation.vercel.app"
    }
  ];


  const handleGifClick = () => {
    window.open('https://deltarune.com/d_a_m_n_y_o_u_t_e_n_n_a', '_blank');
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
            className="w-16 h-16 object-contain cursor-pointer"
            data-testid="gif-character"
            onClick={handleGifClick}
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
              className="w-16 h-16 object-contain cursor-pointer"
              data-testid="gif-projects"
              onClick={handleGifClick}
            />
          </div>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} data-testid={`project-${index}`}>
                <h3
                  className="text-[20px] font-normal tracking-[-0.01em] leading-none mb-2"
                  style={{ WebkitFontSmoothing: 'antialiased' }}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.name}
                  </a>
                </h3>
                <p
                  className="text-[20px] font-normal tracking-[-0.01em] leading-relaxed text-muted-foreground"
                  style={{ WebkitFontSmoothing: 'antialiased' }}
                >
                  {project.description}
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
              className="w-16 h-16 object-contain cursor-pointer"
              data-testid="img-contact"
              onClick={handleGifClick}
            />
          </div>
          <div className="space-y-3">
            <p
              className="text-[20px] font-normal tracking-[-0.01em] leading-relaxed text-muted-foreground"
              data-testid="text-email"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              Email: siqichen0802@gmail.com
            </p>
            <p
              className="text-[20px] font-normal tracking-[-0.01em] leading-relaxed text-muted-foreground"
              data-testid="text-github"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              GitHub: github.com/HideSun1372
            </p>
            <p
              className="text-[20px] font-normal tracking-[-0.01em] leading-relaxed text-muted-foreground"
              data-testid="text-discord"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              Discord: hidesun1372
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
