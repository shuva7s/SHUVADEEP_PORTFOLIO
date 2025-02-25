"use client";
import { cn } from "@/lib/utils";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const OptimizedImage = ({
  path,
  alt,
  width = 480,
  height = 270,
  containerClassName = "",
  imageClassName,
}: {
  path: string;
  width?: number;
  height?: number;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
}) => {
  return (
    <div className={cn(containerClassName, "relative w-full h-full")}>
      <IKImage
        className={cn(
          "w-full h-full object-center object-contain",
          imageClassName
        )}
        urlEndpoint={urlEndpoint}
        alt={alt}
        path={path}
        loading="lazy"
        width={width}
        height={height}
        lqip={{ active: true, quality: 15, blur: 10 }}
      />
    </div>
  );
};

export default OptimizedImage;
