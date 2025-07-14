"use client";

import { ActionButton } from "@/components/action-button";
import CaseStudies from "@/components/case-studies";
import CompetitionSection from "@/components/competition-section";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  const [titleNumber, setTitleNumber] = useState(0);
  const router = useRouter();

  const titles = useMemo(() => ["innovative", "dependable", "scalable"], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="container flex min-h-dvh flex-col items-center gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="bg-100 text-600 rounded-lg p-2 text-sm font-medium">
          Secure. Digital. Connect. Delivered by Experts
        </div>

        <Fade direction="up" duration={300} triggerOnce>
          <h2 className="text-800 text-center text-4xl font-medium md:text-5xl">
            Tired of juggling multiple service providers?
          </h2>
        </Fade>

        <Fade direction="up" duration={300} delay={200} triggerOnce>
          <h1 className="text-900 text-center text-6xl font-bold tracking-tight md:text-7xl">
            We deliver solutions that are
            <span className="align-left relative inline-block h-[90px] w-[350px] overflow-hidden align-middle">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="text-highlight absolute top-1 left-1/2 -translate-x-1/2 capitalize md:left-3 md:translate-x-0"
                  initial={{ opacity: 0, y: -100 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 80,
                  }}
                  animate={
                    titleNumber === index
                      ? { opacity: 1, y: 0 }
                      : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>{" "}
          </h1>
        </Fade>

        <Fade direction="up" duration={300} delay={400} triggerOnce>
          <p className="text-900 max-w-2xl text-center text-lg leading-relaxed tracking-tight">
            At <span className="font-semibold">Motech Solutions</span>, we’re
            more than a vendor. We’re your dedicated partner for{" "}
            <strong>CCTV</strong>, <strong>access control</strong>,{" "}
            <strong>enterprise networking</strong>, and{" "}
            <strong>custom web development</strong>—built for security and
            scalability.
          </p>
        </Fade>
      </div>

      <div className="mx-auto mt-6 flex flex-col justify-center gap-4 px-4 md:flex-row md:items-center md:gap-8">
        <Fade duration={300} delay={600} triggerOnce>
          <ActionButton
            onClick={() => router.push("/contact-us")}
            variant="secondary"
            icon={PhoneCall}
          >
            Book a Consultation
          </ActionButton>

          <ActionButton
            onClick={() => router.push("/contact-us")}
            icon={ArrowRight}
          >
            Get Started for Free
          </ActionButton>
        </Fade>
      </div>

      <CompetitionSection />

      <CaseStudies />
    </section>
  );
}
