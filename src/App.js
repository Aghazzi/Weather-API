import React, { Component } from "react";
import Search from "./components/Search";
import MainWeather from "./components/MainWeather";
// import storm from "../src/img/weather-icons/mostlycloudy.svg";
import AllWeather from "./components/AllWeather.js";
// import clear from "../src/img/weather-icons/clear.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Karim",
        };
    }

    handleInputChange = (value) => {
        this.setState({ name: value });
    };

    render() {
        return (
            <div className="app">
                <Search></Search>
                <main className="app_main">
                    <MainWeather></MainWeather>
                    <AllWeather></AllWeather>
                </main>
            </div>
        );
    }
}

export default App;
