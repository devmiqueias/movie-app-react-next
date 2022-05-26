export const menuOverlayVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export const menuVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    transition: {
      dalay: 0.3,
      duration: 0.8
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      dalay: 0.3,
      duration: 0.8,
      delayChildren: 0.8
    }
  }
}

export const listVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

export const listItemVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}
