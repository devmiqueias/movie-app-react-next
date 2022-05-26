import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.button)`
  cursor: pointer;
  width: 100%;
  max-width: 22.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.5rem;
  color: var(--color-white);
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2%;
  font-size: 1.25rem;
  @media (min-width: 1320px) {
    font-size: 1.1rem;
    height: 2.75rem;
    max-width: 24.75rem;
    border-radius: 0.55rem;
  }
  @media (min-width: 1452px) {
    font-size: 1.21rem;
    height: 3.025rem;
    max-width: 27.225rem;
    border-radius: 0.605rem;
  }
  @media (min-width: 1597px) {
    font-size: 1.331rem;
    height: 3.327rem;
    max-width: 29.947rem;
    border-radius: 0.665rem;
  }
  @media (min-width: 1756px) {
    font-size: 1.464rem;
    height: 3.66rem;
    max-width: 32.942rem;
    border-radius: 0.731rem;
  }
  @media (min-width: 1932px) {
    font-size: 1.61rem;
    height: 4.026rem;
    max-width: 36.236rem;
    border-radius: 0.804rem;
  }
  @media (min-width: 2125px) {
    font-size: 1.771rem;
    height: 4.428rem;
    max-width: 39.86rem;
    border-radius: 0.884rem;
  }
  @media (min-width: 2338px) {
    font-size: 1.948rem;
    height: 4.870rem;
    max-width: 43.846rem;
    border-radius: 0.972rem;
  }
  @media (min-width: 2571px) {
    font-size: 2.142rem;
    height: 5.357rem;
    max-width: 48.230rem;
    border-radius: 1.069rem;
  }
  @media (min-width: 2828px) {
    font-size: 2.356rem;
    height: 5.892rem;
    max-width: 53.053rem;
    border-radius: 1.117rem;
  }
  @media (min-width: 3110px) {
    font-size: 2.591rem;
    height: 6.481rem;
    max-width: 58.358rem;
    border-radius: 1.292rem;
  }
  @media (min-width: 3763px) {
    font-size: 2.850rem;
    height: 7.129rem;
    max-width: 64.193rem;
    border-radius: 1.421rem;
  }
`
