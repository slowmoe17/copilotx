import * as React from "react";
import { Typography } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";

export interface TestProps {
  msg: string;
}

function Test({ msg }: TestProps) {
  return (
    <div>
       <h1 className="text-3xl font-bold underline">Hello World</h1>
    </div>
  )
}

export default createComponent(Test, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
