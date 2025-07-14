import { caseStudies } from "@/app/data/case-studies";
import { cn } from "@/lib/utils";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const CaseStudies = () => {
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);

  const currentCase = caseStudies[currentCaseStudy];

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length,
    );
  };

  return (
    <div className="mx-auto mt-[38rem] grid w-full max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
      <div className="border-accent/50 bg-accent/50 rounded-lg border-2 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold">Success Stories</h3>
          <div className="flex gap-2">
            <button
              onClick={prevCaseStudy}
              className="bg-primary hover:bg-800 cursor-pointer rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="text-background size-4" />
            </button>
            <button
              onClick={nextCaseStudy}
              className="bg-primary hover:bg-800 cursor-pointer rounded-full p-2 transition-colors"
            >
              <ChevronRight className="text-background size-4" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-secondary border-l-4 pl-4 font-medium">
            <h4 className="uppercase">{currentCase.company}</h4>
            <p className="text-sm">{currentCase.industry}</p>
          </div>

          <div className="space-y-3">
            <div>
              <h5 className="font-medium uppercase">Challenge:</h5>
              <p className="text-sm">{currentCase.challenge}</p>
            </div>
            <div>
              <h5 className="font-medium uppercase">Solution:</h5>
              <p className="text-sm">{currentCase.solution}</p>
            </div>
          </div>

          <div>
            <h5 className="font-medium uppercase">Results:</h5>
            <ul className="space-y-1">
              {currentCase.results.map((result, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="text-success size-4 flex-shrink-0" />
                  <span className="text-600">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-700/50 mt-4 rounded-lg p-4">
            <p className="text-300 mb-3 text-base">
              &quot;{currentCase.testimonial}&quot;
            </p>
            <div className="text-400 flex items-center gap-3 text-sm font-medium">
              <p>{currentCase.clientName}</p>
              <p className="text-400">{currentCase.clientRole}</p>
            </div>
          </div>

          <div className="text-center">
            <span className="bg-secondary text-900 inline-block rounded-full px-3 py-1 text-sm font-medium">
              {currentCase.duration}
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCaseStudy(index)}
              className={cn(
                "size-4 rounded-full transition-colors duration-300 ease-in-out",
                index === currentCaseStudy ? "bg-secondary" : "bg-600",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
