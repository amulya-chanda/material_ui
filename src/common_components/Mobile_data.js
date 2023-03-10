import React from "react";
import { Container,Typography,Grid} from "@mui/material";
import "./Mobile_data.css";
export const Mobile_data=(props)=>{
    return(
        <>
        <Container className="mobile_data">
            <img id="mobiledata_img"src={props.src}></img>
            <Typography variant="h7" component='div' id="mobile_data"><b>{props.heading}</b></Typography>
            <Typography id="description"variant="p">{props.description}</Typography>
        </Container>
        </>
    )
}