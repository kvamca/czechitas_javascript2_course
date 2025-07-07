import "./header.css"

export const Header = ({showMenu}) => {
    return (
    <header id="domu">
      <div className="header__content container">
        <div className="site-logo"></div>
        {showMenu ? (
          <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <a href="#domu">domů</a>
            <a href="#menu">menu</a>
            <a href="#galerie">galerie</a>
            <a href="#kontakt">kontakt</a>
          </nav>
        </div>
        ):(
          <nav className="inline-nav">
            <a href="/">Hlavní stránka</a>
          </nav>
        )}
      </div>
    </header>
    )
}