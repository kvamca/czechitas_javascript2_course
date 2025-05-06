export const WorkshopIntro = (props) => {
    return (
        <>
            <p><h3>Název workshopu:</h3> {props.title}</p>
            <p><h3>Popis workshopu:</h3> {props.description}</p>
        </>
    )
}