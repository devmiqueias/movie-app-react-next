import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-overlay);
`
export const Modal = styled(motion.div)`
  width: 90%;
  height: auto;
  max-height: 90%;
  padding: 3%;
  border-radius: 0.5rem;
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    width: 65%;
    padding: 1.5%;
  }
  .icon {
    cursor: pointer;
    align-self: flex-end;
    margin-bottom: 3%;
    font-size: calc(1.3rem + 0.6vw);
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: rotate(90deg);
    }
    @media (min-width: 900px) {
      margin-bottom: 1.5%;
    }
    @media (min-width: 1200px) {
      font-size: 1.75rem;
    }
    @media (min-width: 1320px) {
      font-size: 1.925rem;
    }
    @media (min-width: 1452px) {
      font-size: 2.117rem;
    }
    @media (min-width: 1597px) {
      font-size: 2.328rem;
    }
    @media (min-width: 1756px) {
      font-size: 2.56rem;
    }
    @media (min-width: 1932px) {
      font-size: 2.816rem;
    }
    @media (min-width: 2125px) {
      font-size: 3.097rem;
    }
    @media (min-width: 2338px) {
      font-size: 3.406rem;
    }
    @media (min-width: 2571px) {
      font-size: 3.746rem;
    }
    @media (min-width: 2828px) {
      font-size: 4.12rem;
    }
    @media (min-width: 3110px) {
      font-size: 4.532rem;
    }
    @media (min-width: 3763px) {
      font-size: 4.985rem;
    }
  }
`
export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  max-width: 100%;
  max-height: 100%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
