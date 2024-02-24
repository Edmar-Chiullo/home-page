import Header from "./ui-components/header-component";
import AboutMe from "./ui-components/about-me";
import Projects from "./ui-components/projects";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <AboutMe />
      <Projects />
    </main>
  );
}
