import { Container,Typography,Grid} from "@mui/material";
import React from "react";
import mobile from "../assets/mobile.svg";
import mobile_2 from "../assets/mobile_2.svg";
import mobile_3 from "../assets/mobile_3.svg";
import tick from "../assets/tick.png";
import mobile_4 from "../assets/mobile_4.svg";
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';  
import {Mobile_info} from "../components/Mobile_info";    
import "./Mobile.css";
export const Mobile=()=>{
    return(
        <>
        
            <Container className="mobile_container">
            
            <Grid  container className="mobile_data">
               
           <Grid className="background" item xs={6}>
               
                <img id="mobile_img"src={mobile} alt="pic"></img>
                
                </Grid>     
               <Grid item xs={6} >
                    <Typography variant='p' id="music" component={'div'}>Evalynn Music</Typography>
                    <Typography variant='h3' id="music_app"component={'div'} >Best Music App 2020</Typography>
                    <Typography variant='p' id="mobile_text"component={'div'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</Typography>
                    <button id="mobile_button" variant="contained"component={'div'}>Click To Watch Video</button>
                    <Container className="buttons">
                    <button id="play_store" variant="contained"component={'div'} ><AndroidIcon id="androidicon"/>Play Store</button>
                    <button id="apple" variant="contained"component={'div'} ><AppleIcon id="androidicon"/>App Store</button>
                    </Container>
              </Grid>
            </Grid> 
            <Container className="mobile_2">
            <Grid container className="mobile2">
                <Grid item xs={6}>
                    <Typography variant="h3" id="mobile2_heading" component={"div"}>App Features</Typography>
                    <Typography variant='p' id="mobile2_text"component={'div'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Typography>
                  
                        <Mobile_info/> 
                </Grid>
                <Grid className="mobile2_background"xs={6}>
                    <img id="mobile2"src={mobile_2} alt="pic"></img>
                </Grid>
                </Grid> 
            </Container>
            <Container className="mobile_3">
                <Grid container className="mobile3">
                    <Grid xs={6}>
                        <img id="mobile3"src={mobile_3} alt="pic"></img>
                    </Grid>
                    <Grid xs={6}>
                        <Typography variant="h3" id="mobile3_heading" component={"div"}>Great Product Analytics</Typography>
                        <Typography variant="p" id="mobile3_text" component={"div"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Typography>
                        <Typography variant="p" id="mobile3_text1" component={"div"}><img id="tick"src={tick} alt="pic"></img>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Typography>
                        <Typography variant="p" id="mobile3_text1" component={"div"}><img id="tick"src={tick} alt="pic"></img>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Typography>
                        <Typography variant="p" id="mobile3_text1" component={"div"}><img id="tick"src={tick} alt="pic"></img>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Typography>
                        <Typography variant="p" id="mobile3_text2" component={"div"}>Click to view more ></Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container className="mobile_3">
                <Grid container className="mobile_4">
                    <Grid className="mobile3_background" xs={6}>
                    <Typography variant="h3" id="mobile4_heading" component={"div"}>App Features</Typography>
                    <Typography variant="p" id="mobile4_text" component={"div"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</Typography> 
                   <Container>
                   <Grid container>
                    <Grid xs={3}>
                    <Typography variant="p" id="mobile4_text1" component={"div"}>Community </Typography>
                        </Grid>
                        <Grid xs={3}>
                    <Typography variant="p" id="mobile4_text1" component={"div"}>Self Service</Typography></Grid>
                    <Grid xs={3}>
                    <Typography variant="p" id="mobile4_text1" component={"div"}>Team Work</Typography>
                    </Grid> 
                    </Grid>
                    </Container>
                    <Typography variant="h3" id="mobile4_heading" component={"div"}>Great Product Analytics</Typography>
                        <Typography variant="p" id="mobile3_text" component={"div"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Typography>
                        <Typography variant="p" id="mobile3_text1" component={"div"}><img id="tick"src={tick} alt="pic"></img>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Typography>
                        <Typography variant="p" id="mobile3_text1" component={"div"}><img id="tick"src={tick} alt="pic"></img>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Typography>
                        <Typography variant="p" id="mobile3_text1" component={"div"}><img id="tick"src={tick} alt="pic"></img>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Typography>
                        <Typography variant="p" id="mobile3_text2" component={"div"}>Click to view more ></Typography>
                    </Grid>

                    <Grid className="mobile4_background"xs={6}>
                        <img id="mobile2"src={mobile_4} alt="pic"></img>
                    </Grid>
                </Grid>
            </Container>
            <Typography variant="h3" id="heading" component={"div"}>Our Services</Typography>
            <Typography variant="p" id="text" component={"div"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Typography>
             </Container>
            
        
        </>
    )
}