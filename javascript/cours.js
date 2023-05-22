/*
Script d'affichage pour le document cours.html
*/

function append(parent, element) {
    return parent.appendChild(element);
}

const cours = document.getElementById("tousLesCours");
console.log(cours);
const url = "http://localhost:8080/ords/echecsProDB/cours";

fetch(url)
    .then((resultat) => resultat.json())
    .then(function (data) {
        let tousLesCours = data.items;
        return tousLesCours.map(function (chaqueCours) { // pour chaque cours
            let li = document.createElement("li");
            let span = document.createElement("span");
            span.innerHTML = `ID : ${chaqueCours.id_cours} | Titre : ${chaqueCours.titre}`;
            append(li, span);
            append(cours, li);
        })
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    })