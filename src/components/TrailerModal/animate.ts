import dontFoundLottie from '../../../public/assets/lotties/38463-error.json'

export const traileModalContainerVariants = {
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

export const traileModalVariants = {
  hidden: {
    scale: 0,
    transition: {
      duration: 0.5
    }
  },
  visible: {
    scale: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      duration: 0.5,
      bounce: 0.40
    }
  }
}

export const lottieOpitions = {
  loop: true,
  autoplay: true,
  animationData: dontFoundLottie
}
