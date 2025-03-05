import "./WeatherForecast.css"
const WeatherForecast = (props) => {
    return (
        <div className="weather">
        <h2>{props.weatherForecasts.day}</h2>
        <img src="" alt="" />
        <p><span>conditions: </span>{props.weatherForecasts.conditions}</p>
        <p><span>time: </span>{props.weatherForecasts.time}</p>
      </div>
      ); 
};
export default WeatherForecast;