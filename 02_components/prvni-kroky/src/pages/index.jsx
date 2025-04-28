import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const name = 'Kamčina';
const italicText = "intro";

const Header = () => (
<header>
  <h1>{name} stránka</h1>
</header>
)

document.querySelector('#root').innerHTML = render(
  <div className="container">
  <Header />
    <main>
      <p className={italicText}>Startovací šablona pro webovou aplikaci v JavaScriptu s JSX. Vytvořeno pomocí <a href="https://www.npmjs.com/package/create-kodim-app">create-kodim-app</a>.</p>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
