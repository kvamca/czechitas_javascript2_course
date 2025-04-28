import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import {Header} from "../components/Header"
import {Footer} from "../components/Footer"
import {MainBody} from "../components/MainBody"


const HomePage = () => {
  return(
    <>
    <Header title="Kamčina stránka"/>
    <MainBody content="This is content"/>
    <Footer author="Kamča"/>
    </>
  )
}

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <HomePage />
  </div>
);
