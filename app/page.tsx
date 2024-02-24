import Header from "./ui-components/header-component";
import AboutMe from "./ui-components/about-me";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <AboutMe />
    </main>
  );
}
