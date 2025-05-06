const response = await fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
const data = await response.json();

document.body.innerHTML += `
<p>Východ slunce: ${data.results.sunrise}</p>
<p>Soumrak slunce: ${data.results.sunset}</p>
<p>Východ slunce: ${data.results.sunrise}</p>
`;