import "./style.css";

export const City = ({name, population, area, district, photo}) => {
    return (
        
        <div className="city"> 
        <h3 className ="city_name">{name}</h3>
        <div className="city_population">Population: {population}</div>
        <div className="city_area">City area: {area}</div>
        <div className="city_district">District: {district}</div>
        <img src={photo} />
        <br />
        </div>
        )
};