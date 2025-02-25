"use client";
import { useRef } from "react";
import CopyLinkField from "./CopyLinkField";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const circles = gsap.utils.toArray(".circle");

      gsap.to(circles, {
        scale: 1.1, // Scale up 1.5x
        duration: 2, // Animation duration
        ease: "power2.inOut",
        stagger: 0.2, // Stagger animation for a ripple effect
        repeat: -1, // Loop indefinitely
        yoyo: true, // Animate back to original size
      });
    },
    { scope: sectionRef }
  ); // Ensures GSAP only targets elements inside this section

  return (
    <footer
      ref={sectionRef}
      className="wrapper relative py-10 min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] fl_center text-center flex-col gap-5"
    >
      <div className="flex flex-col fl_center gap-5 relative z-10">
        <p className="text_xxl text-foreground">
          Let's make something <span className="text-primary">cool</span>
        </p>
        <CopyLinkField textToCopy="shuvadeepmandal5@gmail.com" />
      </div>

      <div className="absolute rounded-full bg-primary/10 w-2/10 md:w-2/10 aspect-square border border-primary/10 circle" />
      <div className="absolute rounded-full bg-primary/10 w-4/10 md:w-3/10 aspect-square border border-primary/10 circle" />
      <div className="absolute rounded-full bg-primary/10 w-6/10 md:w-4/10 aspect-square border border-primary/10 circle" />
    </footer>
  );
};

export default Footer;
