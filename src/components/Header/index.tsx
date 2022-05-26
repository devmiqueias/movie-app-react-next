import { ReactNode, useState } from 'react'

import { useRouter } from 'next/router'

import { AnimatePresence, motion } from 'framer-motion'
import { headerVariants, menuIconVariants } from './animate'

import * as S from './styles'

import { MdArrowBack, MdOutlineMenu, MdClose } from 'react-icons/md'

import Menu from '../Menu'

type Props = {
  children: ReactNode
}
const Header = ({ children }: Props) => {
  const { pathname, back } = useRouter()

  const isShowPage = pathname === '/show/[id]'

  const [menuVisibility, setMenuVisibility] = useState(false)
  const hideShowMenu = () => setMenuVisibility(!menuVisibility)

  return (
    <S.Container>
      <S.Header>
        <S.Left>
          {isShowPage ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={headerVariants}
              onClick={() => back()}
            >
              <MdArrowBack className="icon" />
              <h4>Back</h4>
            </motion.div>
          ) : (
            <motion.h4
              initial="hidden"
              animate="visible"
              variants={headerVariants}
            >
              Next<span>Flix</span>
            </motion.h4>
          )}
        </S.Left>
        <S.Right initial="hidden" animate="visible" variants={headerVariants}>
          <AnimatePresence exitBeforeEnter>
            {menuVisibility ? (
              <motion.div
                key="iconClose"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuIconVariants}
              >
                <MdClose className="icon" onClick={hideShowMenu} />
              </motion.div>
            ) : (
              <motion.div
                key="iconMenu"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuIconVariants}
              >
                <MdOutlineMenu className="icon" onClick={hideShowMenu} />
              </motion.div>
            )}
          </AnimatePresence>
        </S.Right>
      </S.Header>
      {children}
      <AnimatePresence>
        {menuVisibility && <Menu setMenuVisibility={setMenuVisibility} />}
      </AnimatePresence>
    </S.Container>
  )
}

export default Header
