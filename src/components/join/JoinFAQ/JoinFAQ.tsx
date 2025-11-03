'use client'

import StarField from "@/components/global/StarField";
import FAQ from "./FAQ";
import { getJoinFAQ } from "@/data/JoinData";
import Image from "next/image";
import { useTheme } from "@/theme/ThemeContext";

export default function JoinFAQ() {
  const { theme } = useTheme();
  const faq = getJoinFAQ(theme);

  return (
    <section className="relative w-full bg-[var(--color-background)] text-[var(--color-text-primary)] py-16 px-4">
      <StarField numberOfStars={100} />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start mb-24">
        {/* Left: Title, description, illustration */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] drop-shadow-[0_0_20px_var(--color-accent-muted)]">
            Frequently<br />Asked <span className="text-[var(--color-accent-primary)]" style={{textShadow: '0 0 20px var(--color-accent-muted)'}}>Questions</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-lg">
            Thank you for your interest! Here are answers to the questions we hear most often.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <Image
              src="/join/faq.svg"
              alt="FAQ Illustration"
              width={400}
              height={300}
              className="relative w-full object-contain"
            />
          </div>
        </div>
        {/* Right: FAQ accordion */}
        <FAQ faq={faq} />
      </div>
    </section>
  );
}
