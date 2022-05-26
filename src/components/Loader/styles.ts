import styled from 'styled-components'

import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  padding-top: 5rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerDots = styled(motion.div)`
  width: 10rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
`
export const LoadingDot = styled(motion.div)`
  display: block;
  width: 2rem;
  height: 2rem;
  background-color: var(--color-primary);
  border-radius: 50%;
`
