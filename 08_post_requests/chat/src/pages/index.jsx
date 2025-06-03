import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const messages = await fetch("https://czechichat.deno.dev/api/list-messages");
const data = await messages.json();

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1>Chat</h1>
    <form id="form">
      <label htmlFor="inputName">Jméno</label>
      <input id="inputName" type="text"/>
      <br />
      <label htmlFor="inputMessage">Zpráva</label>
      <input id="inputMessage" type="text"/>
      <br />
      <button>Send chat</button>
    </form>
    <br />
      <div className="messages-list">
        {data.messages.map((message) => (
          <div key={message.id}>
            <strong>{message.name}:</strong> {message.message}
            <div>Date: {message.date}</div>
            <br />
          </div>
          
))}
      </div>
  </div>
);

const form = document.querySelector("#form");

const onSubmit = async (event) => {
  event.preventDefault();

  const response = await fetch("https://czechichat.deno.dev/api/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: form.querySelector("#inputName").value,
      message: form.querySelector("#inputMessage").value,
    }),
  });

  if (response.ok) {
    alert("Hlas ulozen");
  } else {
    alert("Hlas se nepodarilo ulozit.");
  }
 
  form.querySelector("#inputMessage").value = ""; 
  window.location.reload();
};

form.addEventListener("submit", onSubmit);







 