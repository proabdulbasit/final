import React from 'react'
import { motion } from 'framer-motion'
import { itemShow } from '@/lib/animate'

function About() {
  return (
    <section className="relative bg-background mt-20 w-full overflow-x-clip" id="about">
      <div>
        <div className="absolute top-[20%] right-[55%] w-[500px] aspect-video bg-colorfull-blue blur-[250px]" />
      </div>
      <div className="px-4 py-20">
        <div className="sm:container">
          <h1 className="text-3xl sm:text-5xl md:text-7xl uppercase flex flex-col lg:max-h-[150px] lg:gap-2">
            <motion.span
              className="bg-colorfull-purple"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Introducing
            </motion.span>
            <motion.span
              className="pl-20"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              About
            </motion.span>
            <motion.span
              className="pl-10 text-colorfull-green"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Us
            </motion.span>
          </h1>
          <motion.div
            variants={itemShow()}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 'all' }}
            className="max-w-[800px] mx-auto p-6 sm:px-8 sm:py-12 rounded-xl bg-gray-200 bg-opacity-10 backdrop-blur-sm border border-gray-600 mt-4"
          >
            <h1 className="text-3xl sm:text-4xl tracking-widest uppercase font-bold">We are not just an agency.</h1>
            <p className="sm:text-2xl max-w-3xl mt-4">
              We are the <span className="text-colorfull-blue">masterminds</span> behind unforgettable digital <span className="text-colorfull-red">experiences</span> that ignite curiosity, captivate hearts, and convert casual visitors into devoted fans.
            </p>
            <ul className="pl-10 sm:text-2xl mt-4 list-disc max-w-xl">
              <li>We are your one.</li>
              <li>Stop destination for all things creative.</li>
              <li>The powerhouse where your boldest ideas come to life!</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About