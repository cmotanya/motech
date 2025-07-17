import React from "react";
import { ActionButton } from "./action-button";
import { ArrowRight } from "lucide-react";
import { competitionData } from "@/app/data/competition-section";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const CompetitionSection = () => {
  return (
    <div className="relative mx-auto mt-10 min-h-[600px] w-full overflow-hidden px-3 py-6 md:mt-0">
      <Image
        src={"/competition-images/cctv.jpeg"}
        alt="cctv"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 h-full w-full bg-black/30 backdrop-blur-[4px]" />

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="mb-6 flex flex-col items-start justify-center gap-3 px-4 md:gap-6">
          <Fade direction="up" duration={300} triggerOnce>
            <div className="bg-50/10 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="bg-secondary h-2 w-2 rounded-full" />
              <span className="text-sm font-medium">
                Why Choose Motech Solutions
              </span>
            </div>
          </Fade>

          <Fade direction="up" duration={300} delay={200} triggerOnce>
            <h2 className="text-300 text-4xl font-bold whitespace-nowrap md:text-5xl">
              The Motech{" "}
              <span className="from-accent via-highlight to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                Difference
              </span>
            </h2>
          </Fade>

          <Fade direction="up" duration={300} delay={400} triggerOnce>
            <p className="text-900 max-w-md text-lg leading-relaxed tracking-tight text-balance">
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
              Get Started for Free
            </ActionButton>
          </Fade>
        </div>

        <Fade duration={300} delay={800} triggerOnce>
          <div className="grid grid-cols-1 gap-3 leading-[1] tracking-tight md:grid-cols-2 md:gap-4">
            {competitionData.map((item) => (
              <div
                key={item.id}
                className="bg-800/50 group border-800/50 relative overflow-hidden rounded-2xl border p-3 backdrop-blur-md md:p-4"
              >
                <div className="mb-1 flex items-center gap-3">
                  <div className="from-secondary to-primary flex size-8 items-center justify-center gap-2 rounded-full bg-gradient-to-br">
                    <item.icon className="text-50 size-5 text-5xl" />
                  </div>
                  <h3 className="text-secondary text-xl font-medium">
                    {item.title}
                  </h3>
                </div>
                <p className="text-300 px-5 text-sm">{item.description}</p>

                <div className="from-secondary to-200/50 absolute top-2 right-2 size-4 rounded-full bg-gradient-to-b opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="border-400/50 absolute inset-0 rounded-2xl border opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CompetitionSection;
