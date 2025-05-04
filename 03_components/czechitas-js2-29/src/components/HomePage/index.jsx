import {Header} from "../Header";
import {Footer} from "../Footer";
import {Main} from "../Main";
import "./index.css"

export const HomePage = (props) => {
    return (
      <>
        <Header title = {props.title} user = {props.user}/>
        <Main content = {props.content}/>
        <Footer year = {props.year}/>
      </>
    );
  };