import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`
export const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  text-align: center;

  h1 {
    font-size: calc(1.375rem + 1.5vw);
    @media (min-width: 1200px) {
      font-size: 3rem;
    }
    span {
      color: var(--color-primary);
    }
  }
`
