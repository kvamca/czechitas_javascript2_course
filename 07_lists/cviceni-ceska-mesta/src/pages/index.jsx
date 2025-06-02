import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import {City} from "../components/City"

import {cities} from "../cz-cities.js"

//const cityElements = cities.map(city => <div className="city">{city}</div>)

document.querySelector('#root').innerHTML = render(
  <div className="container" >

  {cities.map(city => 
  
  <City  
        key={city.name} 
        name={city.name} 
        population={city.population} 
        area={city.area} 
        district={city.district} 
        photo={city.photo}
  />)}

  </div>
);
