export const ContainerVariants = {
  initial: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2
    }
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const DotVariants = {
  initial: {
    y: '0%'
  },
  animate: {
    y: '100%'
  }
}

export const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut'
}
