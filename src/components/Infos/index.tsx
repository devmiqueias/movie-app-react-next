import { motion } from 'framer-motion'
import { infosVariants, infoVariants } from './animate'

import * as S from './styles'

import { MdStar, MdCalendarToday } from 'react-icons/md'

type Props = {
  voteAverage: number
  numberOfSeasons: number
  firstSirDate: string
}
const Infos = ({ voteAverage, numberOfSeasons, firstSirDate }: Props) => {
  let firstDate = new Date(firstSirDate)

  return (
    <S.Container variants={infosVariants}>
      <motion.p variants={infoVariants}>
        <MdStar style={{ color: 'yellow' }} /> {voteAverage}
      </motion.p>
      <motion.p variants={infoVariants}>
        <MdCalendarToday /> {firstDate.getFullYear()}
      </motion.p>
      <motion.p variants={infoVariants}>
        {numberOfSeasons} Season
        {numberOfSeasons > 1 && 's'}
      </motion.p>
    </S.Container>
  )
}

export default Infos
