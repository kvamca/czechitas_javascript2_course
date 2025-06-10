import './style.css';

export const Link = ({ id, name, desc, type, url }) => {
    return (
        <div className="link">
            <h3 className="link__name">{name}</h3>
            <p className="link__desc">{desc}</p>
            <p className="link__type">{type}</p>
            <a className="link__url btn" href={url} target="_blank" rel="noopener noreferrer">
                Otevřít odkaz
            </a>
        </div>
    )
}