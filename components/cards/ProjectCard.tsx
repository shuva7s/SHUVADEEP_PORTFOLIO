import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  ArrowRight,
  Users2,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import OptimizedImage from "../ui/OptimizedImage";
import { groupInfoType, TechType } from "@/constants";

const ProjectCard = ({
  id,
  images,
  title = "Project name",
  description = "Project description lorem ipsum dolor",
  link,
  repoName,
  technologies,
  points,
  groupInfo,
}: {
  id: string;
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
      <Link href={`/${id}`}>
        <CardHeader className="p-0">
          <div className="w-full aspect-video relative overflow-hidden">
            <OptimizedImage
              path={images[0]}
              alt={title || "Project image"}
              imageClassName="group-hover:scale-103 transition-transform duration-300"
            />
            <div className="absolute bottom-0 w-full flex justify-end flex-wrap p-5 gap-2">
              {groupInfo.length > 0 && (
                <div className="fl_center gap-2 h-9 px-3 rounded-full bg-background text-sm">
                  <Users2 className="size-4" /> Group project
                </div>
              )}
            </div>
          </div>
          <div className="flex p-5 pb-0 items-center flex-wrap gap-2">
            <div className="flex-1">
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            <Button size="icon" className="rounded-full" variant="default">
              <ArrowRight className="scale-110 -rotate-45 group-hover:rotate-0 transition-transform" />
              <span className="sr-only">Link</span>
            </Button>
          </div>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default ProjectCard;
