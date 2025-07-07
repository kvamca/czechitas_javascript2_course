import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import {Header} from "../components/Header/header"
import {Footer} from "../components/Footer/footer"
import {Order} from "../components/Order/order"

const getDrinks = async () => {
  const response = await fetch(`http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image`);
  const json = await response.json();
  return json.data;
}
const orderedDrinks = await getDrinks();

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false}/>
      <Order items={orderedDrinks}/>
      <Footer />
    </div>
  </div>
);
