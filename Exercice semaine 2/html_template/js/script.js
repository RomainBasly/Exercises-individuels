const nom = prompt("Quel est ton petit nom?");
const presentation = `${nom}`;

function askName() {
    const h2 = document.createElement('h2');
    document.body.append(h2);
    const h1 = document.getElementById('#h1');
    document.body.innerHTML += `<h2> Coucou! ${presentation} </h2>`;
}
// h2.textContent = presentation;

const dateNaissance = prompt("Et plus précisément, quelle est ta date de naissance complète?", "YYYY-MM-JJ");

function askExactAge() {
    const dateNaissanceReelle = new Date(dateNaissance);
    const aujourdHui = new Date();
    const age = aujourdHui - dateNaissanceReelle;
    const ageReel = Math.floor(age / (1000 * 365 * 24 * 3600));

    const h3 = document.createElement('h3');
    document.body.append(h3);
    document.body.innerHTML += `<h3>Vous avez ${ageReel} ans.</h3>`;
}

askName(nom);
askExactAge(dateNaissance);