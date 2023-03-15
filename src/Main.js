import React, { useContext } from "react";
import ThemeContext from "./components/ThemeContext";
import { Header } from './components/Header';
import { Mobile } from './components/Mobile';
import { Footer } from './components/Footer';
import {Card} from "./components/Card";
import {Persons} from "./components/People_data";
 import Carousel from 'react-material-ui-carousel'
 const Main=()=>{
  const theme=useContext(ThemeContext)
  return (
    <>
    <div  style={theme}>
    <Header/>
    <Mobile/>
    <Card/>
    <Carousel>
    <Persons/>
    <Persons/>
    <Persons/>
    </Carousel>
    <Footer/>
    </div>
    </>
  )
}
export default Main;