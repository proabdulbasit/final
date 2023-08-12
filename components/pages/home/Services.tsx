import { services } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { containerShow, itemShow } from '@/lib/animate'

function Services() {
  return (
    <section id="services" className="py-20 w-full overflow-x-clip">
      <div className="container flex justify-center mb-10">
        <h1 className="w-max text-3xl sm:text-5xl md:text-7xl uppercase flex flex-col gap-y-2">
          <motion.span
            className="sm:pl-20 whitespace-nowrap"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </motion.span>
          <motion.span
            className="self-center sm:self-start bg-colorfull-yellow w-max"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Is All You
          </motion.span>
          <motion.span
            className="self-end text-colorfull-red"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Need
          </motion.span>
        </h1>
      </div>
      <div className="relative overflow-x-clip">
        <div className="absolute right-[50%] top-[30%] w-[600px] aspect-square bg-colorfull-blue -z-10 blur-[500px]" />
        <div className="absolute left-[50%] top-[30%] w-[300px] aspect-square bg-colorfull-red -z-10 blur-[250px]" />
        <div className="container max-w-[1000px] mx-auto">
          {services.map((item) => (
            <motion.div
              variants={containerShow}
              initial="initial"
              whileInView="animate"
              className="grid grid-cols-12 gap-3 md:gap-10 mb-10"
              key={item.id}
            >
              <div className="col-span-12 md:col-span-4">
                <motion.h2 variants={itemShow()} className={cn('md:sticky md:top-20 uppercase text-2xl text-right animate-cursor-hovered', item.titleColor)}>
                  {item.title}
                </motion.h2>
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="overflow-hidden">
                  <motion.h4
                    initial={{ x: '-100%' }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1, type: 'spring' }}
                    className={cn('text-xl font-bold animate-cursor-hovered', item.captionColor)}
                  >
                    {item.caption}
                  </motion.h4>
                </div>
                <motion.p variants={itemShow()} className="text-sm sm:text-base text-gray-300 py-2 sm:py-4">
                  {item.content}
                </motion.p>
                <motion.div variants={itemShow(.8, false)} className="relative w-full aspect-video rounded-xl overflow-hidden mt-4">
                  <Image
                    src={item.imageUrl}
                    alt="web developer"
                    fill={true}
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services