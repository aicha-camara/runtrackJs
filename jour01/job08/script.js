function sommeNombresPremiers(num1, num2) {
    function valide(nombre) {
        if (nombre <= 1) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(nombre); i++) {
            if (nombre % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Vérifie si num1 et num2 sont premiers et retourne leur somme si c'est le cas
    if (valide(num1) && valide(num2)) {
        resultat = num1 + num2
        console.log(resultat)
    } else {
        console.log("Le calcul est pas possible");
    }
}