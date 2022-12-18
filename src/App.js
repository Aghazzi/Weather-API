import React, { Component } from "react";
import storm from "../src/img/weather-icons/mostlycloudy.svg"
import clear from "../src/img/weather-icons/clear.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
       <header className="app_header">
        <input type="text" placeholder="Type in a city name" className="input_search"></input>
        <button className="search_button">FIND WEATHER</button>
       </header>
       <main className="app_main">
        <section className="image">
              <img src={storm} alt="strom_icone"/>
          <h2>overcast clouds</h2>
           <h2 className="temperature">Temperature<span style={{fontWeight:"100", paddingLeft:"10px"}}>   10&#176; to 11&#8451;</span></h2>
            <p className="pressure"><span style={{fontWeight:"bold", paddingRight:"10px"}}>Humidity </span> 78% <span style={{fontWeight:"bold", paddingRight:"10px", paddingLeft:"10px"}}>Pressure </span> 1008.48</p>
        </section> 
        <section className="allday">
         <div>
          <p>03:00</p>
          <img src={storm} alt="first"/>
          <p>8&#8451;</p>
         </div>
         <div>
            <p>06:00</p>
          <img src={storm} alt="first"/>
          <p>9&#8451;</p>
         </div>
           <div>
         <p>09:00</p>
          <img src={clear} alt="first"/>
          <p>14&#8451;</p>
         </div>
           <div>
         <p>12:00</p>
          <img src={clear} alt="first"/>
          <p>17&#8451;</p>
         </div>
           <div>
         <p>15:00</p>
          <img src={clear} alt="first"/>
          <p>18&#8451;</p>
         </div>
           <div>
         <p>18:00</p>
          <img src={clear} alt="first"/>
          <p>16&#8451;</p>
         </div>
           <div>
         <p>21:00</p>
          <img src={storm} alt="first"/>
          <p>13&#8451;</p>
         </div>
        </section>
         </main> 
    </div>
    );
  }
}

export default App;
