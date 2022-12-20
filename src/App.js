import React, { Component } from "react";
import Search from "./components/Search";
import MainWeather from "./components/MainWeather";
// import storm from "../src/img/weather-icons/mostlycloudy.svg";
import WeatherItem from "./components/WeatherItem";
// import clear from "../src/img/weather-icons/clear.svg";
import "./App.css";
import fakeWeather from "./fakeWeatherData.json"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           fakeWeather
        };
    }
    render() {
        function TimeDay(fakeWeather){
            let Time=[]
            for (let i = 5; i <=11; i++){
               Time.push(fakeWeather.list[i].dt_txt.slice(11,16))
            }
            return Time
        }
        function Temperature(fakeWeather){
            let temp=[]
            for (let i = 5; i <=11; i++) {
                temp.push(fakeWeather.list[i].main.temp) 
            }
            return temp
        }
      
        return (
            <div className="app">
                <Search></Search>
                <main className="app_main">
                <MainWeather 
         Weather={this.state.fakeWeather.list[5].weather[0].description} Min={(this.state.fakeWeather.list[5].main.temp_min -273.15).toFixed()} Max={(this.state.fakeWeather.list[5].main.temp_max -273.15).toFixed()}
           humidity={this.state.fakeWeather.list[5].main.humidity} pressure={this.state.fakeWeather.list[5].main.pressure}
        />
                <WeatherItem  TimeALL={TimeDay(this.state.fakeWeather)} TempALL={Temperature(this.state.fakeWeather)}/>
                </main>
            </div>
        );
    }
}

export default App;
