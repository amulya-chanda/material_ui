import React from "react";
import "./Cards.css";
import Divider from '@mui/material/Divider';
import { Container,Typography,Grid, Button} from "@mui/material";
export const Cards=(props)=>{
    return(
        <>
        <Container className="cards">
            {/* <Grid container className="cards1">
                <Grid xs={3} className="free"> */}
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                    <img id="icon" src={props.src1}></img>
                    </Grid>
                    <Grid xs={6}>
                    <Typography id="card1"variant='h4'>{props.heading}</Typography>
                    <Typography id="card"variant='p'>{props.para}</Typography>
                    {/* <Divider light id="divider" /> */}
                    <Divider variant="middle"id="divider" />
                    </Grid>
                    </Grid>
                    <Typography id="card2"variant='p'><img id="tick1"src={props.src} alt="pic"></img>{props.text}</Typography>
                    <Typography id="card2"variant='p'><img id="tick1"src={props.src} alt="pic"></img>{props.text1}</Typography>
                    <Typography id="card2"variant='p'><img id="tick1"src={props.src} alt="pic"></img>{props.text2}</Typography>
                    <Typography id="card2"variant='p'><img id="tick1"src={props.src} alt="pic"></img>{props.text3}</Typography>
                    <Button id="button5"variant='p'>{props.buttonText}</Button>
                {/* </Grid>
                
            </Grid> */}
        </Container>
        </>
    )
}
