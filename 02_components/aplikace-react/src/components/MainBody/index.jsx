import "./style.css"

export const MainBody = (props) => {
    return (
      <main>
        <p>{props.content}. Everything is a component.</p>
      </main>
    );
  };