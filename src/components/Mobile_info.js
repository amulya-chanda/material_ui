import React from "react";
import { Grid} from "@mui/material";
import {Mobile_data} from "../common_components/Mobile_data";
import device from "../assets/device.jpg";
import  cube from "../assets/cube.jpg";
import ratina from "../assets/ratina.jpg";
import tickbox from "../assets/tickbox.jpg";
import mobile1 from "../assets/mobile1.jpg";
import love1 from "../assets/love1.jpg";
export const Mobile_info=()=>{
    return(
        <>
        <Grid container>
                <Grid item xs={4}>
                    <Mobile_data src={device} heading="Use on Any Device" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"/>
                </Grid>
                <Grid item xs={4}>
                <Mobile_data src={cube} heading="Material Design " description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"/>
                    </Grid>
                    <Grid item xs={4}>
                    <Mobile_data src={ratina} heading="Retina Ready" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"/>
                    </Grid>
                    <Grid item xs={4}>
                    <Mobile_data src={tickbox} heading="W3c Valid Code" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"/>
                    </Grid>
                    <Grid item xs={4}>
                    <Mobile_data src={mobile1} heading="Fully Responsive" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"/>
                    </Grid>
                    <Grid item xs={4}>
                    <Mobile_data src={love1} heading="Browser Compatibility" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"/>
                    </Grid>
        </Grid>
        {/* <Container className="mobile_info"> */}
            {/* <Grid container className="contents">
                imggee
                 <Grid xs={2}>
                    <Mobile_data src={device} heading="Use on Any Device" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr" />
                </Grid> 
            </Grid> */}
        {/* </Container> */}
        </>
    )
}