"use client";

import { ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { ActionButton } from "@/components/hero/action-button";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <section className="relative flex h-dvh flex-col items-center justify-center gap-8 overflow-hidden text-center">
      <div className="text-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold">
        404
      </div>
      <div className="-mt-18 flex h-full max-h-[40vh] w-full items-center justify-center">
        <Fade direction="down" duration={300} triggerOnce cascade damping={0.1}>
          <Image
            src="/404.svg"
            alt="404"
            width={200}
            height={200}
            className="mb-4 h-full max-h-[40vh] w-auto object-contain"
          />
        </Fade>
      </div>

      <div className="flex w-full max-w-2xl flex-col items-center gap-5 px-5">
        <Fade
          direction="up"
          duration={300}
          delay={500}
          triggerOnce
          cascade
          damping={0.1}
        >
          <h2 className="text-highlight text-2xl font-bold">
            Oops! Page Not Found
          </h2>
          <p className="text-600 font-medium md:font-normal">
            {" "}
            The page you&apos;re looking for seems to have wandered off into the
            digital wilderness. Let&apos;s get you back on track!
          </p>

          <div className="flex flex-col justify-center gap-4 md:flex-row md:items-center md:gap-8">
            <ActionButton
              onClick={() => router.push("/")}
              variant="primary"
              className="w-full"
            >
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-active:-translate-x-1" />
              Return to Previous Page
            </ActionButton>

            <ActionButton
              onClick={() => router.push("/")}
              variant="secondary"
              className="w-full"
            >
              <Home className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-active:-translate-x-1" />
              Go Back to Home
            </ActionButton>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default NotFoundPage;
