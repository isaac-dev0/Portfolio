import { WorkExperienceConfig } from "@/config/resume/work-experience";

interface ResumeEmploymentProps {
  items: WorkExperienceConfig[];
}

export function ResumeEmployment({ items }: ResumeEmploymentProps) {
  return (
    <ul className="w-full">
      {items.map((data, index) => (
        <li
          key={index}
          className="grid grid-cols-1 gap-4 border-b py-12 md:grid-cols-12 md:gap-8"
        >
          {/* Timeline: Spans 3 columns */}
          <div className="text-xl font-semibold tracking-tighter text-foreground md:col-span-3">
            {data.start} — {data.end}
          </div>

          {/* Details: Spans 6 columns */}
          <div className="md:col-span-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              {data.title} at {data.organisation}
            </h2>
            <ul className="list-disc list-inside">
              {data.description.map((entry, index) => (
                <li key={index}>
                  {entry}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              {data.description}
            </p>
          </div>

          {/* Company: Spans 3 columns */}
          <div className="text-right text-md md:col-span-3">
            {data.type}
          </div>
        </li>
      ))}
    </ul>
  );
}
