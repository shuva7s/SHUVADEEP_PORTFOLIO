import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProcessType } from "@/constants";

const WorkflowCard = ({
  number,
  title = "Title",
  desc = "Description",
  processes,
}: {
  number: number;
  title?: string;
  desc?: string;
  processes: ProcessType[];
}) => {
  return (
    <Card className="break-inside-avoid w-full relative group">
      <div className="bg-primary text-primary-foreground absolute top-0 right-5 h-10 w-10 rounded-full fl_center text-xl font-semibold -translate-y-1/2 shadow-xl z-10">
        {number}
      </div>
      <div className="bg-primary w-10 h-10 rounded-full absolute right-5 top-0 -translate-y-1/2 opacity-0 blur-2xl duration-300 group-hover:opacity-100" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc px-5 text-muted-foreground marker:text-primary space-y-1.5">
          {processes.map((process) => (
            <li key={process.key}>{process.title}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default WorkflowCard;
