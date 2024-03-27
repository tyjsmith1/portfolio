import Nav from "../components/Nav";
import Bio from "../components/Bio";
import Skills from "../components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Portrait from "@/components/Portrait";

export default function Home() {
  return (
    <main className="p-20">
      <Nav />
      <section className="py-10 flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl font-bold">Hello, I'm a software engineer</h1>
        <Portrait/>
        <Socials/>
        <p className="text-2xl text-muted-foreground">
          I'm a software engineer and I'm passionate about building high-quality software.
        </p>
      </section>
      <div className="flex w-full">
        <Skills />
        <Bio />
      </div>
      <Experience/>
      <Projects/>
    </main>
  );
}
