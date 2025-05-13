import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Estate} from '../components/Estate';

const location = window.location.pathname.replace('.html', '');
const response = await fetch(`https://apps.kodim.cz/daweb/trening-api/apis/realitka${location}`);
const json = await response.json();
console.log(json);


const sold = json.price > 20000000 ? false : true


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header />
    <Estate Property = {json} sold = {sold} contract = {{minimum: 10, unit: "year"}}/>
  </div>
);
