import React, { Component } from "react";
import Search from "./components/Search";
import MainWeather from "./components/MainWeather";
import AllWeather from "./components/AllWeather.js";
import FakeWeather from "../src/data/FakeWeather.json";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            workPlease: FakeWeather,
        }
    }

    fetchData = (e, n) => {
        e.preventDefault();
        let fetchData=(`http://api.openweathermap.org/data/2.5/forecast?q=${n}&cnt=8&units=metric&appid=e6ae59da57e3433390c99c6ca26571eb`)
        fetch(fetchData)
        .then(res => res.json())
        .then(data => {console.log(data); this.setState({ workPlease: data }); this.setState({ isLoaded: true })})
    }
    render() {
            return (
                <div className="app">
                    <Search event={this.fetchData}/>
                    <main className="app_main">
                        {this.state.isLoaded && 
                            <MainWeather Data={this.state.workPlease.list[0]} img={this.state.workPlease.list[0].weather[0].main.toLowerCase()}/>}
                        <section className="allday">
                            {this.state.isLoaded && 
                                <AllWeather
                                    time={this.state.workPlease.list[1].dt_txt.slice(11, 16)}
                                    img={this.state.workPlease.list[1].weather[0].main.toLowerCase()}
                                    temp={(this.state.workPlease.list[1].main.temp).toFixed()}>
                                    </AllWeather>}
                            {this.state.isLoaded && 
                                <AllWeather
                                    time={this.state.workPlease.list[2].dt_txt.slice(
                                        11,
                                        16
                                    )}
                                    img={this.state.workPlease.list[2].weather[0].main.toLowerCase()}
                                    temp={(
                                        this.state.workPlease.list[2].main.temp
                                    ).toFixed()}
                                ></AllWeather>
                            }
                            {this.state.isLoaded && 
                                <AllWeather
                                    time={this.state.workPlease.list[3].dt_txt.slice(
                                        11,
                                        16
                                    )}
                                    img={this.state.workPlease.list[3].weather[0].main.toLowerCase()}
                                    temp={(
                                        this.state.workPlease.list[3].main.temp 
                                    ).toFixed()}
                                ></AllWeather>
                            }
                            {this.state.isLoaded && 
                                <AllWeather
                                    time={this.state.workPlease.list[4].dt_txt.slice(
                                        11,
                                        16
                                    )}
                                    img={this.state.workPlease.list[4].weather[0].main.toLowerCase()}
                                    temp={(
                                        this.state.workPlease.list[4].main.temp 
                                    ).toFixed()}
                                ></AllWeather>
                            }
                            {this.state.isLoaded && 
                                <AllWeather
                                    time={this.state.workPlease.list[5].dt_txt.slice(
                                        11,
                                        16
                                    )}
                                    img={this.state.workPlease.list[5].weather[0].main.toLowerCase()}
                                    temp={(
                                        this.state.workPlease.list[5].main.temp 
                                    ).toFixed()}
                                ></AllWeather>
                            }
                            {this.state.isLoaded && 
                                <AllWeather
                                    time={this.state.workPlease.list[6].dt_txt.slice(
                                        11,
                                        16
                                    )}
                                    img={this.state.workPlease.list[6].weather[0].main.toLowerCase()}
                                    temp={(
                                        this.state.workPlease.list[6].main.temp 
                                    ).toFixed()}
                                ></AllWeather>
                            }
                            {this.state.isLoaded && 
                                <AllWeather
                                    time={this.state.workPlease.list[7].dt_txt.slice(
                                        11,
                                        16
                                    )}
                                    img={this.state.workPlease.list[7].weather[0].main.toLowerCase()}
                                    temp={(
                                        this.state.workPlease.list[7].main.temp 
                                    ).toFixed()}
                                ></AllWeather>
                            }
                        </section>
                    </main>
                </div>
            );
        }
    }


export default App;
