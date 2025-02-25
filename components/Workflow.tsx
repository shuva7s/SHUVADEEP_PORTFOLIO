"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WorkflowCard from "./cards/WorkflowCard";

gsap.registerPlugin(ScrollTrigger);
const Workflow = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    gsap.to(headingRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=25%", // Fade in when 1/4 of viewport from bottom
        end: "top top+=75%", // Fade out when 3/4 of viewport from bottom
        toggleActions: "play none reverse none", // Play on enter, reverse on leave
      },
    });
  }, []);
  return (
    <section
      ref={sectionRef}
      className="min-h-screen wrapper border-green-500 py-5"
    >
      <p
        ref={headingRef}
        className="text_xxl text-primary font-bold opacity-0 text-center lg:text-left"
      >
        WORKFLOW
      </p>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-10 mt-15 mb-5">
        <WorkflowCard
          number={1}
          title="Design"
          desc="Everything starts with a good design."
          tempClass="min-h-64"
        />
        <WorkflowCard
          number={2}
          title="Development"
          desc="Then the actual fun starts with coding."
          tempClass="min-h-72"
        />
        <WorkflowCard
          number={3}
          title="Testing"
          desc="Everything should work seamlessly and smoothly right?"
          tempClass="min-h-36"
        />
      </div>
      <div className="columns-1 md:columns-2 gap-5 space-y-10 mt-10">
        <WorkflowCard number={4} title="Deployment" desc="Go live!" />
        <WorkflowCard
          number={5}
          title="Maintenance"
          desc="Keep it up to date"
        />
      </div>
    </section>
  );
};

export default Workflow;
