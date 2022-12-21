import React from "react";

// import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
    state = {
        input: "",
    };

    render() {
        return (
            <header className="app_header">
                <form>
                    <input
                        type="text"
                        placeholder="Type in a city name"
                        onChange={(e) =>
                            this.setState({ input: e.target.value })
                        }
                        className="input_search"
                    ></input>
                    <button
                        onClick={(e) => this.props.event(e, this.state.input)}
                        className="search_button"
                    >
                        FIND WEATHER
                    </button>
                </form>
            </header>
        );
    }
}
export default Search;
