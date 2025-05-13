import "./style.css"

export const Bulb = (props) => {
    const bulbClass = props.on === true ? "bulb--on" : "bulb";

    return (
            <div className = {bulbClass}></div>   
    )
}