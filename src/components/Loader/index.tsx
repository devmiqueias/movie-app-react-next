import { ContainerVariants, DotTransition, DotVariants } from './animate'

import * as S from './styles'

const Loader = () => {
  return (
    <S.Container>
      <S.ContainerDots
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <S.LoadingDot variants={DotVariants} transition={DotTransition} />
        <S.LoadingDot variants={DotVariants} transition={DotTransition} />
        <S.LoadingDot variants={DotVariants} transition={DotTransition} />
      </S.ContainerDots>
    </S.Container>
  )
}

export default Loader
