'use strict'

//*Vous devriez voir apparaître "Hello World !": bravo ! Vous venez de créer et exécuter votre premier programme !console.log("Hello world !")
//

//* 02 - String

// - Dans votre fichier, créez une constante `sentence`
// - Donnez lui la valeur `"My name is xxx"` avec votre nom à la place de "xxx"
// - Utilisez ensuite la fonction `console.log()` pour afficher la constante `sentence` dans la console
// - Lancez ensuite la commande pour exécuter le code
// *//
// const sentence = "My name is Emad"
// console.log(sentence) */


/* ## 03 - Concaténation

- Dans votre fichier, créez une constante `name`
- Donnez lui la valeur `"xxx"` avec votre nom à la place de "xxx"
- Avec des templates literals, afficher le texte “Nice to meet you xxx”, avec la valeur de la constante `name` à la place de “xxx”const Name= "Emad"

const sentence="Nice to meet you"
console.log(`${sentence} ${Name}`)*/

// ## 04 - String Length

// - Dans votre fichier, créez une const `sentence`
// - Donnez lui la valeur `"I'm a new text !"`
// - Afficher la longueur de `sentence`
// /*const sentence = "i'm a new text!"
// console.log(sentence.length)*/


// ## 05 - Replace

// - Dans votre fichier, créez une constante `food`
// - Donnez lui la valeur `"croissant is meh"`
// - Utilisez la méthode `.replace()` pour remplacer "meh" par "so good"
// - Afficher le résultat dans la console
/*const food = "croissant is meh"
console.log (food.replace("meh" , "good"))*/



// ## 06 - Up and Down

// - Créez une const `basic` contenant la valeur `"This is Cool"`
// - Créez une const `basicUp` contenant la version en majuscules de `basic`
// - Créez une const `basicDown` contenant la version en minuscules de `basic`
// - Faites apparaître les trois variables dans la console
// /*const basic = "This is cool"
// const basicUp = basic.toUpperCase()
// const basicDown =basicUp.toLowerCase()

// console.log(basic, basicUp, basicDown)*/

// ## 07 - Split

// - Créez une const `word` contenant la valeur `"banana"`
// - Créez une const `letters` contenant un tableau des lettres de `word`
// - Faites apparaître `letters` dans la console

// /*const word = "banana"
// const letters = word.split("")
// console.log(letters)*/

// ## 08 - Template

// - Créez une const `age` contenant la valeur `"xx"` en remplaçant "xx" par votre âge
// - Créez une const `template` contenant la phrase "I'm ___ years old" en utilisant une template literal et la variable `age`
// - Faites apparaître `template` dans la console
// /*const age ="18"
// const template =`I'm ${age} years old`
// console.log(template)*/

// ## ⭐ Bonus

// En guise de bonus aujourd'hui, on recommande de lire la documentation MDN sur les strings. C'est une bonne idée pour deux raisons :

// - Il faudra vous habituer à lire de la documentation alors autant commencer avec des concepts simples
// - Regardez bien la section "Méthodes" qui contient des choses qu'on a pas vues dans la leçon !
//     - N'hésitez pas a reproduire les exemples et a afficher leur résultat (par exemple, substring avec 1 ou 2 paramètres)
//     - Jouez avec l'échappement, essayer d'afficher une string avec deux lignes, un string mélangeant des guillemets simple et des guillemets doubles
//     - Créer une variable `changed` ayant pour valeur "Bonjour", utiliser la doc pour afficher `Banjaur`

// Pour la lire c'est par ici ⇒ [MDN - String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String)


/*const changed = "Bonjour"
console.log(changed.replaceAll("o" ,"a")) */
