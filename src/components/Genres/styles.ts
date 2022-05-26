import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  grid-area: genres;
  width: 100%;
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
  p {
    margin-top: 2%;
    padding: 1.5%;
    text-align: center;
    border-radius: 0.5rem;
    background-color: var(--color-quaternary);
    @media (min-width: 913px) {
      padding: 1%;
    }
    @media (min-width: 1320px) {
      border-radius: 0.55rem;
    }
    @media (min-width: 1452px) {
      border-radius: 0.605rem;
    }
    @media (min-width: 1597px) {
      border-radius: 0.665rem;
    }
    @media (min-width: 1756px) {
      border-radius: 0.731rem;
    }
    @media (min-width: 1932px) {
      border-radius: 0.804rem;
    }
    @media (min-width: 2125px) {
      border-radius: 0.884rem;
    }
    @media (min-width: 2338px) {
      border-radius: 0.972rem;
    }
    @media (min-width: 2571px) {
      border-radius: 1.069rem;
    }
    @media (min-width: 2828px) {
      border-radius: 1.117rem;
    }
    @media (min-width: 3110px) {
      border-radius: 1.292rem;
    }
    @media (min-width: 3763px) {
      border-radius: 1.421rem;
    }
  }
`
