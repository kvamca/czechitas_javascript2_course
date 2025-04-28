import { render } from '@czechitas/render';
import { Header } from "../components/Header";
import mouseImg from "../img/mouse.jpg";
import elephantImg from "../img/elephant.jpg";

import '../global.css';
import './index.css';

const name1 = 'Silvestr';
const image1 = mouseImg;
const text1 = 'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.';
const name2 = 'Ctirad';
const image2 = elephantImg;
const text2 = 'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.';


const Silvestr = () => {
  return (
    <div className="plushy">
      <img className="plushy__image" src={image1} />
      <h2 className="plushy__name">{name1}</h2>
      <p className="plushy__text">{text1}</p>
    </div>
  );
}
const Ctirad = () => { 
return (
    <div className="plushy">
      <img className="plushy__image" src={image2} />
      <h2 className="plushy__name">{name2}</h2>
      <p className="plushy__text">{text2}</p>
    </div>
);
}



document.querySelector('#root').innerHTML = render(
<>


<Header />
<h1>Plyšáci</h1>
<div className="plushies">
  <Silvestr />
  <Ctirad />
</div>
</>

);
