export const StrongPassword = (props) => {
    return (
        <>
            <p>Vaše heslo je: {props.password}</p>
            <p>Délka hesla je: {props.length}</p>
        </>
    )
}