export const Intro = (props) => {
    return (
        <div className="intro">
        <h2>{props.heading}</h2>
        <p>
        {props.text}
        </p>
      </div>
);
}