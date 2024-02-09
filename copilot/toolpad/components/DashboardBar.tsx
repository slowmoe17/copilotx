import * as React from "react";
import { Typography } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";


export interface DashboardBarProps {
  msg: string;
}





function DashboardBar() {
  return (
    <div style={sidebarStyle}>
      <div className="chats">
        <button  style={{backgroundColor:"#1A56DB", padding:"10px", width:"100%" , color:"white" , borderRadius:"10px 10px 10px 10px"}}>New Search</button>
      </div>

      <div className="history" >
     
      </div>
    </div>
  );
}

const sidebarStyle = {
  padding: '10px',
  backgroundColor: '#202123',
  width: '260px',
  minHeight: '68em',
  height: 'max-content',
  position: 'fixed',
  display: 'grid'
};

const buttonStyle = {
  border: '1px solid hsla(0, 0%, 100%, .2)',
  fontSize: '.875rem',
  width: '100%',
  textAlign: 'left',
  height: '3rem',
  padding: '12px 12px',
  background: 'transparent',
  borderRadius: '8px',
  fontFamily: 'Roboto',
  cursor: 'pointer',
  transition: '.3s'
};

const tabStyle = {
  display: 'flex',
  fontSize: '.875rem',
  width: '100%',
  textAlign: 'left',
  height: '3rem',
  padding: '12px 12px',
  background: 'transparent',
  borderRadius: '8px',
  fontFamily: 'Roboto',
  cursor: 'pointer',
  marginBottom: '-1.5em',
  color: 'white',
  opacity: '.91',
  fontWeight: '300',
  lineHeight: '1.3',
  transition: '.3s'
};




export default createComponent(DashboardBar, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
