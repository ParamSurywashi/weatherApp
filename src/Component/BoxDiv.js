import React from 'react'
// import "/css/BoxDiv.css"
function BoxDiv(props) {
    // getDay = date => {
    //     let weekday = new Array(7);
    //     weekday[0] = 'Sunday';
    //     weekday[1] = 'Monday';
    //     weekday[2] = 'Tuesday';
    //     weekday[3] = 'Wednesday';
    //     weekday[4] = 'Thursday';
    //     weekday[5] = 'Friday';
    //     weekday[6] = 'Saturday';
    
    //     return weekday[new Date(date).getDay()];
    //   };
  console.log(props.state.data)
  return (
   <div className='weather-box'>
    
         {/* <h1>{props.state.date ? this.getDay(props.date) : ''}</h1> */}
        {/* <img
          src={
            props.icon
              ? require(`../images/${props.icon}.svg`)
              : require('../images/01d.svg')
          }
          alt='sun'
        /> */}
        <span className='temp'>{Math.round(props.temp - 273.15)}°C</span> 
      </div>
  )
}

export default BoxDiv