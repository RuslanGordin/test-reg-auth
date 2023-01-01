import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";
import { DivBoxContentSC } from "../styled-components/styled.homePage";
import { LinkDecSC, TextSC } from "../styled-components/styled.login";

const RegisterPage = () => {
  return (
    <DivBoxContentSC>
      <TextSC>Registeration</TextSC>
      <SignUp />
      <p
        style={{
          display: "grid",
          gridTemplateColumns: "max-content max-content",
          gap: "10px",
        }}
      >
        <div style={{ color: "gray", fontSize: "20px" }}>
          Already have an account?
        </div>{" "}
        <LinkDecSC to="/login">Sign in</LinkDecSC>
      </p>
    </DivBoxContentSC>
  );
};

export default RegisterPage;
