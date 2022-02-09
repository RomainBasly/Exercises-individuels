const nom = prompt("Quel est ton petit nom?");
const presentation = `bonjour, ${nom}`;
const h2 = document.createElement('h2');
document.body.append(h2);
const h1 = document.getElementById('#h1');

h2.textContent = presentation;