
const rangee1 = [" A ", " B ", " C ", " D ", " E ", " F "]
const rangee2 = [" G ", " H "," I "," J "," K "," L "]
//Dans un langage POO, il faudrait mettre ces constantes en public et les ranger dans une classe



class Case {
    constructor(lettre, nbGraines) {
        this.lettre = lettre;
        this.nbGraines = nbGraines;
    }
    
    //méthode pour afficher une case dynamiquement mais cela ne peut pas marcher pour la construction visuelle du tableau. Inutilisée.
    displayCase(lettre, nbGraines) {
        this.lettre = lettre;
        this.nbGraines = nbGraines;
        console.log(` ${lettre} \n(${nbGraines})`)
    }
}


//En fait cette classe Rangee est déjà le territoire, donc aps besoind e l'encapsuler dans une classe Territoire comme expliqué plus bas. Ce territoire pourrait même être directeemnt la classe Joueur, sauf si on décide de distribuer les fonctionnalités et d'avoir une classe Territoire qui ne s'occupe que de l'affichage, et une classe JOueur qui prend cette classe Territoire ainsi que des données de jeu comme le nb de points gagnés etc.
class Rangee extends Case {
    constructor(rangee) {
        super(null, 0);
        //nbGraines mis à 0 par défaut mais cela doit être dynamique.
        this.rangee = rangee;

    }

    createRangeeLettres() {
        let rang = ""
        for (let i = 0; i < this.rangee.length ; i ++) {
            rang += this.rangee[i];
            }
        return rang
    }
    createRangeeValeurs() {
        let rang = ""
        // let nbGraines = 0
        for (let i = 0; i < this.rangee.length ; i ++) {
            rang += `(${this.nbGraines})`
            }
        return rang
    }


    //refactoriser avec des RegEx ou des variables ? une seule fonction devrait suffire au lieu de 2
    displayRangee1() {
        const rangLettres = this.createRangeeLettres();
        const rangValeurs = this.createRangeeValeurs();
        console.log(rangLettres)
        console.log(rangValeurs)
    }
    displayRangee2() {
        const rangLettres = this.createRangeeLettres();
        const rangValeurs = this.createRangeeValeurs();
        console.log(rangValeurs);
        console.log(rangLettres);
    }
}







//résultat. ça devrait être une fonction display mise dans une classe Plateau mais pas eu el temps.
let Rangée1 = new Rangee(rangee1)
let Rangée2 = new Rangee(rangee2)

Rangée1.displayRangee1()
Rangée2.displayRangee2()




//Globalement, pour initialiser le jeu, il faut que chaque territoire du joueur soit un objet du style
// territoire = {
//     {"rangéeLettres" : createRangeeLettres() },
//     {"rangéeChiffres" : createRangeeChiffres() }
// }
//Ensuite, ces rangées doivent être gardées en mémoire dans les objets qui se mettront à jour.
// Il faut faire ça dans une classe au lieu d'un objet.

// Les rangéesChiffres doivent être reliées au Lettres, afin de pouvoir désigner une case (case A : modifier valeur pour rajouter ou enlever des graines)
// La méthode pour créer un territoire doit être plutôt une interface ou une classe abstraite, car visuellement les territoires nord et sud sont inversés et cela nécéssite des 
// //méthodes similaires mais avec un code structuré légerement différemment. 
// En gros, pour le joueur1, il faut faire rangéeLettres puis rangéeChiffres, et joueur2 rangéeChiffres puis rangéeettres. 

// Une fois que le plateau est installé visuellement avec chaque lettre reliée à une valeur, on pourra créer des classes Joueur qui étendent la clase territoire.
// Une classe joueur possède un territoire, un nombre de points, un nombre de graines en main et peut-être d'autres choses, je ne me suis aps penchée sur la logique. 

// Il faut aussi voir comment faire pour qu'un tour puisse tourner dans le bon sens, passer sur le territoire 1, puis 2, puis 1 etc.
// Tout ça c'est de la logique de jeu, et j'ai rien implémenté de tout ça puisque c'est déjà infiniment long de revenir à de la POO en javascript
// pour créer un plateau de jeu qui puisse recevoir des valeurs dynamiques par la suite. 
// JavaScript n'est pas un langage 100% POO et je vois ses limites mais pas le temps d'aller me pencher sur de la syntaxe Python ou Java. 


//Refactorisation à faire, ainsi que meilleur nommage, mettre points-virgules etc
