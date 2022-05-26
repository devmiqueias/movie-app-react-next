import { MouseEventHandler, ReactNode } from 'react'

import { buttonVariants } from './animate'

import * as S from './styles'

type Props = {
  children: ReactNode
  className?: string
  onClick?: MouseEventHandler
}

const Button = ({ children, className, onClick }: Props) => {
  return (
    <S.Container
      initial='hidden'
      animate='visible'
      variants={buttonVariants}
      className={className}
      onClick={onClick}
    >
      {children}
    </S.Container>
  )
}

export default Button
