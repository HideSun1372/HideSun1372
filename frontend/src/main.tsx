import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const favicons = ["/favicon.png", "/favicon2.png"];
const randomFavicon = favicons[Math.floor(Math.random() * favicons.length)];
const link = document.querySelector("link[rel='icon']") ?? document.createElement("link");
link.setAttribute("rel", "icon");
link.setAttribute("type", "image/png");
link.setAttribute("href", randomFavicon);
if (!document.querySelector("link[rel='icon']")) {
  document.head.appendChild(link);
} else {
  (document.querySelector("link[rel='icon']") as HTMLLinkElement).href = randomFavicon;
}

createRoot(document.getElementById("root")!).render(<App />);
