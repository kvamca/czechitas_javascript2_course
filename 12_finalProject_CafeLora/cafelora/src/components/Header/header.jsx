import "./header.css"

export const Header = () => {
    return (
    <header id="domu">
      <div className="header__content container">
        <div className="site-logo"></div>

        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <a href="#domu">domů</a>
            <a href="#menu">menu</a>
            <a href="#galerie">galerie</a>
            <a href="#kontakt">kontakt</a>
          </nav>
        </div>

      </div>
    </header>
    )
}