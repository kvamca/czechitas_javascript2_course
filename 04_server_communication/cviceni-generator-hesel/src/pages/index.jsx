import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import {StrongPassword} from "../components/StrongPassword"

const passwordLength = 12
const data = await fetch('https://www.psswrd.net/api/v1/password/?length='+passwordLength);
const json = await data.json();

console.log(json)

document.querySelector('#root').innerHTML = render(


  <div className="container">
    <h1>Password generator</h1>
    <StrongPassword password = {json.password} length = {json.password.length}/>
  </div>
);
