import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background-color: var(--color-overlay);
  }
`;
