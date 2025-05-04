import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import {HomePage} from '../components/HomePage';

document.querySelector('#root').innerHTML = render(
  <HomePage title="Muj nadpis stranky" user="Kamila" year="2025" content = "Muj obsah stranky"/>
);
