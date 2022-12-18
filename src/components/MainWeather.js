import React from "react";
import storm from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
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
            <h2>overcast clouds</h2>
            <h2 className="temperature">
                Temperature
                <span
                    style={{
                        fontWeight: "100",
                        paddingLeft: "10px",
                    }}
                >
                    {" "}
                    10&#176; to 11&#8451;
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
                78%{" "}
                <span
                    style={{
                        fontWeight: "bold",
                        paddingRight: "10px",
                        paddingLeft: "10px",
                    }}
                >
                    Pressure{" "}
                </span>{" "}
                1008.48
            </p>
        </section>
        );
    }
}
export default MainWeather;
