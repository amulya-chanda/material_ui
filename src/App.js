import React from 'react';
import { Header } from './components/Header';
import { Mobile } from './components/Mobile';
import { Footer } from './components/Footer';
//import { Mobile_contents } from "./common_components/mobile_contents";
import {Card} from "./components/Card";
import {Persons} from "./components/People_data";
import './App.css';
import Carousel from '@itseasy21/react-elastic-carousel'
function App() {
    return(
      <>
      <Header/>
      <Mobile/>
      {/* <Mobile_contents/> */}
      <Card/>
      <Carousel>
      <Persons/>
      <Persons/>
      <Persons/>
      </Carousel>
      <Footer/>
      </>
    )
}

export default App;
