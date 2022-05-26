export const posterVariants = {
  hidden: { x: '-100vw', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.3,
      type: 'spring'
    }
  }
}
