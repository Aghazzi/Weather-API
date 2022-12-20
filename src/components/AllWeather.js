/* eslint-disable default-case */
import React from "react";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import "./Search.css";
class AllWeather extends React.Component {
    state = {
        input: "",
    };

    render() {
        const imageSrc = (image) => {
            if (image === "clouds") return cloudy;
            else if (image === "clear") return clear;
            else if (image === "mostlycloudy") return mostlycloudy;
            else if (image === "partlycloudy") return partlycloudy;
            else if (image === "snow") return snow;
            else if (image === "storm") return storm;
            else if (image === "rain") return rain;
            else if (image === "fog") return fog;
            else if (image === "drizzle") return drizzle;
        };
        return (
            <div>
                <p>{this.props.time}</p>
                <img
                    src={imageSrc(this.props.img)}
                    alt={this.props.img}
                    height="100px"
                    width="100px"
                />
                <p>
                    {this.props.temp}
                    &#8451;
                </p>
            </div>
        );
    }
}
export default AllWeather;
