import {  Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./People.css";
import Divider from '@mui/material/Divider';
//import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StartIcon from '@mui/icons-material/Start';
import TwitterIcon from '@mui/icons-material/Twitter';
export const People=(props)=>{
    return(
        <>
        <Container className="people">
            {/* <Grid container className="persons"> */}
                {/* <Grid className="person"xs={3}> */}
                   <img id="face"src={props.src}></img>
                   <Typography variant="p" component='div' id="people_text">{props.heading}</Typography>
                   <Divider variant="middle" id="divider1" />
                   <Container>
                   <StartIcon id="start"/>
                   <StartIcon id="start"/>
                   <StartIcon id="start"/>
                   <StartIcon id="start"/>
                   <StartIcon id="start"/>
                   </Container>
                   <Typography variant="p" component="div" id="name"><b>{props.name}</b></Typography>
                   <Typography variant="p" component="div" id="role">{props.role}<TwitterIcon id="twittericon"/></Typography>
                {/* </Grid> */}
            {/* </Grid> */}
        </Container>
        </>
    )
}