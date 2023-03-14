import { Grid, Typography,Container } from "@mui/material";
import React from "react";
import "./Footer.css";
import fb from "../assets/fb.png";
import email from "../assets/email.png";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';                       
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android'; 
export const Footer=()=>
{
    return(
        <>
        <Container className="bottom_container">
        <Container className="download">
            <Typography id="download"variant="h3" component='div'>Download Now !</Typography>
            <Typography id="download_text"variant="p" component='div'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore</Typography>
            <Container className="stores">
            <button id="play_store1" variant="contained"component={'div'} ><AndroidIcon/>Play Store</button>
            <button id="play_store1" variant="contained"component={'div'} ><AppleIcon/>App Store</button>
            </Container>
        </Container>
        <Container className="footer">
            <Grid container className="footer_contents">
                <Grid xs={3}>
                    <Typography variant="h6"id="footer_heading" component={'div'}>About Us</Typography>
                    <Typography variant="p" id="aboutus" component={'div'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing.</Typography>
                    <img id="fb"src={fb} alt="pic"></img>
                    <TwitterIcon id="fb"/>
                <InstagramIcon id="fb"/>
                <LinkedInIcon id="fb"/>
                </Grid>
                <Grid xs={3}>
                <Typography variant="h6"id="footer_heading" component={'div'}>Company</Typography>
                <Typography variant="p"id="about" component={'div'}>>About Us</Typography>
                <Typography variant="p"id="about" component={'div'}>>Services</Typography>
                <Typography variant="p"id="about" component={'div'}>>Team</Typography>
                <Typography variant="p"id="about" component={'div'}>>Pricing</Typography>
                <Typography variant="p"id="about" component={'div'}>>Project</Typography>
                </Grid>
                <Grid xs={3}>
                <Typography variant="h6"id="footer_heading" component={'div'}>Useful Links</Typography> 
                <Typography variant="p"id="about" component={'div'}>>Terms of Services</Typography>
                <Typography variant="p"id="about" component={'div'}>>Privacy Policy</Typography>
                <Typography variant="p"id="about" component={'div'}>>Documention</Typography>
                <Typography variant="p"id="about" component={'div'}>>Changelog</Typography>
                <Typography variant="p"id="about" component={'div'}>>Components</Typography>  
                </Grid>
                <Grid xs={3}>
                <Typography variant="h6"id="footer_heading" component={'div'}>Newsletter</Typography>
                <Typography variant="p"id="about" component={'div'}>Sign Up for the latest news</Typography>
                <Container className="email">
                    <img id="email"src={email} alt="pic"></img>
                    <input id="input"placeholder="Your Email"></input>
                </Container>
                <button id="subscribe">Subscribe</button>
                    </Grid>
                

            </Grid>
        </Container>
        </Container>
        </>
    )
}