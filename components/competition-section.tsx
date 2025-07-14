import React from "react";
import { ActionButton } from "./action-button";
import { ArrowRight } from "lucide-react";
import { competitionData } from "@/app/data/competition-section";
import { Fade } from "react-awesome-reveal";

const CompetitionSection = () => {
  return (
    <div className="bg-900 text-300 absolute top-full left-1/2 mx-auto mt-10 w-full -translate-x-1/2 px-3 py-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="mb-6 flex flex-col items-start justify-center gap-3 px-4 md:gap-6">
          <Fade direction="up" duration={300} triggerOnce>
            <h3 className="text-secondary text-sm">
              / Why Choose Motech Solutions
            </h3>
          </Fade>
          <Fade direction="up" duration={300} delay={200} triggerOnce>
            <h2 className="text-5xl font-bold">The Motech Difference</h2>
          </Fade>

          <Fade direction="up" duration={300} delay={400} triggerOnce>
            <p className="max-w-md text-lg leading-relaxed tracking-tight">
              For a long time, we&apos;ve provided reliable security and IT
              infrastructure solutions across Kenya-earning the trust of
              businesses through innovation, service, and support.
            </p>
          </Fade>

          <Fade duration={300} delay={600} triggerOnce>
            <ActionButton
              variant="secondary"
              onClick={() => {}}
              icon={ArrowRight}
            >
              Get Started for Free
            </ActionButton>
          </Fade>
        </div>

        <Fade duration={300} delay={800} triggerOnce>
          <div className="grid grid-cols-2 gap-3 leading-relaxed tracking-tight md:grid-cols-2 md:gap-4">
            {competitionData.map((item) => (
              <div
                key={item.id}
                className="bg-800 flex flex-col items-start gap-2 rounded-lg p-2 md:p-4"
              >
                <item.icon className="text-secondary text-5xl" />
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CompetitionSection;
