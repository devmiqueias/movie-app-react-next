import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
`
export const Slider = styled.div`
  width: 100%;
  height: 70%;
  position: absolute;
  transition: all ease 1.5s;
`
export const Background = styled.div`
  width: 100%;
  height: 30vh;
  position: absolute;
  top: 0;
  right: 0;

  @media (min-height: 700px) {
    height: 35vh;
  }
  @media (min-width: 960px) {
    width: 75%;
    height: 100%;
  }
`
export const BackgroundImg = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
`
export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 30vh;
  background: linear-gradient(to top, var(--color-secondary), transparent);

  @media (min-height: 700px) {
    height: 35vh;
  }
  @media (min-width: 960px) {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      var(--color-secondary) 5%,
      transparent 90%
    );

    div {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        var(--color-secondary) 30%,
        transparent 70%
      );
    }
  }
`
export const Content = styled.div`
  width: 100%;
  height: 40vh;
  padding: 0 5%;
  position: absolute;
  top: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  a {
    grid-area: button;
    width: 100%;
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
  @media (min-height: 700px) {
    top: 40%;
    p {
      -webkit-line-clamp: 3;
    }
  }
  @media (min-width: 960px) {
    width: 50%;
    height: 80%;
    top: 5%;
    padding: 0 3%;
    p {
      -webkit-line-clamp: 3;
    }
  }
`
