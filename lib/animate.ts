export const navAnimation = {
  initial: {
      opacity: 0,
      x: "100%"
  },
  animate: {
      opacity: 1,
      x: "0%",
      transition: {        
        when: "beforeChildren",
        duration: .3,
        delayChildren: 0.5,
        staggerChildren: 0.2,
        ease: 'easeInOut',
      }
  }
}

export const staggerContainer = (staggerChildren = .1, delay = 0.5) => ({
  initial: {},
  animate: {
      transition: {
          delay,
          staggerChildren
      }
  }
});

export const containerShow = {
  intial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delayChildren: 0.5,
      staggerChildren: 0.2,
      ease: 'easeInOut',
    },
  },
};

export const itemShow = (duration: number = .8, usingScale = true) => ({
  initial: {
    opacity: 0,
    scale: usingScale ? .8 : 1,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      type: 'spring',
      damping: 10,
      stiffness: 100,
      friction: 5,
    },
  },
});

export const containerTranslate = (initial: Coordinates = {x: 0, y: 0}, animate: Coordinates = {x: 0, y: 0}, duration: number) => {
  return {
      initial,
      animate: {
          x: animate.x,
          y: animate.y,
          transition: {
              duration,
              delayChildren: .5,
              staggerChildren: .3
          }
      },
      exit: {
          opacity: 0
      }
  }
}

type Coordinates = {
  x: number | string;
  y: number | string;
}

export const itemTranslate = (initial: Coordinates = {x: 0, y: 0}, animate: Coordinates = {x: 0, y: 0}, duration: number) => {
  return {
      initial: {
          x: initial.x,
          y: initial.y
      },
      animate: {
         x: animate.x, 
         y: animate.y,
          transition: {
              duration
          }
      }
  }
}