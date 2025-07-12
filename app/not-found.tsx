"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const NotFoundPage = () => {
  const pathname = useRouter();

  return (
    <section className="container flex h-dvh flex-col items-center justify-center gap-8 text-center">
      <div className="-mt-18 flex h-full max-h-[40vh] w-full items-center justify-center">
        <Fade direction="down" duration={500} triggerOnce cascade damping={0.1}>
          <Image
            src="/404.svg"
            alt="404"
            width={200}
            height={200}
            className="mb-4 h-full max-h-[40vh] w-auto object-contain"
          />
        </Fade>
      </div>

      <div className="flex w-full flex-col gap-5 px-5 md:items-center">
        <Fade
          direction="up"
          duration={500}
          delay={500}
          triggerOnce
          cascade
          damping={0.1}
        >
          <h1 className="text-highlight text-6xl font-bold">404</h1>
          <p className="text-gray-500">
            Sorry, we couldn&apos;t find that page.
          </p>

          <button
            onClick={() => pathname.back()}
            className="group bg-highlight text-background flex w-full items-center justify-center gap-4 rounded-full border px-5 py-4.5 shadow hover:shadow-lg md:py-2.5"
          >
            <ArrowLeft
              size={16}
              className="transition-all duration-300 ease-in-out group-hover:-translate-x-1.5 group-active:-translate-x-1.5"
            />
            Go Back
          </button>
        </Fade>
      </div>
    </section>
  );
};

export default NotFoundPage;
