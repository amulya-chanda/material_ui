import React from 'react';
import { Header } from './components/Header';
import { Mobile } from './components/Mobile';
import { Footer } from './components/Footer';
import {Card} from "./components/Card";
import {Persons} from "./components/People_data";
import './App.css';
import Carousel from '@itseasy21/react-elastic-carousel';
import {createTheme,ThemeProvider,CssBaseline} from "@mui/material";
function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      },
    });
    return(
      <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      
    
      <Header/>
      <Mobile/>
      <Card/>
      <Carousel>
      <Persons/>
      <Persons/>
      <Persons/>
      </Carousel>
      <Footer/>
      </ThemeProvider>
      </>
    )
}

export default App;
