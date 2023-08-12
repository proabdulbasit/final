'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { itemShow } from '@/lib/animate'

function Footer() {
  return (
    <div className="px-2 py-4">
      <span className="block text-sm text-gray-500 text-center">
        © 2023 <motion.span
          variants={itemShow(5, false)}
          initial="initial"
          whileInView="animate"
          className="inline-block text-gradient-1 sm:text-lg font-bold"
        >Futurustic Designers
      </motion.span>. <br className="block sm:hidden" />All Rights Reserved.
      </span>
    </div>
  )
}

export default Footer