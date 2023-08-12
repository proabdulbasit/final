import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { itemShow } from '@/lib/animate'
import { experiences } from '@/constants'

function Experiences() {
  return (
    <section id="experiences" className="w-full overflow-x-clip">
      <div className="relative px-10">
        <Image
          src="/images/about-landscape.jpg"
          alt="hero-bg"
          fill={true}
          className="object-cover opacity-30 hidden md:block"
        />
        <Image
          src="/images/about-potrait.jpg"
          alt="hero-bg"
          fill={true}
          className="object-cover opacity-30 block md:hidden"
        />
        <div>
          <div className="absolute bottom-[20%] left-[55%] w-[500px] aspect-video bg-colorfull-blue blur-[250px]" />
          <div className="absolute bottom-0 left-0 w-[500px] aspect-video bg-colorfull-red blur-[300px]" />
        </div>
        <div className="relative w-full min-h-screen py-20 max-w-[800px] mx-auto flex flex-col justify-center gap-y-4 md:gap-y-0 sm:grid grid-cols-2 gap-x-10 mt-20">
          <div className="text-right">
            <motion.div
              variants={itemShow()}
              initial="initial"
              whileInView="animate"
            >
              <h4 className="text-6xl sm:text-8xl font-semibold text-colorfull-red">
                {experiences.years.value}{experiences.years?.symbol && <span className="text-white">{experiences.years.symbol}</span>}
              </h4>
            </motion.div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ x: '100%' }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, type: 'spring' }}
                className="block text-2xl animate-cursor-hovered"
              >
                {experiences.years.title}
              </motion.span>
            </div>
          </div>
          <div />
          <div />
          <div>
            <motion.div
              variants={itemShow()}
              initial="initial"
              whileInView="animate"
            >
              <h4 className="text-6xl sm:text-8xl font-semibold text-colorfull-green">
                {experiences.projects.value}{experiences.projects?.symbol && <span className="text-white">{experiences.projects.symbol}</span>}
              </h4>
            </motion.div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ x: '-100%' }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, type: 'spring' }}
                className="block text-2xl animate-cursor-hovered"
              >
                {experiences.projects.title}
              </motion.span>
            </div>
          </div>
          <div />
          <div />
          <div className="text-right">
            <motion.div
              variants={itemShow()}
              initial="initial"
              whileInView="animate"
            >
              <h4 className="text-6xl sm:text-8xl font-semibold text-colorfull-yellow">
                {experiences.clients.value}{experiences.clients?.symbol && <span className="text-white">{experiences.clients.symbol}</span>}
              </h4>
            </motion.div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ x: '100%' }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, type: 'spring' }}
                className="block text-2xl animate-cursor-hovered"
              >
                {experiences.clients.title}
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences