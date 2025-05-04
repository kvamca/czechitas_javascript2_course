import "./index.css"

export const Header = (props) => {
    return (
      <header>
        <h1>{props.title}</h1>
        <a href="/">Domů</a>
        <a href="/nakupy">Nákupy</a>
        <a href="/kalendar">Kalendář</a>
        <p>Přihlášený uživatel: {props.user}</p>
      </header>
    );
  };