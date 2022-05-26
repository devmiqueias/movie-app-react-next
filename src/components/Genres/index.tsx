import { Genre } from '../../types/show'

import { motion } from 'framer-motion'
import { genresVariants, genreVariants } from './animate'

import * as S from './styles'

type Props = {
  genres: Genre[]
}


const Genres = ({ genres }: Props) => {
  return (
    <S.Container variants={genresVariants}>
      {genres.map(item => (
        <motion.p variants={genreVariants} key={item.id}>
          {item.name}
        </motion.p>
      ))}
    </S.Container>
  )
}

export default Genres
