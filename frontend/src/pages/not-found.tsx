import { useState } from "react";

const options = [
  { src: "/404.png", label: "https://http.cat/", href: "https://http.cat/" },
  { src: "/404-dog.png", label: "https://http.dog/", href: "https://http.dog/" },
];

export default function NotFound() {
  const [pick] = useState(() => options[Math.floor(Math.random() * options.length)]);

  return (
    <div className="page-404">
      <img src={pick.src} alt="404 Not Found" />
      <p>
        Image from:{" "}
        <a href={pick.href} target="_blank" rel="noopener noreferrer">
          {pick.label}
        </a>
      </p>
    </div>
  );
}
