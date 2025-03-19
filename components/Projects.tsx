import { projects } from "@/constants";
import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
  return (
    <section className="min-h-screen max-w-[1440px] mx-auto my-5 relative">
      <div className="absolute size-[24%] md:size-[20%] lg:size-[16%] bg-primary rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/5 md:-translate-y-1/2 transition-transform blur-3xl scale-300 z-[-1]" />
      <div className="grid gap-5 md:gap-7 grid-cols-1 md:grid-cols-2 p-5 md:p-7 bg-background/60 backdrop-blur-lg rounded-2xl relative z-[5]">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            images={project.images}
            repoName={project.reponame}
            technologies= {project.techs || []}
            points={project.points || []}
            groupInfo={project.group}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
