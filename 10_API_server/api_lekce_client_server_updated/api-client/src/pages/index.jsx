import { render } from '@czechitas/render';
import { StudentList } from '../components/StudentList';
import '../global.css';
import './index.css';

const responseStudents = await fetch('http://localhost:4000/api/studenti');
const studentsData = await responseStudents.json();

const params = new URLSearchParams(window.location.search);
const filterGrade = params.get('grade');


const createStudent = (name, age, grade) => {

  if (name.length > 1 && age.length > 1 && grade.length > 0) {
    fetch('http://localhost:4000/api/studenti', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        age: age,
        grade: Number(grade),
      }),
    });

    location.reload()
  }else{
    alert('Prázdné pole!')
  }
}

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1>Webová aplikace - studenti</h1>
    <br />
    <StudentList students={studentsData} filterGrade={filterGrade}/>

    <div className='createStudent'>
      <input id="student_name" placeholder='jméno studenta' /> <br />
      <input id="student_age" placeholder='věk studenta' /> <br />
      <input type="number" id="student_grade" placeholder='třída studenta' /> <br />
      <button id="post-btn">Přidat studenta</button>
    </div>
  </div>
);

const postBtn = document.querySelector('#post-btn');
const studentName = document.querySelector('#student_name');
const studentAge = document.querySelector('#student_age');
const studentGrade = document.querySelector('#student_grade');

postBtn.addEventListener('click', () => {
  createStudent(studentName.value, studentAge.value, studentGrade.value)
});