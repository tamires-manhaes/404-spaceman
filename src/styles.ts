
import styled from 'styled-components';

export const Page = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
`;

export const IMG = styled.img`
  margin-left: 110px;
  margin-bottom: 20px;
`;

export const BG = styled.img`
  z-index: 1;
  object-fit: fill;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #FFF;
    font-size: 50px;
    font-weight: 500;
    line-height: normal;
  }

  h3 {
    color: #FFF;
    font-size: 30px;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
  }

`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 20px 0 0;

  button {
    margin: 0 10px;
  }
`;
