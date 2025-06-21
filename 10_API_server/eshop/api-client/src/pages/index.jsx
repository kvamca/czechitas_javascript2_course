import { render } from '@czechitas/render';
import { HomePage } from '../components/HomePage';
import '../global.css';
import './index.css';

const responseProducts = await fetch('http://localhost:4000/api/products');
const productsData = await responseProducts.json();
const products = productsData.data;


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <HomePage products={products}/>
  </div>
);
