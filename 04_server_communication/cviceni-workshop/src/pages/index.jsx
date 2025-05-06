import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import {WorkshopIntro} from "../components/WorkshopIntro"
import {Venue} from "../components/Venue"
import {Instructor} from "../components/Instructor"

const response = await fetch("http://localhost:4000/api/workshops/0");
const json = await response.json();

console.log(json);

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1 className="title">✨ Tohle je můj workshop ✨</h1>
    </header>
    <WorkshopIntro title = {json.data.title} description = {json.data.description}/>
    <br />
    <Venue venueName = {json.data.venue.name} venueStreet = {json.data.venue.street}/>
    <br />
    <Instructor InstructorName = {json.data.instructor.name} instructorEmail = {json.data.instructor.email} instructorAvatar = {json.data.instructor.avatar} />
  </div>
);
