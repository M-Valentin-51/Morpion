var tableau = [0 , 0 ,0,
                0 , 0 , 0,
                0 , 0 , 0]

/*
0,1,2-
3,4,5-
6,7,8-

0,3,6-
1,4,7-
2,5,8-

0,4,8-
2,4,6-
*/

var joueur = "X"
var gagner = false

document.getElementById('player').innerHTML = "joueur "+joueur

function jouer(id){

    var a = id.substr(3,1)
    
    if (tableau[a] == 0) {
        var div = document.getElementById('div'+a)
        div.innerHTML = ` <p>${joueur}</p>`
        tableau[a] = joueur
        var gagn = verif(joueur)
        if (gagn) {
            alert("le joueur "+joueur+" a gangée")
            document.location.reload()
        }
        if (tableau.indexOf(0) < 0) {
            alert("Personne n'as gagnée")
            document.location.reload()
        }
        if (joueur == "X") {
            joueur = "O"
        }else{
            joueur = "X"
        }
    }

    console.log(tableau);
    document.getElementById('player').innerHTML = "joueur "+joueur

}

function verif(j) {
    if (tableau[0] == j && tableau[1] == j && tableau[2] == j) {
        return true
    } 
    if (tableau[0] == j && tableau[3] == j && tableau[6] == j) {
        return true
    }    
    if (tableau[0] == j && tableau[4] == j && tableau[8] == j) {
        return true
    } 
    if (tableau[1] == j && tableau[4] == j && tableau[7] == j) {
        return true
    } 
    if (tableau[2] == j && tableau[4] == j && tableau[6] == j) {
        return true
    } 
    if (tableau[2] == j && tableau[5] == j && tableau[8] == j) {
        return true
    } 
    if (tableau[3] == j && tableau[4] == j && tableau[5] == j) {
        return true
    } 
    if (tableau[6] == j && tableau[7] == j && tableau[8] == j) {
        return true
    } 
}
