import React from "react";
import { Container } from "@mui/system";
import {Cards} from "../common_components/Cards";
import tick from "../assets/tick.png";
import e_icon from "../assets/e_icon.jpg";
import steps from "../assets/steps.jpg";
import tie from "../assets/tie.jpg";
import building from "../assets/building.jpg";
import { Grid, Typography } from "@mui/material";
import "./card.css";
export const Card=()=>{
    return(
        <>
        <Container className="card">
        <Grid container  className="card_background" spacing={4}>
            <Grid xs={2.8} className="free" >
            <Cards src1={e_icon}heading="Free"para="$ 0/mo" text="Full Access" src={tick} text1="Source Files"text2="Code Upload" text3="Enhanced Security"text4="Free Installment" buttonText="Buy Now"/>
            </Grid>
           <Grid xs={2.8} className="free" >

            <Cards src1={steps} heading="Starter" para="$ 19/mo" text="Full Access"src={tick} text1="Source Files"text2="Code Upload" text3="Enhanced Security"text4="Free Installment"buttonText="Buy Now" />
           </Grid>
           <Grid xs={2.8} className="free">
            <Cards src1={tie} heading="Business" para="$ 39/mo" text="Full Access"src={tick} text1="Source Files"text2="Code Upload" text3="Enhanced Security"text4="Free Installment"buttonText="Buy Now" />
            </Grid>
            <Grid xs={2.8} className="free" >

            <Cards src1={building}heading="Ultimate" para="$ 59/mo" text="Full Access"src={tick} text1="Source Files"text2="Code Upload" text3="Enhanced Security"text4="Free Installment"buttonText="Buy Now" />
            </Grid>
      </Grid>
        </Container>
        <Container className="customers">
            <Typography variant="h4" component='div' id="customers">What our Customers Have to Say</Typography>
            <Typography variant="p" component='div' id="customers_text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Typography>
        </Container>
        </>
    )
}