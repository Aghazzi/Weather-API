import React from "react";
import storm from "../img/weather-icons/mostlycloudy.svg"
import "./Search.css";
class MainWeather extends React.Component {
    state = {
        input: "",
    };

    render() {
        return (
            <section className="image">
            <img
                src={storm}
                alt="strom_icone"
                width="250"
                height="250"
            />
            <h2>{this.props.Weather}</h2>
            <h2 className="temperature">
                Temperature
                <span
                    style={{
                        fontWeight: "100",
                        paddingLeft: "10px",
                    }}
                >
                    {" "}
                    {this.props.Min}&#176; to {this.props.Max}&#8451;
                </span>
            </h2>
            <p className="pressure">
                <span
                    style={{
                        fontWeight: "bold",
                        paddingRight: "10px",
                    }}
                >
                    Humidity{" "}
                </span>{" "}
                {this.props.humidity}{" "}
                <span
                    style={{
                        fontWeight: "bold",
                        paddingRight: "10px",
                        paddingLeft: "10px",
                    }}
                >
                    Pressure{" "}
                </span>{" "}
                {this.props.pressure}
            </p>
        </section>
        );
    }
}
export default MainWeather;
