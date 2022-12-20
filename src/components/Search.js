import React from "react";
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
                    className="input_search"
                ></input>
                <button className="search_button">FIND WEATHER</button>
                </form>
            </header>
        );
    }
}
export default Search;
