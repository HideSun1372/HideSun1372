import { useEffect } from "react";
import { Link } from "wouter";
import gifImage from "@assets/character.gif";
import projectGif from "@assets/character2.gif";
import contactImage from "@assets/character3.gif";

const projects = [
  {
    name: "ZETATRAVELER",
    description: "A simple RPG game inspired by Earthbound, Undertale, etc.",
    url: "https://zetatraveler.vercel.app",
  },
  {
    name: "Debation",
    description: "A debate app consisting of learning features, practicing features and a lot more.",
    url: "https://debation.vercel.app",
  },
  {
    name: "DeltaSave",
    description: "A Minecraft Java Plugin that implements a Deltarune-style save system inside Minecraft.",
    url: "https://modrinth.com/plugin/deltasave",
  },
  {
    name: "Faint Aura - Development Experiment",
    description: "RPG Game - Final project for the Programming & Application Creators curriculum.",
    url: "https://faint-aura.vercel.app",
  },
];

const handleGifClick = () => {
  window.open('https://deltarune.com/d_a_m_n_y_o_u_t_e_n_n_a', '_blank');
};

export default function Bio() {
  useEffect(() => {
    document.title = "About Me";
    return () => { document.title = "Welcome!"; };
  }, []);

  return (
    <div className="page-bio" data-testid="container-bio">
      <div className="bio-content">

        <div className="news-block" data-testid="section-news">
          <p className="news-label">News</p>
          <p data-testid="text-news">DELTARUNE June 24th!</p>
        </div>

        <div className="bio-row">
          <h1 data-testid="text-bio-name">Justin Chen</h1>
          <img
            src={gifImage}
            alt="character gif"
            className="bio-gif"
            data-testid="gif-character"
            onClick={handleGifClick}
          />
        </div>

        <p className="bio-description muted" data-testid="text-bio-description">
          Just a chill guy that likes to code and program for fun.
        </p>

        <div className="section">
          <div className="bio-row">
            <h2 data-testid="text-projects-heading">Projects</h2>
            <img
              src={projectGif}
              alt="project gif"
              className="bio-gif"
              data-testid="gif-projects"
              onClick={handleGifClick}
            />
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} data-testid={`project-${index}`}>
                <p className="project-name">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                </p>
                <p className="project-desc muted">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="bio-row">
            <h2
                data-testid="text-contact-heading">Contact Me</h2>
            <img
              src={contactImage}
              alt="contact image"
              className="bio-gif"
              data-testid="img-contact"
              onClick={handleGifClick}
            />
          </div>
          <div className="contact-list">
            <p className="contact-item muted" data-testid="text-github">
              GitHub: github.com/HideSun1372
            </p>
            <p className="contact-item muted" data-testid="text-discord">
              Discord: hidesun1372
            </p>
          </div>
        </div>

        <Link href="/" className="back-link" data-testid="link-back-home">
          ← back
        </Link>

      </div>
    </div>
  );
}
