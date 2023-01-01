import React from "react";
import { Login } from "../components/Login";
import { DivBoxContentSC } from "../styled-components/styled.homePage";
import { LinkDecSC, TextSC } from "../styled-components/styled.login";

const LoginPage = () => {
  return (
    <DivBoxContentSC>
      <TextSC>Login</TextSC>
      <Login />
      <p
        style={{
          display: "grid",
          gridTemplateColumns: "max-content max-content",
          gap: "10px",
        }}
      >
        <div style={{ color: "gray", fontSize: "20px" }}>Or</div>{" "}
        <LinkDecSC to="/register">Register</LinkDecSC>
      </p>
    </DivBoxContentSC>
  );
};

export default LoginPage;
