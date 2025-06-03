import { render } from '@czechitas/render';
import { ShopItem } from '../components/ShopItem';
import '../global.css';
import './index.css';

const response = await fetch('https://nakupy.czechitas.dev/api/mon');
const list = await response.json();

const HomePage = () => (
  <>
    <div className="banner"></div>
    <div className="container">
      <form className="newitem-form">
        <label htmlFor="input-name">Položka</label>
        <input id="input-name" type="text" />
        <label htmlFor="input-amount">Množství</label>
        <input id="input-amount" type="text" />
        <label htmlFor="input-unit">Jednotka</label>
        <input id="input-unit" type="text" />
        <button className="btn-add" type='submit'>Přidat</button>
      </form>
      <div className="shoplist">
        {list.map((item) => (
          <ShopItem 
            key={item.id}
            id={item.id}
            name={item.product}
            amount={item.amount + ' ' + item.unit}
            bought={item.done}
          />
        ))}
      </div>
    </div>
  </>
);

document.querySelector('#root').innerHTML = render(<HomePage />);

const form = document.querySelector('.newitem-form');
const itemInput = form.querySelector('#input-name');
const amountInput = form.querySelector('#input-amount');
const unitInput = form.querySelector('#input-unit');
const btnsDelete = document.querySelectorAll('.btn-delete');

const onSubmit = async (event) => {
  event.preventDefault();

const input = {
    product: itemInput.value,
    amount: Number(amountInput.value),
    unit: unitInput.value,
    done: false
  }
const response = await fetch('https://nakupy.czechitas.dev/api/mon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    alert('Položku se nepodařilo přidat.');
  }
  window.location.reload();
}

const handleDelete = async (event) => {

      const id = event.target.dataset.id;
      const response = await fetch(`https://nakupy.czechitas.dev/api/mon/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        window.location.reload();
      } else {
        alert('Položku se nepodařilo smazat.');
      }
    };
  


form.addEventListener('submit', onSubmit);
btnsDelete.forEach((button) => {
  button.addEventListener('click', handleDelete);
});