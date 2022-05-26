import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  overflow: hidden;
`
export const Overlay = styled(motion.div)`
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: var(--color-overlay);
`

export const Menu = styled(motion.nav)`
  height: 100%;
  width: 100%;
  padding: 5% 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 11;
  background-color: var(--color-secondary);

  @media (min-width: 500px) {
    width: 50%;
  }
  @media (min-width: 1024px) and (max-height: 1024px){
    width: 30%;
  }
  @media (min-width: 1025px){
    width: 30%;
  }
  ul {
    height: 100%;
    width: 100%;
    margin: 5% 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    li {
      width: 85%;
      font-size: 1.15rem;
      list-style: none;
      line-height: 2.5rem;
      text-align: center;
      border-radius: 0.5rem;
      cursor: pointer;
    }
    a {
      color: var(--color-white);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: var(--color-primary);
      }
    }
    .selected {
      background-color: var(--color-primary);
      a:hover {
        color: var(--color-white);
      }
    }
    @media (min-height: 700px) {
      li {
        line-height: 2.8rem;
      }
    }
    @media (min-width: 1320px) {
      li {
        font-size: 1.1rem;
        line-height: 2.75rem;
        border-radius: 0.55rem;
      }
    }
    @media (min-width: 1452px) {
      li {
        font-size: 1.21rem;
        line-height: 3.025rem;
        border-radius: 0.605rem;
      }
    }
    @media (min-width: 1597px) {
      li {
        font-size: 1.331rem;
        line-height: 3.327rem;
        border-radius: 0.665rem;
      }
    }
    @media (min-width: 1756px) {
      li {
        font-size: 1.464rem;
        line-height: 3.66rem;
        border-radius: 0.731rem;
      }
    }
    @media (min-width: 1932px) {
      li {
        font-size: 1.61rem;
        line-height: 4.026rem;
        border-radius: 0.804rem;
      }
    }
    @media (min-width: 2125px) {
      li {
        font-size: 1.771rem;
        line-height: 4.428rem;
        border-radius: 0.884rem;
      }
    }
    @media (min-width: 2338px) {
      li {
        font-size: 1.948rem;
        line-height: 4.87rem;
        border-radius: 0.972rem;
      }
    }
    @media (min-width: 2571px) {
      li {
        font-size: 2.142rem;
        line-height: 5.357rem;
        border-radius: 1.069rem;
      }
    }
    @media (min-width: 2828px) {
      li {
        font-size: 2.356rem;
        line-height: 5.892rem;
        border-radius: 1.117rem;
      }
    }
    @media (min-width: 3110px) {
      li {
        font-size: 2.591rem;
        line-height: 6.481rem;
        border-radius: 1.292rem;
      }
    }
    @media (min-width: 3763px) {
      li {
        font-size: 2.85rem;
        line-height: 7.129rem;
        border-radius: 1.421rem;
      }
    }
  }
`
