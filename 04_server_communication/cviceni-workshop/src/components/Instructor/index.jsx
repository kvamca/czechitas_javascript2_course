import "./style.css"

export const Instructor = (props) => {
    return (
        <>
            <p><h3>Jméno instruktora:</h3> {props.InstructorName}</p>
            <p><h3>Jméno instruktora:</h3> {props.instructorEmail}</p>
            <br />
            <img src={props.instructorAvatar} alt={props.InstructorName} />
        </>
    )
} 