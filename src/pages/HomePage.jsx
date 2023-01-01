import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import { DivBoxContentSC } from "../styled-components/styled.homePage";
import { TextSC } from "../styled-components/styled.login";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);

  return (
    <DivBoxContentSC>
      <TextSC>Welcome!</TextSC>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </DivBoxContentSC>
  );
};

export default HomePage;
