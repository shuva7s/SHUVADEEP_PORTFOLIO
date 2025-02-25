import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const WorkflowCard = ({
  number,
  title = "Title",
  desc = "Description",
  tempClass,
}: {
  number: number;
  title?: string;
  desc?: string;
  tempClass?: string;
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
      <CardContent className={cn(tempClass)}>
        <ul className="list-disc px-5 text-muted-foreground marker:text-primary">
          <li>lorem ipsum dolor</li>
          <li>lorem ipsum dolor sit</li>
          <li>lorem ipsum dolor sit amet</li>
          <li>lorem ipsum</li>
        </ul>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export default WorkflowCard;
