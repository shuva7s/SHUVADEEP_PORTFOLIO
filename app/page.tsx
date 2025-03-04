import HomeImageCard from "@/components/HomeImageCard";
import Projects from "@/components/Projects";
import TestimonialSection from "@/components/TestimonialSection";
export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col gap-15 items-center min-h-[85vh] lg:min-h-auto py-10 pb-15 lg:py-20 lg:flex-row justify-center wrapper">
        <div className="text_xxxl">
          <p className="text-muted-foreground">YET</p>
          <p className="text-muted-foreground">&OTHER</p>
          <p className="text-primary">BORING?</p>
          <p>PORTFOLIO</p>
        </div>
        <HomeImageCard />
      </section>
      <Projects />
      <TestimonialSection />
    </main>
  );
}
