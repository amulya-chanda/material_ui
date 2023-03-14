import React,{useState} from 'react';
import Main from './Main';
import './App.css';
import ThemeContext, {themes} from "./components/ThemeContext";
function App() {
  const [theme,settheme]=useState(themes.light)
  const Toggletheme=()=>{
    theme===themes.light?settheme(themes.dark):settheme(themes.light);
  }
    return(
      <>
      <button id="change_theme"onClick={Toggletheme}>change theme</button>
      <ThemeContext.Provider value={theme}>
      <Main/>
      </ThemeContext.Provider>
      </>
    )
}
export default App;
