import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  @media (min-width: 913px) and (max-height: 1024px) {
    height: 100%;
  }
  @media (min-width: 1025px) {
    height: 100%;
  }
`
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-color: var(--color-overlay);
`
export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background: linear-gradient(
    to top,
    var(--color-secondary) 10%,
    transparent 90%
  );
  @media (min-width: 913px) and (max-height: 1024px) {
    display: none;
  }
  @media (min-width: 1025px) {
    display: none;
  }
`
