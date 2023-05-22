
/*
Script d'affichage pour le document clubs.html
*/

function append(parent, element) {
    return parent.appendChild(element);
}

const club = document.getElementById("clubs");
console.log(club);
const url = "http://localhost:8080/ords/echecsProDB/clubs";

fetch(url)
    .then((resultat) => resultat.json())
    .then(function (data) {
        let clubs = data.items;
        return clubs.map(function (chaqueClub) { // pour chaque club
            let li = document.createElement("li");
            let span = document.createElement("span");
            let count = 0;
            span.innerHTML = `ID : ${chaqueClub.id_club} | Nom : ${chaqueClub.nom} | Propriétaire : ${chaqueClub.proprietaire}`;
            append(li, span);
            append(club, li);
        })
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
    })