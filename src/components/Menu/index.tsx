import Link from 'next/link'
import { useRouter } from 'next/router'

import navLinks from '../../config/navLinks'

import { motion } from 'framer-motion'
import {
  listItemVariants,
  listVariants,
  menuOverlayVariants,
  menuVariants
} from './animate'

import * as S from './styles'

type Props = {
  setMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ setMenuVisibility }: Props) => {
  const { asPath } = useRouter()

  const hideMenu = () => setMenuVisibility(false)

  return (
    <S.Container>
      <S.Overlay
        onClick={hideMenu}
        key="menuOverlay"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={menuOverlayVariants}
      />
      <S.Menu
        key="menu"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={menuVariants}
      >
        <motion.ul variants={listVariants}>
          {navLinks.map(link => (
            <Link href={link.path} key={link.path}>
              <motion.li
                variants={listItemVariants}
                onClick={hideMenu}
                className={asPath === link.path ? 'selected' : ''}
              >
                <a>{link.name}</a>
              </motion.li>
            </Link>
          ))}
        </motion.ul>
      </S.Menu>
    </S.Container>
  )
}

export default Menu
