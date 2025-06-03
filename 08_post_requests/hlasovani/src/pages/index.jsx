import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

document.querySelector("#root").innerHTML = render(
  <div className="container">
    <h1>Hlasování</h1>
    <form id="form">
      <button type="submit">Hlasuj</button>
    </form>
  </div>
);

const form = document.querySelector("#form");

const onSubmit = async (event) => {
  event.preventDefault();

  const response = await fetch("https://hlasovani.czechitas.dev/api/poll/4", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Hanka",
      option: 5,
    }),
  });

  if (response.ok) {
    alert("Hlas ulozen");
  } else {
    alert("Hlas se nepodarilo ulozit.");
  }
};

form.addEventListener("submit", onSubmit);
