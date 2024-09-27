import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city" />
        <input type="submit" value="search" className="btn btn-primary" />
      </form>
      <h1>New york</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudly</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src=" https://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
          6°c
        </div>
        <div className="col-6">
          <ul>
            <li>percipitation: 6%</li>
            <li>Humidity: 70%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
