import StarField from "@/components/global/StarField";
import FAQ from "./FAQ";
import { faq } from "@/data/JoinData";
import Image from "next/image";

export default function JoinFAQ() {
  return (
    <section className="relative w-full bg-[var(--background)] text-[var(--foreground)] py-16 px-4">
      <StarField numberOfStars={100} />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
        {/* Left: Title, description, illustration */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(0,212,255,0.10)]">
            Frequently<br />Asked <span className="text-[var(--accent-gold)]" style={{textShadow: '0 0 20px rgba(255, 207, 82, 0.3)'}}>Questions</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-lg">
            Thank you for your interest in ACM Industry! Here are some questions we get asked often.
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