export const Venue = (props) => {
    return (
        <>
            <p><h3>Název místa:</h3> {props.venueName}</p>
            <p><h3>Ulice</h3> {props.venueStreet}</p>
        </>
    )
}