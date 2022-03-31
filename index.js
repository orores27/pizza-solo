//déclaration des variables//declaration of variables
let typePizza = "fromage";
let prix;
let reduction;
let nbrPizza= 11;

//on définit le type de pizza et son prix// definition type of pizza and his price with "if/else" but we give up this method and we choose the switch methob just after//
//if (typePizza === "reine") {
  //prix = 10;
//} else if (typePizza === "calzone") {
//  prix = 8;
//} else if (typePizza === "fromage") {
  //prix = 12;
//}

//on teste le SWITCH pour le type de pizza et son prix// this is the switch method for determinate pizza's price//
switch (typePizza) {
    case "reine":
        prix = 10;
        break;
    case "calzone":
        prix =8;
        break;
    case "fromage":
        prix =12;
        break;
    default:
        prix =10;
}

// on teste le SWITCH pour la remise effectuée; Ce n'est pas faisable.// I test to use the switch method but it's not possible when whe have different values like "<=";">=" etc//
// switch (nbrPizza) {
//     case nbrPizza >= 5:
//          reduction = 2;
//         break;
//     case nbrPizza > 10:
//         reduction = 5;
//         break;    
//     default: 
//     reduction = 0;
// }



//on définit la remise effectuée// I definate the discount/ I keep this way because with switch method I have to declinate every number of pizza : it's too longer, it has any sense//
if (nbrPizza >= 5 && nbrPizza < 10){
  reduction = 2;
} else if (nbrPizza > 10){
  reduction = 5;
} else if (nbrPizza < 5){
    reduction = 0;
}

//on déclare le total de la commande et on le calcul//I declare the total order
let total = nbrPizza * prix - reduction;

//affichage des variables dans le HTML//It's the display's HTML page
document.querySelector("#type").innerHTML = `Vous avez choisi une pizza ${typePizza}`;
document.querySelector("#prix").innerHTML = `Prix unitaire : ${prix} €`;
document.querySelector("#réduction").innerHTML = `Votre remise est de : ${reduction}€`;
document.querySelector("#total").innerHTML = `Votre total est de : ${total}€`;

//affichage du message de remerciement// This is the display message for thanks// I use the "if/else" method and I keep it because I don't use the sitch method
let message;

if (nbrPizza >= 5 && nbrPizza < 10){
      message = "Merci d'avoir commandé chez galère pizza ;=)";
  } else if (nbrPizza > 10){
     message = "Vous allez vous régaler !";
   } else if (nbrPizza < 5){
       message = none;
   } 

 document.querySelector("#message").innerHTML = message;
