import About from "@/components/About";
import HomeImageCard from "@/components/HomeImageCard";
import Projects from "@/components/Projects";
import Workflow from "@/components/Workflow";
export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col gap-14 items-center py-10 lg:py-20 lg:flex-row justify-center wrapper">
        <div className="text_xxxl">
          <p className="text-muted-foreground">YET</p>
          <p className="text-muted-foreground">&OTHER</p>
          <p className="text-primary">BORING?</p>
          <p>PORTFOLIO</p>
        </div>
        <HomeImageCard />
      </section>
      <Projects />
      <Workflow />
      <About />
    </main>
  );
}
