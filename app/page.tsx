"use client";

import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(() => ["innovative", "dependable", "scalable"], []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [titleNumber, titles.length]);

  return (
    <section className="container flex h-dvh flex-col items-center gap-8">
      <Fade
        direction="left"
        duration={500}
        triggerOnce
        cascade
        damping={0.1}
        className="w-full"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="rounded-lg bg-gray-100 p-2 text-sm text-gray-500">
            Secure.Connect.Transform
          </div>

          <div className="flex flex-col">
            <h1 className="my-4 text-center text-7xl tracking-tight text-gray-900">
              <span>We deliver solutions that are </span>
              <span className="relative flex w-full justify-center overflow-hidden pb-4 font-bold">
                &nbsp;{" "}
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="text-highlight absolute"
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
              </span>
            </h1>

            <p className="max-w-2xl text-center leading-relaxed tracking-tight text-balance text-gray-500">
              At <span className="font-semibold">Motech Solutions</span>, we
              help businesses thrive with advanced solutions in CCTV
              surveillance, biometric access control, enterprise networking, and
              custom website development.
            </p>
          </div>
        </div>

        <div className="mx-auto flex flex-col items-center justify-center gap-4 md:gap-8 px-4 md:flex-row">
          <button className="group flex w-full cursor-pointer items-center justify-center gap-4 rounded-full bg-gray-300 px-3.5 py-4 font-medium text-gray-700 md:max-w-fit md:py-2.5">
            Jump on a Call{" "}
            <PhoneCall
              size={18}
              className="transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </button>
          <button className="group flex w-full cursor-pointer items-center justify-center gap-4 rounded-full bg-gray-800 px-3.5 py-4 text-gray-100 md:max-w-fit md:py-2.5">
            Get Started{" "}
            <ArrowRight
              size={18}
              className="transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </button>
        </div>
      </Fade>
    </section>
  );
}
