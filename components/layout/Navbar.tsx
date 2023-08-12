'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import { MdOutlineClose } from 'react-icons/md'
import { motion } from 'framer-motion'
import { itemShow, itemTranslate, navAnimation, staggerContainer } from '@/lib/animate';
import { navigation } from '@/constants';

function Navbar() {
  const [navbarActive, setNavbarActive] = useState(false);
  const navbarRef = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    const navbar = navbarRef.current
    if (navbar) {
      const handleEventNavbar = () => {
        navbar.classList.toggle('navbar-active', window.scrollY > 0)
      }

      window.addEventListener('scroll', handleEventNavbar)

      return () => {
        window.removeEventListener('scroll', handleEventNavbar)
      }
    }
  }, []);

  return (
    <>
      <header ref={navbarRef} className="fixed w-full bg-opacity-20 z-10 transition">
        <div className="container flex items-center justify-between py-4">
          <div>
            <h1 className="text-2xl uppercase font-extrabold text-gradient-1">
              F.D
            </h1>
          </div>
          <motion.nav
            variants={staggerContainer()}
            initial="initial"
            animate="animate"
            className="hidden md:flex items-center gap-8 lg:gap-10"
          >
            {navigation.map((item) => {
              if (item.href  === '#contact') {
                return (
                  <motion.div key={item.id} variants={itemShow()}>
                    <Link href={item.href} className="py-2 px-4 btn-gradient-2 rounded-full transition">
                      {item.title}
                    </Link>
                  </motion.div>
                )
              }
              return (
                <motion.div key={item.id} variants={itemShow()}>
                  <Link href={item.href} className="nav-item">{item.title}</Link>
                </motion.div>
              );
            })}
          </motion.nav>
          <button
            onClick={() => setNavbarActive(true)}
            className="block md:hidden"
          >
            <LuMenu fontSize={30} />
          </button>
        </div>
      </header>
      <div className="block md:hidden">
        <motion.nav
          variants={navAnimation}
          animate={navbarActive ? "animate" : "initial"}
          className="fixed inset-0 left-0 flex flex-col items-end justify-center gap-4 bg-black bg-opacity-30 backdrop-blur-sm z-50 px-10"
          style={{ boxShadow: 'inset 0 0 2000px rgba(0, 0, 0)' }}
        >
          {navigation.map((item) => {
            if (item.href === '#contact') {
              return (
                <div className="overflow-hidden py-2" key={item.id}>
                  <motion.div variants={itemTranslate({ y: "165%", x: 0 }, {y: "0%", x: 0}, .3)}>
                    <Link
                      onClick={() => setNavbarActive(false)}
                      href={item.href} 
                      className="py-2 px-4 btn-gradient-2 rounded-full transition"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                </div>
              )
            }
            return (
              <div className="overflow-hidden" key={item.id}>
                <motion.div variants={itemTranslate({ y: "105%", x: 0 }, {y: "0%", x: 0}, .3)}>
                  <Link 
                    onClick={() => setNavbarActive(false)}
                    href={item.href} 
                    className="nav-item"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              </div>
            )
          })} 
          <motion.button
            variants={itemShow(.5)}
            onClick={() => setNavbarActive(false)}
            className="absolute right-8 top-4 md:hidden z-[999]"
          >
            <MdOutlineClose fontSize={30} />
          </motion.button>
        </motion.nav>
      </div>
    </>
  )
}

export default Navbar