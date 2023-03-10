import React from "react";
import "./header.css";
import { AppBar,Tabs,Tab,Toolbar } from "@mui/material";
import { Container,  } from "@mui/system";
import page_logo from "../assets/page_logo.svg";
import react_logo from "../assets/react_logo.svg";
//import styled from "styled-components";
export const Header=()=>{
    // const header1=styled('Toolbar')({
    //     backgroundColor:"black",
    //     display:"flex",
    //     flexDirection:"column",
    // });
    return(
        <>
        <AppBar>
           <Toolbar className="header">
                <img id="logo"src={page_logo} alt="pic"></img>
                <button id="button1"  >Buy now</button>

            </Toolbar>
        </AppBar>
        <Container className="contents">
            <img id="react_logo"src={react_logo} alt="pic"></img>
            <Tabs className="list">
            <a href="http://evelynn-react.ui-lib.com/demos"><Tab label="Demos"></Tab></a>
            <a href="http://evelynn-react.ui-lib.com/landing4#intro4">   <Tab label="Home"></Tab></a>
            <a href="http://evelynn-react.ui-lib.com/landing4#feature4">  <Tab label="Works"></Tab></a> 
            <a href="http://evelynn-react.ui-lib.com/landing4#product-analytics"><Tab label="Services"></Tab></a>
            <a href="http://evelynn-react.ui-lib.com/landing4#pricing2"><Tab label="Pricing"></Tab></a>
            <a href="http://evelynn-react.ui-lib.com/landing4#contact4"><Tab label="Contact"></Tab></a>
            </Tabs>
            <Toolbar className="signup">
                <button id="login_button">Login</button>
                <button id="signup_button">Sign Up</button>
                </Toolbar>
        </Container>
       
        </>
    )
}