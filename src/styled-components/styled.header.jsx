import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivBoxHeaderSC = styled.div`
  width: 100%;
  height: 100px;
  //background: rgba(29, 29, 29, 0);
  position: fixed;
  top: 0;
  display: grid;
  border-bottom: 3px solid #35ff22;
  justify-content: center;
  z-index: 100;
  justify-items: center;
  align-items: center;
  @media (max-width: 480px) {
    height: 40px;
  }
  @media (max-width: 768px) {
    height: 80px;
  }
`;

export const DivBoxGridSC = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(5, max-content);
  max-width: 1720px;
  margin: 0 auto;
  column-gap: 100px;
`;

export const LinkSC = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  color: #35ff22;
`;
