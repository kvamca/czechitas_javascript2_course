
export const StudentList = (props) => {

    const studentsData = props.students.data
    const filterGrade = Number(props.filterGrade)

    let display = 'all'
    if(!isNaN(filterGrade)) {
        if(filterGrade != 0){
            display = filterGrade
        }
    }

    return(
        <>
            <strong>Seznam studentů: </strong> <br />
            {studentsData.map((student) => {
                if(display === 'all'){
                    return (
                        <div className="student" key={student.name+'-'+student.age}>
                            <div className="name">Jméno studenta: {student.name}</div>
                            <div className="age">Věk studenta: {student.age}</div>
                            <div className="grade">Třída: {student.grade}</div>
                        </div>
                    )
                }else{
                    if(student.grade === filterGrade){
                        return (
                            <div className="student" key={student.name+'-'+student.age}>
                                <div className="name">Jméno studenta: {student.name}</div>
                                <div className="age">Věk studenta: {student.age}</div>
                                <div className="grade">Třída: {student.grade}</div>
                            </div>
                        )
                    }
                }
            })}
        </>
    )
}