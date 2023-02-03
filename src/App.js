import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./app.css";
import {TiWeatherPartlySunny} from "react-icons/ti";
import BoxDiv from "./Component/BoxDiv";
function App() {
  const[city, setCity] = useState();
  const[days, setDays] = useState([]);
  const[AllData, setAllData] = useState({});
  const[changeText, setChangeText] = useState();
  // const inputRef = useRef();
  const getData = (cityName) => {
  
     axios.get("https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&APPID=da8e5846ada207c2e3915254f4481f79")
          .then((response) => {
      
            if (response.status === 200) {
              setAllData(response);
            
              
            return true;
           } else{
          return false;
           }
          });
        
  }
  // useEffect(() => {
  //   let cityNames = document.getElementById("textBar").value;
  //   if(isEnter){
  //      getData(cityNames);   
  //   }},[isEnter]);


  const handleEnter =async (e)=>{
    if(e.key === "Enter"){
 
      let cityNames = document.getElementById("textBar").value;
      if(/^[a-zA-ZäöüÄÖÜß ]+$/.test(city)){
    
      if (await  getData(cityNames)){
         
      }
    }
        
    
    }
  }




  // const WeatherBoxes = () => {
  //   const weatherBoxes = this.state.days.slice(1).map(day => (
  //     <li>
  //       <WeatherBox {...day} />
  //     </li>
  //   ));

  //   return <ul className='weather-box-list'>{weatherBoxes}</ul>;
  // };

  return (
    <>
    <div className="container"> 
         <div className="header"> <TiWeatherPartlySunny />  Weather App
         <input id="textBar" placeholder="Enter City Name....." type="text" value={changeText} onChange={(e)=>setChangeText(e.target.value)} onKeyPress={handleEnter}/> 
         <BoxDiv state={AllData}/>
         </div>
      </div>
    
    </>
  );
}

export default App;
