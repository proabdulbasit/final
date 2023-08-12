import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { containerShow, itemShow } from '@/lib/animate'
import { works } from '@/constants'
import CardWork from './CardWork'

function Works() {
  return (
    <section id="works">
      <div className="relative overflow-x-clip">
        <div className="absolute left-[50%] top-[50%] w-[600px] aspect-square bg-colorfull-purple -z-10 blur-[500px]" />
        <div className="absolute right-[50%] top-[50%] w-[300px] aspect-square bg-colorfull-red -z-10 blur-[250px]" />
      </div>
      <div className="container py-10">
        <h1 className="text-3xl sm:text-7xl uppercase">Works</h1>
        <motion.div
          variants={containerShow}
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:mt-10"
        >
          {works.map((item) => (
            <CardWork key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Works