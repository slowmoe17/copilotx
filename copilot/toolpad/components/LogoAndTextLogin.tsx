import * as React from "react";
import { Typography } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";
import logo from '../assets/logo.png'
export interface LogoAndTextLoginProps {
  msg: string;
}

function LogoAndTextLogin({ msg }: LogoAndTextLoginProps) {
  return (
    <div style={{width: '50%', background: '#1C64F2',  height: '100vh'}}>
      <div style={{width: '90%',margin:'auto', display:'flex', flexDirection:'column',  gap:'200px'}}>
        <div style={{textAlign:'center',marginTop:'50px'}}>
          <img src={logo} alt="Shoe" />
        </div>
        <div>
          <div style={{height:'100%', width:'100%'}}>
            <h3 style={{fontSize:'38px', fontWeight:'700', color:'#FFF'}}>Explore All CyberX Products Results</h3>
            <p style={{color:'#E5E7EB', fontSize:'14px', marginTop:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
          </div>
        </div>
      </div>
    </div>
      )
}

export default createComponent(LogoAndTextLogin, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
