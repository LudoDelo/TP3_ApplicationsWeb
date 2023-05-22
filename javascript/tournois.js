/*
Script d'affichage pour le document tournois.html
*/

function append(parent, element) {
    return parent.appendChild(element);
}

const tournoi = document.getElementById("tournois");
console.log(tournoi);
const url = "http://localhost:8080/ords/echecsProDB/tournois";

fetch(url)
    .then((resultat) => resultat.json())
    .then(function (data) {
        let tournois = data.items;
        return tournois.map(function (chaqueTournoi) { // pour chaque tournoi
            let li = document.createElement("li");
            let span = document.createElement("span");
            span.innerHTML = `ID : ${chaqueTournoi.id_tournoi} | Début : ${chaqueTournoi.date_debut} | Fin : ${chaqueTournoi.date_fin}`;
            append(li, span);
            append(tournoi, li);
        })
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    })