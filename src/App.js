import React, { Component } from "react";
import Search from "./components/Search";
import MainWeather from "./components/MainWeather";

import AllWeather from "./components/AllWeather.js";
import FakeWeather from "../src/data/FakeWeather.json";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Search></Search>
                <main className="app_main">
                    <MainWeather
                        Data={FakeWeather}
                        img={FakeWeather.list[4].weather[0].main.toLowerCase()}
                    ></MainWeather>
                    <section className="allday">
                        <AllWeather
                            time={FakeWeather.list[5].dt_txt.slice(11, 16)}
                            img={FakeWeather.list[5].weather[0].main.toLowerCase()}
                            temp={(
                                FakeWeather.list[5].main.temp - 273.15
                            ).toFixed()}
                        ></AllWeather>
                        <AllWeather
                            time={FakeWeather.list[6].dt_txt.slice(11, 16)}
                            img={FakeWeather.list[6].weather[0].main.toLowerCase()}
                            temp={(
                                FakeWeather.list[6].main.temp - 273.15
                            ).toFixed()}
                        ></AllWeather>
                        <AllWeather
                            time={FakeWeather.list[7].dt_txt.slice(11, 16)}
                            img={FakeWeather.list[7].weather[0].main.toLowerCase()}
                            temp={(
                                FakeWeather.list[7].main.temp - 273.15
                            ).toFixed()}
                        ></AllWeather>
                        <AllWeather
                            time={FakeWeather.list[8].dt_txt.slice(11, 16)}
                            img={FakeWeather.list[8].weather[0].main.toLowerCase()}
                            temp={(
                                FakeWeather.list[8].main.temp - 273.15
                            ).toFixed()}
                        ></AllWeather>
                        <AllWeather
                            time={FakeWeather.list[1].dt_txt.slice(11, 16)}
                            img={FakeWeather.list[1].weather[0].main.toLowerCase()}
                            temp={(
                                FakeWeather.list[1].main.temp - 273.15
                            ).toFixed()}
                        ></AllWeather>
                        <AllWeather
                            time={FakeWeather.list[2].dt_txt.slice(11, 16)}
                            img={FakeWeather.list[2].weather[0].main.toLowerCase()}
                            temp={(
                                FakeWeather.list[2].main.temp - 273.15
                            ).toFixed()}
                        ></AllWeather>
                        <AllWeather
                            time={FakeWeather.list[3].dt_txt.slice(11, 16)}
                            img={FakeWeather.list[3].weather[0].main.toLowerCase()}
                            temp={(
                                FakeWeather.list[3].main.temp - 273.15
                            ).toFixed()}
                        ></AllWeather>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
