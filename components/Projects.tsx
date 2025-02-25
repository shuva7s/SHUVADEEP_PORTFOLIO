"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import projects from "@/constants";
import ProjectCard from "./cards/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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
    <section ref={sectionRef} className="min-h-screen wrapper py-5">
      <p
        ref={headingRef}
        className="text_xxl text-primary font-bold opacity-0 text-center lg:text-right"
      >
        PROJECTS
      </p>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            images={project.images}
            repoName="Event"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
