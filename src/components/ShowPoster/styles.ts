import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  grid-area: poster;
  .img {
    border-radius: 1rem;
  }
  @media (min-width: 913px) {
    margin-top: 10%;
  }
`
