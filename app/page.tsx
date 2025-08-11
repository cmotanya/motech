"use client";

import { ActionButton } from "@/components/hero/action-button";
import { useRouter } from "next/navigation";
import { PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <section className="container mx-auto mt-16 px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Left Side – Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl leading-tight font-bold text-gray-900 md:text-5xl">
            Simplify Your Tech Infrastructure
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            At <span className="font-semibold">Motech Solutions</span>, we help
            you eliminate the hassle of managing multiple providers. From{" "}
            <strong>CCTV</strong> and <strong>access control</strong> to{" "}
            <strong>networking</strong> and{" "}
            <strong>custom web development</strong>, our secure, scalable
            solutions have you covered.
          </p>
          <ActionButton
            onClick={() => router.push("/contact-us")}
            variant="primary"
            icon={PhoneCall}
            className="mt-4"
          >
            Book a Free Consultation
          </ActionButton>
        </div>

        {/* Right Side – Image */}
        <div className="flex justify-center">
          <Image
            src="/hero-bg.jpeg"
            alt="Motech Solutions Visual"
            width={500}
            height={500}
            className="rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
