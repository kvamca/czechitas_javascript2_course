import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import {Link} from '../components/Link';

const response = await fetch('http://localhost:4000/api/links');
const list = await response.json();

console.log(list)

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <p>My app</p>
    <div>
    {list.data.map((link) => (
      <Link 
        key={link.id}
        id={link.id}
        name={link.name}
        desc={link.desc}
        type={link.type}
        url={link.url}
      />
    ))
    }
    </div>
  </div>
);