import React from "react";
import storm from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class AllWeather extends React.Component {
    state = {
        input: "",
    };

    render() {
        return (
            <section className="allday">
                        <div>
                            <p>03:00</p>
                            <img
                                src={storm}
                                alt="first"
                                height="100px"
                                width="100px"
                            />
                            <p>8&#8451;</p>
                        </div>
                        <div>
                            <p>06:00</p>
                            <img
                                src={storm}
                                alt="first"
                                height="100px"
                                width="100px"
                            />
                            <p>9&#8451;</p>
                        </div>
                        <div>
                            <p>09:00</p>
                            <img
                                src={clear}
                                alt="first"
                                height="100px"
                                width="100px"
                            />
                            <p>14&#8451;</p>
                        </div>
                        <div>
                            <p>12:00</p>
                            <img
                                src={clear}
                                alt="first"
                                height="100px"
                                width="100px"
                            />
                            <p>17&#8451;</p>
                        </div>
                        <div>
                            <p>15:00</p>
                            <img
                                src={clear}
                                alt="first"
                                height="100px"
                                width="100px"
                            />
                            <p>18&#8451;</p>
                        </div>
                        <div>
                            <p>18:00</p>
                            <img
                                src={clear}
                                alt="first"
                                height="100px"
                                width="100px"
                            />
                            <p>16&#8451;</p>
                        </div>
                        <div>
                            <p>21:00</p>
                            <img
                                src={storm}
                                alt="first"
                                height="100px"
                                width="100px"
                            />
                            <p>13&#8451;</p>
                        </div>
                    </section>
        );
    }
}
export default AllWeather;
