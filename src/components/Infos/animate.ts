export const infosVariants = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.5
    }
  }
}

export const infoVariants = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}
