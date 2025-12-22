import { ResumeEmployment } from "@/components/resume/ResumeEmployment";
import { Button } from "@/components/ui/button";
import { workExperience } from "@/config/resume/work-experience";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 space-y-10 lg:space-y-20">
      <div className="flex w-full items-end justify-between">
        <h1 className="text-5xl font-semibold tracking-tighter lg:text-6xl">
          Experience
        </h1>
        <Button variant="ghost" size="lg" className="font-semibold">
          Download CV <Download className="size-4" />
        </Button>
      </div>
      <ResumeEmployment items={workExperience} />
    </div>
  );
}
