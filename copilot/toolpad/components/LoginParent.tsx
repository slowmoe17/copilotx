import * as React from "react";
import { Typography } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";
import FormLogin from "./LoginForm";
import LogoAndTextLogin from "./LogoAndTextLogin";

export interface LoginParentProps {
  msg: string;
}

function LoginParent({ msg }: LoginParentProps) {
  return (
    <div style={{display:"flex", width:"90%", margin:'auto', height:"100vh"}}>
      <FormLogin />
      <LogoAndTextLogin />
    </div>
  )
}

export default createComponent(LoginParent, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
