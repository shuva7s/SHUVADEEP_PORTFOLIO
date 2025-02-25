import { Quote } from "lucide-react";

const QuoteBox = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="relative p-4 pt-6 bg-card rounded-2xl group">
      <div className="h-14 w-14 rounded-full bg-primary absolute left-5 top-0 -translate-y-1/2 blur-2xl opacity-0 group-hover:opacity-100 duration-300" />
      <div className="h-14 w-14 rounded-full fl_center bg-primary text-background absolute left-5 top-0 -translate-y-1/2 z-10">
        {icon || <Quote className="scale-x-[-1]" />}
      </div>
      {children}
    </div>
  );
};

export default QuoteBox;
