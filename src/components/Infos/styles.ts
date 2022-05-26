import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  grid-area: info;
  justify-self: center;
  font-size: 1.25rem;
  p {
    display: flex;
    align-items: center;
    gap: 5%;
  }
  @media (min-width: 913px) and (max-height: 1024px) {
    display: flex;
    width: 100%;
    gap: 5%;
    justify-self: start;
  }
  @media (min-width: 1025px) {
    display: flex;
    width: 100%;
    gap: 5%;
    justify-self: start;
  }
`
