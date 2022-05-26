import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const Header = styled.div`
  width: 100vw;
  height: 10vh;
  padding: 0 5%;
  position: fixed;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(1.3rem + 0.6vw);
  @media (min-width: 1024px) and (max-height: 1024px) {
    padding: 0 3%;
  }
  @media (min-width: 1025px) {
    padding: 0 3%;
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
`
export const Left = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  div {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1%;
  }
  h4 {
    margin-bottom: 0;
    cursor: pointer;
  }
  span {
    color: var(--color-primary);
  }
  .icon {
    cursor: pointer;
  }
`
export const Right = styled(motion.div)`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .icon {
    cursor: pointer;
  }
`
