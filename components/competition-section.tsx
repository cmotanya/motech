import React from "react";
import { ActionButton } from "./action-button";
import { ArrowRight, CheckCircle, Clock, Target } from "lucide-react";
import { competitionData } from "@/app/data/competition-section";
import { Fade } from "react-awesome-reveal";

const CompetitionSection = () => {
  return (
    <div className="relative mx-auto mt-10 w-full overflow-hidden px-3 py-6 md:mt-0">
      <div className="bg-300/50 absolute inset-0 h-full w-full backdrop-blur-[4px]" />

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="mb-6 flex flex-col items-start justify-center gap-3 px-4 md:gap-6">
          <Fade direction="up" duration={300} triggerOnce>
            <span className="text-secondary text-sm font-medium">
              / Why Choose Motech Solutions
            </span>
          </Fade>

          <Fade direction="up" duration={300} delay={200} triggerOnce>
            <h2 className="text-700 text-4xl font-bold whitespace-nowrap md:text-5xl">
              The Motech{" "}
              <span className="from-accent via-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                Difference
              </span>
            </h2>
          </Fade>

          <Fade direction="up" duration={300} delay={400} triggerOnce>
            <p className="text-600 max-w-md text-lg leading-relaxed tracking-tight text-balance">
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
              className="font-medium"
            >
              Request Quote
            </ActionButton>
          </Fade>
        </div>

        <Fade duration={300} delay={800} triggerOnce>
          <div className="grid grid-cols-1 gap-3 leading-[1] tracking-tight md:grid-cols-2 md:gap-4">
            {competitionData.map((item) => (
              <div
                key={item.id}
                className="bg-50 group relative overflow-hidden rounded-xl p-3 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md md:p-4"
              >
                <div className="mb-1 flex items-center gap-3">
                  <div className="from-secondary to-primary flex size-10 items-center justify-center gap-2 rounded-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-105">
                    <item.icon className="text-50 size-5 text-5xl" />
                  </div>
                  <h3 className="text-secondary text-lg font-medium">
                    {item.title}
                  </h3>
                </div>
                <p className="text-500 px-5 text-base font-medium">
                  {item.description}
                </p>

                <div className="from-secondary to-200/50 absolute top-2 right-2 size-4 rounded-full bg-gradient-to-b opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="group-hover:bg-200 absolute inset-0 -z-30 m-0.5 rounded-xl border-2 border-300 opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </Fade>
      </div>

      <Fade duration={300} delay={800} triggerOnce>
        <div className="relative mt-15 grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="bg-100 flex flex-col space-y-2 rounded-xl border border-300 p-2 text-center">
            <Target className="text-secondary bg-secondary/20 absolute top-1 left-1 size-6 rounded-full p-0.5" />
            <span className="text-secondary text-5xl font-bold">500+</span>
            <span className="text-500 text-sm font-medium">
              Projects Completed
            </span>
          </div>

          <div className="bg-100 relative flex flex-col space-y-2 rounded-xl border border-300 p-2 text-center">
            <CheckCircle className="text-secondary bg-secondary/20 absolute top-1 left-1 size-6 rounded-full p-0.5" />
            <span className="text-secondary text-5xl font-bold">100%</span>
            <span className="text-500 text-sm font-medium">
              Client Satisfaction
            </span>
          </div>

          <div className="bg-100 relative flex grow-1 flex-col space-y-2 rounded-xl border border-300 p-2 text-center">
            <span className="text-secondary text-5xl font-bold">24/7</span>
            <Clock className="text-secondary bg-secondary/20 absolute top-1 left-1 size-6 rounded-full p-0.5" />
            <span className="text-500 text-sm font-medium">
              Support Available
            </span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CompetitionSection;
