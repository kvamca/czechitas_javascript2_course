import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import {Header} from "../components/Header/header.jsx"
import {Banner} from "../components/Banner/banner.jsx"
import {Menu} from "../components/Menu/menu.jsx"
import {Gallery} from "../components/Gallery/gallery.jsx"
import {Contact} from "../components/Contact/contact.jsx"
import {Footer} from "../components/Footer/footer.jsx"

const fetchDrinks = async () => {
  const response = await fetch(`http://localhost:4000/api/drinks`);
  const json = await response.json();
  return json.data;
};

const drinks = await fetchDrinks();


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header id="domu"/>
    <main>
      <Banner />
      <Menu id="menu" drinks={drinks}/>
      <Gallery id="galerie"/>
      <Contact id="kontakt"/>
    </main>
    <Footer />
  </div>
);

const hamburgerMenu = document.querySelector(".nav-btn");
const mobileMenu = document.querySelector(".rollout-nav");
const itemMobileMenu = mobileMenu.querySelectorAll("a");

const toggleMobileMenu = () => {
mobileMenu.classList.toggle("nav-closed");
}

const hideMobileMenu = () => {
  if (!mobileMenu.classList.contains("nav-closed")) {
    mobileMenu.classList.add("nav-closed");
  }
}
hamburgerMenu.addEventListener("click", toggleMobileMenu)
itemMobileMenu.forEach((item) => {
  item.addEventListener("click", hideMobileMenu);
});

const allForms = document.querySelectorAll('form');

allForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const id = form.dataset.id;
    const isOrdered = form.dataset.ordered === "true";
    const response = await fetch(`http://localhost:4000/api/drinks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { op: "replace", path: "/ordered", value: (!isOrdered) }
      ]),
    });
    const data = await response.json();
    console.log(data);
    window.location.reload()
  });
});

