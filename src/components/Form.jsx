import React, { useState } from "react";
import {
  InputSC,
  DivBoxFormSC,
  ButtonSC,
} from "../styled-components/styled.login";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <DivBoxFormSC>
      <InputSC
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <InputSC
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <ButtonSC onClick={() => handleClick(email, pass)}>{title}</ButtonSC>
    </DivBoxFormSC>
  );
};

export { Form };
