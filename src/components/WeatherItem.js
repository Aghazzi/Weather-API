import React, { Component } from "react";
import clear from "../img/weather-icons/clear.svg";
import storm from "../img/weather-icons/mostlycloudy.svg";
export default class WeatherItem extends Component {
  render() {
    function celsius(f){
      return Math.round(f -273.15)
    }
  
    return(
      <section className="allday">
      <div>
          <p>{this.props.TimeALL[0]}</p>
          <img
              src={storm}
              alt="first"
              height="100px"
              width="100px"
          />
          <p>{celsius( this.props.TempALL[0])}&#8451;</p>
      </div>
      <div>
          <p>{this.props.TimeALL[1]}</p>
          <img
              src={storm}
              alt="first"
              height="100px"
              width="100px"
          />
          <p>{celsius( this.props.TempALL[1])}&#8451;</p>
      </div>
      <div>
          <p>{this.props.TimeALL[2]}</p>
          <img
              src={clear}
              alt="first"
              height="100px"
              width="100px"
          />
          <p>{celsius( this.props.TempALL[2])}&#8451;</p>
      </div>
      <div>
          <p>{this.props.TimeALL[3]}</p>
          <img
              src={clear}
              alt="first"
              height="100px"
              width="100px"
          />
          <p>{celsius( this.props.TempALL[3])}&#8451;</p>
      </div>
      <div>
          <p>{this.props.TimeALL[4]}</p>
          <img
              src={clear}
              alt="first"
              height="100px"
              width="100px"
          />
          <p>{celsius( this.props.TempALL[4])}&#8451;</p>
      </div>
      <div>
          <p>{this.props.TimeALL[5]}</p>
          <img
              src={clear}
              alt="first"
              height="100px"
              width="100px"
          />
          <p>{celsius( this.props.TempALL[5])}&#8451;</p>
      </div>
      <div>
          <p>{this.props.TimeALL[6]}</p>
          <img
              src={storm}
              alt="first"
              height="100px"
              width="100px"
          />
          <p>{celsius( this.props.TempALL[6])}&#8451;</p>
      </div>
  </section>
    );
  }
}

