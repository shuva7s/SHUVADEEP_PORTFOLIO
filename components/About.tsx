"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import QuoteBox from "./QuoteBox";
import { GraduationCap, ListPlus, MapPinHouse, School } from "lucide-react";
const About = () => {
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
        ABOUT
      </p>
      <div className="flex flex-col my-5 md:flex-row gap-5">
        <div className="w-full aspect-square bg-primary/40 md:w-1/2 rounded-2xl"></div>
        <div className="md:w-1/2 flex flex-col gap-10 pt-5">
          <QuoteBox>
            <p className="text-xl p-3">
              <span className="text-blue-400">const </span>
              <span className="text-blue-500">me</span>
              <span> = </span>
              <span className="text-orange-400">"My work"</span>
              <span>;</span>
            </p>
          </QuoteBox>
          <QuoteBox icon={<MapPinHouse />}>
            <p className="text-xl p-3">
              <span className="text-blue-400">const </span>
              <span className="text-blue-500">imFrom</span>
              <span> = </span>
              <span className="text-orange-400">
                "India, West Bengal, South 24 pgs, Diamon Harbour"
              </span>
              <span>;</span>
            </p>
          </QuoteBox>
          <QuoteBox icon={<School />}>
            <p className="text-xl p-3">
              <span className="text-blue-400">const </span>
              <span className="text-blue-500">school</span>
              <span> = </span>
              <span className="text-orange-400">
                "Diamon Harbour Bharat Sevasram Sangha Pranav Vidyapith"
              </span>
              <span>;</span>
            </p>
          </QuoteBox>
          <QuoteBox icon={<GraduationCap />}>
            <p className="text-xl p-3">
              <span className="text-blue-400">const </span>
              <span className="text-blue-500">college</span>
              <span> = </span>
              <span className="text-orange-400">
                "Sister Nivedita University"
              </span>
              <span>;</span>
            </p>
          </QuoteBox>
        </div>
      </div>
    </section>
  );
};

export default About;
