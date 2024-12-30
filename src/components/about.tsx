"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3"> I am a Software Engineer with over 1.5 years of experience building scalable and responsive web applications. My expertise lies in using modern technologies like React, Next.js, Node.js, TypeScript, and Tailwind CSS to craft user-centric solutions. </p> <p> Currently, I am working at <Link href={`https://www.deskera.com/`} target="_blank" className="underline">Deskera</Link>, where I focus on delivering performant and maintainable web applications. I am passionate about solving complex problems, optimizing performance, and building tools that enhance user experiences. </p> <p> I’m looking to grow my skills further by working in collaborative and challenging environments where I can learn from experienced engineers while contributing to impactful projects. If you have any opportunities, please feel free to <Link href={`#contact`} className="underline">reach out to me</Link>. </p>
    </motion.section>
  );
}
