'use client';
import { motion } from "framer-motion"

import About from "@/components/pages/home/About"
import Contact from "@/components/pages/home/Contact"
import Hero from "@/components/pages/home/Hero"
import Services from "@/components/pages/home/Services"
import Works from "@/components/pages/home/Works"
import Experiences from "@/components/pages/home/Experiences";
import { FollowingCursor } from "@/components/ui/followingCursor";

export default function Home() {
  return (
    <>
      <FollowingCursor />
      <Hero />
      <About />
      <Experiences />
      <Services />
      <Works />
      <div className="container flex items-center justify-center w-full min-h-[500px] py-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase flex flex-col lg:max-h-[150px] gap-2">
          <motion.span
            className="w-max bg-colorfull-red px-4 sm:px-10"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Are
          </motion.span>
          <motion.span
            className="self-center bg-colorfull-yellow w-max px-4 sm:px-10"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            You
          </motion.span>
          <motion.span
            className="w-max px-4 sm:px-10 bg-colorfull-blue"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ready?
          </motion.span>
        </h1>
      </div>
      <Contact />
    </>
  )
}
