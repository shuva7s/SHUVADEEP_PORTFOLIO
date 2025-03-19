// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "../ui/button";
// import { ArrowRight, Expand, GithubIcon } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import Link from "next/link";
// import OptimizedImage from "../ui/OptimizedImage";

// const ProjectCard = ({
//   images,
//   title = "Project name",
//   description = "Project description lorem ipsum dolor",
//   link,
//   repoName,
// }: {
//   images: string[];
//   title: string;
//   description: string;
//   link: string;
//   repoName: string;
// }) => {
//   return (
//     <Card className="pt-0 overflow-hidden group">
//       <CardHeader className="p-0">
//         <div className="w-full aspect-video relative overflow-hidden">
//           <OptimizedImage
//             path={images[0]}
//             alt={title}
//             imageClassName="group-hover:scale-103 transition-transform duration-300"
//           />
//           <div className="absolute w-full bottom-0 flex p-2 justify-between items-center">
//             <Button
//               variant="ghost"
//               size="icon"
//               className="rounded-full"
//               asChild
//             >
//               <Link
//                 href={`https://github.com/shuva7s/${repoName}`}
//                 target="_blank"
//               >
//                 <Image
//                   src="/github.svg"
//                   className="invert"
//                   alt="github"
//                   width={20}
//                   height={20}
//                   priority={true}
//                 />
//               </Link>
//             </Button>
//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button variant="secondary" size="icon" aria-label="Expand">
//                   <Expand />
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="flex flex-col p-0 gap-0 lg:flex-row overflow-y-auto">
//                 <div className="w-full aspect-video lg:w-1/2 lg:sticky top-0">
//                   <Carousel className="h-full border">
//                     <CarouselContent className="text-4xl font-semibold">
//                       {images.map((image) => (
//                         <CarouselItem key={image}>
//                           <OptimizedImage path={image} alt={title} />
//                         </CarouselItem>
//                       ))}
//                     </CarouselContent>
//                     <div className="absolute w-full bottom-0 right-0 flex items-center justify-between gap-2 p-2 flex-wrap">
//                       <Button
//                         variant="ghost"
//                         className="rounded-full h-12 w-12 bg-background"
//                         asChild
//                       >
//                         <Link
//                           href={`https://github.com/shuva7s/${repoName}`}
//                           target="_blank"
//                         >
//                           <Image
//                             src="/github.svg"
//                             className="invert scale-130"
//                             alt="github"
//                             width={30}
//                             height={30}
//                             priority={true}
//                           />
//                         </Link>
//                       </Button>
//                       <div className="flex items-center gap-2">
//                         <CarouselPrevious
//                           variant="ghost"
//                           className="rounded-full h-12 w-12 bg-background"
//                         />
//                         <div className="h-5 w-1 rounded-full bg-accent" />
//                         <CarouselNext
//                           variant="ghost"
//                           className="rounded-full h-12 w-12 bg-background"
//                         />
//                       </div>
//                     </div>
//                   </Carousel>
//                 </div>
//                 <div className="w-full p-5 lg:p-8 lg:w-1/2">
//                   <DialogHeader>
//                     <DialogTitle>{title}</DialogTitle>
//                     <DialogDescription>{description}</DialogDescription>

//                     <div className="flex flex-col gap-2 mt-2">
//                       <p className="text-lg font-semibold">Technologies</p>
//                       <div className="flex gap-4 flex-wrap">
//                         <div className="w-20 lg:w-24 aspect-square fl_center bg-accent rounded-xl">
//                           A
//                         </div>
//                         <div className="w-20 lg:w-24 aspect-square fl_center bg-accent rounded-xl">
//                           A
//                         </div>
//                         <div className="w-20 lg:w-24 aspect-square fl_center bg-accent rounded-xl">
//                           A
//                         </div>
//                         <div className="w-20 lg:w-24 aspect-square fl_center bg-accent rounded-xl">
//                           A
//                         </div>
//                         <div className="w-20 lg:w-24 aspect-square fl_center bg-accent rounded-xl">
//                           A
//                         </div>
//                         <div className="w-20 lg:w-24 aspect-square fl_center bg-accent rounded-xl">
//                           A
//                         </div>
//                         <div className="w-20 lg:w-24 aspect-square fl_center bg-accent rounded-xl">
//                           A
//                         </div>
//                         <div className="w-20 lg:w-24 aspect-square fl_center bg-accent rounded-xl">
//                           A
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-col gap-2 mt-2">
//                       <p className="text-lg font-semibold">Key points</p>
//                       <ul className="text-muted-foreground pl-4 list-disc">
//                         <li>Lorem ipsum</li>
//                         <li>Lorem ipsum</li>
//                         <li>Lorem ipsum</li>
//                         <li>Lorem ipsum</li>
//                         <li>Lorem ipsum</li>
//                       </ul>
//                     </div>
//                   </DialogHeader>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>
//         <div className="px-6 pt-4 flex flex-row flex-wrap justify-between items-center">
//           <div>
//             <CardTitle>{title}</CardTitle>
//             <CardDescription>{description}</CardDescription>
//           </div>

//           <Button className="group" asChild>
//             <Link href={link || "#"} target="_blank">
//               Visit{" "}
//               <ArrowRight className="-rotate-45 group-hover:rotate-0 group-hover:scale-110 transition-transform" />
//             </Link>
//           </Button>
//         </div>
//       </CardHeader>
//     </Card>
//   );
// };

// export default ProjectCard;

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Expand,
  ExternalLink,
  GithubIcon,
  Users2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import OptimizedImage from "../ui/OptimizedImage";
import { groupInfoType, TechType } from "@/constants";

const ProjectCard = ({
  images,
  title = "Project name",
  description = "Project description lorem ipsum dolor",
  link,
  repoName,
  technologies,
  points,
  groupInfo,
}: {
  images: string[];
  title: string;
  description: string;
  link: string;
  repoName: string;
  technologies: TechType[];
  points: string[];
  groupInfo: groupInfoType[];
}) => {
  return (
    <Card className="pt-0 rounded-[5px] overflow-hidden group bg-background border-none hover:bg-accent transition-colors">
      <CardHeader className="p-0">
        <Dialog>
          <DialogTrigger className="group">
            <div className="w-full aspect-video relative overflow-hidden hover:[&_.special-child1]:bg-accent hover:[&_.special-child1]:text-foreground hover:[&_.special-child2]:bg-primary">
              <OptimizedImage
                path={images[0]}
                alt={title || "Project image"}
                imageClassName="group-hover:scale-103 transition-transform duration-300"
              />
              <div className="absolute bottom-0 w-full flex justify-end flex-wrap p-5 gap-2">
                {groupInfo.length > 0 && (
                  <div className="fl_center gap-2 h-9 px-3 rounded-full special-child2 bg-accent/85 backdrop-blur-md">
                    <Users2 className="size-5" /> Group project
                  </div>
                )}

                <div className="special-child1 size-9 fl_center rounded-full bg-accent/85 backdrop-blur-md transition-colors text-foreground/70">
                  <Expand className="size-4 transition-all" />
                </div>
              </div>
            </div>
            <span className="sr-only">Trigger</span>
          </DialogTrigger>

          <DialogContent className="flex flex-col p-0 gap-0 lg:flex-row overflow-y-auto">
            <div className="w-full aspect-video lg:w-1/2 lg:sticky top-0">
              <Carousel className="h-full border">
                <CarouselContent className="text-4xl font-semibold">
                  {images.map((image) => (
                    <CarouselItem key={image}>
                      <OptimizedImage path={image} alt={title} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute w-full bottom-0 right-0 flex items-center justify-between gap-2 p-2 flex-wrap">
                  <Button
                    variant="ghost"
                    className="rounded-full h-12 w-12 bg-background"
                    asChild
                  >
                    <Link
                      href={`https://github.com/shuva7s/${repoName}`}
                      target="_blank"
                    >
                      <Image
                        src="/github.svg"
                        className="invert scale-130"
                        alt="github"
                        width={30}
                        height={30}
                        priority={true}
                      />
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2">
                    <CarouselPrevious
                      variant="ghost"
                      className="rounded-full h-12 w-12 bg-background"
                    />
                    <div className="h-5 w-1 rounded-full bg-accent" />
                    <CarouselNext
                      variant="ghost"
                      className="rounded-full h-12 w-12 bg-background"
                    />
                  </div>
                </div>
              </Carousel>
            </div>
            <div className="w-full p-5 lg:p-8 lg:w-1/2">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>

                <div className="flex flex-col gap-2 mt-2">
                  <p className="text-lg font-semibold">Technologies</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {technologies &&
                      technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="bg-accent/50 p-4 rounded-md pr-10 flex gap-2 sm:gap-3 items-center"
                        >
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={20}
                            height={20}
                            className="size-12 sm:size-10 rounded-xs"
                          />
                          <p className="text-lg text-muted-foreground">
                            {tech.name}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <p className="text-lg font-semibold">Key points</p>

                  {points && (
                    <ul className="text-muted-foreground pl-4 list-disc flex flex-col gap-2">
                      {points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {groupInfo.length > 0 && (
                  <div className="flex flex-col gap-2 mt-2">
                    <p className="text-lg font-semibold">Other contributors</p>

                    <ul className="list-none flex flex-col gap-2">
                      {groupInfo.map((member: groupInfoType) => (
                        <li
                          className="flex flex-wrap gap-3 items-center"
                          key={member.name}
                        >
                          <div className="size-12 bg-accent rounded-full" />
                          <span className="font-semibold">{member.name}</span>
                          <Link href={member.gitHubLink}>
                            <ExternalLink className="size-5 text-muted-foreground hover:text-primary transition-colors" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </DialogHeader>
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex p-5 pb-0 items-center flex-wrap gap-2">
          <div className="flex-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Button
            asChild
            size="icon"
            className="rounded-full"
            variant="default"
          >
            <Link href={link || "#"} target="_blank">
              <ArrowRight className="scale-110" />
              <span className="sr-only">Link</span>
            </Link>
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
