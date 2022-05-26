import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 30vh;
  position: absolute;
  bottom: 2%;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2%;
  @media (min-height: 700px) {
    bottom: 1%;
  }
  @media (min-width: 700px) {
    gap: 1%;
  }
  @media (min-width: 960px) {
    height: 40vh;
    bottom: 1%;
    padding: 0 3%;
  }
`
export const List = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const Item = styled(motion.div)`
  height: 100%;
  width: 130px;
  flex: none;
  cursor: pointer;
  .img {
    border-radius: 0.5rem;
    transform: scale(0.9);
    transition: transform ease-in 0.2s;
  }
  .img:hover {
    transform: scale(1);
  }
  @media (min-height: 700px) {
    width: 150px;
  }
  @media (min-width: 960px) {
    width: 170px;
  }
  @media (min-height: 1000px) {
    width: 180px;
  }
  @media (min-height: 1000px) and (min-width: 1000px) {
    width: 250px;
  }
  @media (min-width: 1700px) {
    width: 200px;
    border-radius: 0.731rem;
  }
  @media (min-width: 1900px) {
    width: 260px;
    border-radius: 0.804rem;
  }
  @media (min-width: 2100px) {
    width: 300px;
    border-radius: 0.884rem;
  }
  @media (min-width: 2500px) {
    width: 350px;
    border-radius: 1.069rem;
  }
  @media (min-width: 3000px) {
    width: 500px;
    border-radius: 1.421rem;
  }
`
