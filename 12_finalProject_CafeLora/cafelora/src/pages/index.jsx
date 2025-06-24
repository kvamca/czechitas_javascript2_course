import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import {Header} from "../components/Header/header.jsx"
import {Banner} from "../components/Banner/banner.jsx"
import {Menu} from "../components/Menu/menu.jsx"
import {Gallery} from "../components/Gallery/gallery.jsx"
import {Contact} from "../components/Contact/contact.jsx"
import {Footer} from "../components/Footer/footer.jsx"


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header id="domu"/>
    <main>
      <Banner />
      <Menu id="menu"/>
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