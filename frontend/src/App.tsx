import { Switch, Route } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import Home from "@/pages/home";
import Bio from "@/pages/bio";
import NotFound from "@/pages/not-found";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/bio" component={Bio} />
        <Route component={NotFound} />
      </Switch>
      <Analytics />
    </>
  );
}