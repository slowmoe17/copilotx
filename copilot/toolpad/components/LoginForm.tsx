import * as React from "react";
import { Typography } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";
import shoe1 from '../assets/logo.png'

export interface LoginFormProps {
  msg: string;
}

function LoginForm({ msg }: LoginFormProps) {
  return (
    <div style={{width:'50%',height:'60%', margin:'auto'}}>
      <div style={{width:"90%"}}>
        <h3>Welcome back</h3>
        <div style={{display:'flex', alignItems:'center', justifyContent:"center",marginTop:'25px', marginBottom:'25px', padding:'5px', gap:"10px",border:'1px solid #D1D5DB', borderRadius:'10px'}}>
          <img src={shoe1} />
          <p>Sign in with KeyCloak</p>
        </div>
        <div style={{textAlign:'center', color:'#6B7280'}}>Or</div>
        <form action="">
          <div style={{display:"flex", flexDirection:'column', marginTop:'20px', marginBottom:'20px'}}>
            <label htmlFor="email" style={{color:"#111928", fontWeight:'500'}}>Email</label>
            <input 
              placeholder='name@example.com' 
              type="text" 
              id="email" 
              name="email" 
              style={{padding:'10px', borderRadius:'10px', marginTop:'8px', border:'1px solid #D1D5DB', }}
            />
          </div>
          <div style={{display:"flex", flexDirection:'column', marginTop:'20px', marginBottom:'20px'}}>
            <label htmlFor="pass" style={{color:"#111928", fontWeight:'500'}}>Password</label>
            <input 
              placeholder='••••••••••' 
              type="text" 
              id="pass" 
              name="pass" 
              style={{padding:'10px', borderRadius:'10px', marginTop:'8px', border:'1px solid #D1D5DB', }}
            />
          </div>
        
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{display:'flex', justifyContent:'center'}}>
              <input
                type="checkbox"
                id="rem"
                name="rem"
                style={{marginRight:'5px', border:"1px solid #D1D5DB !important"}}
              />
              <label htmlFor="rem" style={{color:"#6B7280", fontWeight:'500'}}>Remember me</label>
            </div>
            <a href="" style={{color:'#1C64F2',textAlign:'center', fontWeight:"500"}}>Forgot password?</a>
          </div>
          <button style={{border:'none', cursor:'pointer' ,width:'100%', background:'#1C64F2', color:'white', padding:'10px', borderRadius:'10px', marginTop:'20px'}}>Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default createComponent(LoginForm, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
