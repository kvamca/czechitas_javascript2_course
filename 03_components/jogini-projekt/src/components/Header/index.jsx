import './style.css';

export const Header = (props) => {
    return (
    <header>
        <h1 className="site-title">{props.title}</h1>
        <nav>
        <a href="#">domů</a>
        <a href="#">lekce</a>
        <a href="#">náš tým</a>
        <a href="#">události</a>
        <a href="#">kontakt</a>
        </nav>
    </header>
);
}