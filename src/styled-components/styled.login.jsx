import { Link } from "react-router-dom";
import styled from "styled-components";

export const InputSC = styled.input`
  width: calc(100% - 36px);
  height: fit-content;
  font-size: 18px;
  padding: 10px 14px;
  border: 4px solid #35ff22;
  user-select: none;
  background: initial;
  color: #35ff22;
  ::placeholder {
    color: #59a65d;
  }
`;

export const TextSC = styled.div`
  color: #35ff22;
  font-size: 45px;
  font-weight: 600;
  padding-bottom: 15px;
  padding-top: 100px;
`;

export const DivBoxFormSC = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  gap: 15px;
`;

export const ButtonSC = styled.div`
  color: gray;
  background-color: #35ff22;
  height: 36px;
  text-align: center;
  font-size: 24px;
  padding-top: 5px;
  cursor: pointer;
`;

export const LinkDecSC = styled(Link)`
  font-size: 20px;
  color: #35ff22;
`;
