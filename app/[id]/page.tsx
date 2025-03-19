import { groupInfoType, projects } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, GithubIcon, X } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold wrapper text-center">
          Project not found
        </h1>
      </main>
    );
  }
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 pt-5 pb-10 flex flex-col gap-5">
      <section className="flex flex-col sm:flex-row">
        <div className="flex-1">
          <h1 className="text-4xl font-semibold">{project.title}</h1>
          <p className="text-xl text-muted-foreground mt-1">{project.description}</p>
        </div>
        <div className="hidden sm:flex mt-3 gap-5">
          <Button size="icon" variant={"secondary"} className="scale-130">
            <Link
              href={`https://github.com/shuva7s/${project.reponame}`}
              target="_blank"
            >
              <Image
                src="/github.svg"
                alt="github"
                width={20}
                height={20}
                priority={true}
                className="invert"
              />
            </Link>
          </Button>
          <Button size="icon" className="group scale-130" asChild>
            <Link href={project.link || "#"} target="_blank">
              <ArrowRight className="scale-120 -rotate-45 group-hover:rotate-0 transition-transform" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-5 sm:hidden">
          <Button size="lg" variant={"secondary"} className="py-7">
            <Link
              href={`https://github.com/shuva7s/${project.reponame}`}
              target="_blank"
              className="text-lg inline-flex items-center gap-2"
            >
              <Image
                src="/github.svg"
                alt="github"
                width={20}
                height={20}
                priority={true}
                className="invert"
              />
              Reposetory
            </Link>
          </Button>
          <Button size="lg" className="py-7 text-lg group" asChild>
            <Link href={project.link || "#"} target="_blank">
              Visit
              <ArrowRight className="scale-120 -rotate-45 group-hover:rotate-0 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
      <section>
        <Carousel className="aspect-square sm:aspect-video rounded-2xl overflow-hidden">
          <CarouselContent className="text-4xl font-semibold">
            {project.images.map((image) => (
              <CarouselItem key={image}>
                <OptimizedImage path={image} alt={project.title} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center gap-2 absolute bottom-3 right-3">
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
        </Carousel>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Technologies</h2>
        <div className="grid gap-4 sm:grid-cols-2 mt-2">
          {project.techs &&
            project.techs.map((tech) => (
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
                <p className="text-lg text-muted-foreground">{tech.name}</p>
              </div>
            ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Key points</h2>
        {project.points && (
          <ul className="text-muted-foreground pl-4 list-disc flex flex-col gap-2 mt-2">
            {project.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        )}
      </section>

      {project.group.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold">Other contributors</h2>

          <ul className="list-none flex flex-col gap-2 mt-2">
            {project.group.map((member: groupInfoType) => (
              <li
                className="flex flex-wrap gap-3 items-center"
                key={member.name}
              >
                <div className="size-12 bg-accent rounded-full" />
                <span className="font-semibold">{member.name}</span>
                <Link href={member.gitHubLink}>
                  <ExternalLink className="size-5 text-muted-foreground hover:text-primary transition-colors" />
                  <span className="sr-only">Github link</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
