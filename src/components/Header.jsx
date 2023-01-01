import React from "react";
import {
  DivBoxHeaderSC,
  DivBoxGridSC,
  LinkSC,
} from "../styled-components/styled.header";

const Header = () => {
  return (
    <DivBoxHeaderSC>
      <DivBoxGridSC>
        {/*  <DivLogoBoxSC>
          <LogoSC />
        </DivLogoBoxSC> */}
        <LinkSC to="#">Blog</LinkSC>
        <LinkSC to="#">About me</LinkSC>
        <LinkSC to="#">Work</LinkSC>
        <LinkSC to="#">Notes</LinkSC>
        <LinkSC to="#">Settings</LinkSC>
      </DivBoxGridSC>
    </DivBoxHeaderSC>
  );
};

export default Header;
