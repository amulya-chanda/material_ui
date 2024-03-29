import React from "react";
import { Container,Grid} from "@mui/material";
import {People} from "../common_components/People";
import person from "../assets/person.png";
import face2 from "../assets/face2.png";
import face3 from "../assets/face3.png";
import "./People_data.css";
export const Persons=()=>{
    return(
        <>
        <Container className="persons">
        
            <Grid container className="persons">
               
                <Grid xs={2.8} className="person">

            <People src={person} heading="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore" name="John Doe" role="Product Manager"/>
                </Grid>
                <Grid xs={2.8} className="person">   
            <People src={face2} heading="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore" name="Adams Smit" role="Product Manager"/>
            </Grid>
            <Grid xs={2.8} className="person">
                
            <People src={person} heading="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore" name="John Doe" role="Product Manager"/>
            </Grid>
            <Grid xs={2.8} className="person">

            <People src={face3} heading="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore" name="Jessica Hiche" role="Product Manager"/>
            </Grid>
            
            </Grid> 
        </Container>
        </>
    )
}
