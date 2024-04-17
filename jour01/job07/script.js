function jourTravaille(date) {
    var annee = date.getFullYear(); // Récupère l'année de la date spécifiée
    var mois = date.getMonth(); // Récupère le mois de la date spécifiée (les mois sont indexés à partir de 0)
    var jour = date.getDate(); // Récupère le jour du mois de la date spécifiée
    var jourSemaine = date.getDay(); // Récupère le jour de la semaine (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi)

    // Tableau des noms des mois
    var nomsMois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    if (
        (mois === 0 && jour === 1) || // 1er janvier
        (mois === 4 && jour === 1) || // 1er mai
        (mois === 4 && jour === 8) || // 8 mai
        (mois === 4 && jour === 30) || // 30 mai
        (mois === 6 && jour === 14) || // 14 juillet
        (mois === 7 && jour === 15) || // 15 août
        (mois === 9 && jour === 1) || // 1er novembre
        (mois === 10 && jour === 11) // 11 novembre
    ) {
        console.log("Le " + jour + " " + nomsMois[mois] + " " + annee + " est un jour férié");
    }
    // Vérifie si la date est un samedi (6) ou un dimanche (0)
    else if (jourSemaine === 6 || jourSemaine === 0) {
        console.log("Non, " + jour + " " + nomsMois[mois] + " " + annee + " est un week-end");
    }
    // Sinon, c'est un jour travaillé
    else {
        console.log("Oui, " + jour + " " + nomsMois[mois] + " " + annee + " est un jour travaillé");
    }
}

// Exemple d'utilisation de la fonction avec une date
var dateTest = new Date(2024, 0, 1); // 1er janvier 2024
jourTravaille(dateTest);
