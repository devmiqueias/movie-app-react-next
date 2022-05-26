import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`
export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 5%;
  position: absolute;
  z-index: 3;
  display: grid;
  grid-template-areas:
    'title title'
    'poster info'
    'genres genres'
    'sinopse sinopse'
    'button button';
  align-items: center;
  grid-template-columns: 3fr 2fr;
  column-gap: 2%;

  @media (min-width: 913px) and (max-height: 1024px) {
    grid-template-areas:
      'poster title'
      'poster info'
      'poster sinopse'
      'poster genres'
      'poster button';
    grid-template-columns: 3fr 4fr;
    padding: 0 10%;
    column-gap: 5%;
    align-content: center;
    align-items: flex-start;
  }
  @media (min-width: 1025px) {
    grid-template-areas:
      'poster title'
      'poster info'
      'poster sinopse'
      'poster genres'
      'poster button';
    grid-template-columns: 3fr 4fr;
    padding: 0 10%;
    column-gap: 5%;
    align-content: center;
    align-items: flex-start;
  }
  .btn {
    grid-area: button;
  }
`
export const Title = styled(motion.h1)`
  grid-area: title;
  margin-top: 10%;
`
export const Sinopse = styled(motion.p)`
  grid-area: sinopse;
  max-height: 20vh;
  overflow: auto;
  @media (min-height: 800px) {
    max-height: 25vh;
  }
  scrollbar-color: var(--color-secondary) transparent;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary);
    border-radius: 0.5rem;
  }
`
