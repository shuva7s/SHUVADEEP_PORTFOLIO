"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import OptimizedImage from "./ui/OptimizedImage";
import Image from "next/image";

const HomeImageCard = () => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(cardRef.current, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      x: 0,
      rotate: 17,
      duration: 0.8,
      delay: 0,
    });

    gsap.fromTo(
      imageRef.current,
      {
        filter: "blur(10px)",
        opacity: 0.5,
        clipPath: "circle(0% at 50% 50%)",
      },
      {
        filter: "blur(0px)",
        opacity: 1,
        clipPath: "circle(100% at 50% 50%)",
        duration: 0.8,
        delay: 0.9,
        ease: "easeInOut",
      }
    );
  });

  return (
    <div
      ref={cardRef}
      className="aspect-[3.5/4] w-[55vw] max-w-[350px] md:w-[30vw] bg-primary rounded-2xl opacity-0 scale-110 blur-[30px] -translate-x-[100px] -rotate-45 overflow-hidden"
    >
      <div ref={imageRef} className="w-full h-full overflow-hidden select-none">
        <Image
          width={200}
          height={200}
          alt="Hero image"
          src="/HeroImage.jpg"
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default HomeImageCard;
