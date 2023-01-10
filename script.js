


/**
 * Exercices 1
 */
console.log("-----------------Exercices 1---------------");

// 1- À l'aide d'une propriété DOM, récupérez le h1 et console.log.
// console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h1')[0]);

// 2- À l'aide des méthodes DOM, supprimez le dernier paragraphe de la <article> balise.
document.getElementsByTagName('p')[3].remove();

// 3- Ajoutez un écouteur d'événement qui changera la couleur d'arrière-plan du h2 en rouge, lorsqu'il est cliqué dessus.
document.getElementsByTagName('h2')[0].addEventListener('click', () => {document.getElementsByTagName('h2')[0].style.backgroundColor = "red" });

// 4- Ajoutez un écouteur d'événement qui masquera le h3 lorsqu'il est cliqué (utilisez la propriété display:none ).
document.getElementsByTagName('h3')[0].addEventListener('click', () => {document.getElementsByTagName('h3')[0].style.display = "none" });

// 5- Ajoutez un <button> au fichier HTML qui, une fois cliqué dessus, devrait mettre le texte de tous les paragraphes en gras.
let button = document.createElement('button');
button.setAttribute("type", "button");
button.setAttribute("id", "button");
button.textContent = "Cliquer ici";

document.getElementsByTagName('article')[0].appendChild(button);

document.getElementById('button').style.padding = '5px';
document.getElementById('button').style.color = 'blue';

document.getElementById('button').addEventListener('click', function(){
    let p = document.getElementsByTagName('p');
    for (const iterator of p) {
        iterator.style.fontWeight = 'bold';
    }
})

// 6- BONUS : Lorsque vous survolez le h1, définissez la taille de la police sur une taille de pixel aléatoire comprise entre 0 et 100. (Consultez cette documentation )
function entierAleatoire(min, max)
{
 return  parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

document.getElementsByTagName('h1')[0].addEventListener('mouseover', () => {document.getElementsByTagName('h1')[0].style.fontSize = `${entierAleatoire(0, 100)}px` });

// 7- BONUS : lorsque vous survolez le 2e paragraphe, il devrait s'estomper (consultez "fade css animation" sur Google)
document.getElementsByTagName('p')[1].addEventListener('mouseover', () => {
    document.getElementsByTagName('p')[1].animate({
        opacity: [1, 0, 1]
    }, 700).onfinish = () => dataElement.style.opacity = 1;
});



/**
 * Exercices 2
 */
 console.log("-----------------Exercices 2---------------");

// 1-Récupérez le formulaire et consolez-le.
let form = document.forms[0];
console.log(form);

// 2- Récupérez les entrées par leur identifiant et console.log les.
console.log(form.elements[0])
console.log(form.elements[1])
console.log(form.elements[2])

// 3- Récupérez les entrées par leur name attribut et console.log les.
console.log(form.elements.fname)
console.log(form.elements.lname)
console.log(form.elements.submit)

// 4- Lorsque l'utilisateur soumet le formulaire (c'est-à-dire submit écouteur d'événement)
    // utiliser event.preventDefault(), pourquoi ?
        // La méthode event.preventDefault() est utilisée pour empêcher l'action par défaut de l'événement de se produire

    // obtenir les valeurs des balises d'entrée, assurez-vous qu'ils ne sont pas vides,

    /** 
    créer une li valeur par entrée,
    puis ajoutez-les à un <ul class="usersAnswer"></ul>, sous le form.
    La sortie devrait être :
    */

    // code final
    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault();
      
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
      
        if (fname === '' || lname === '') {
            return false
        } else {
          const fnameItem = document.createElement('li');
          fnameItem.textContent = fname;
          const lnameItem = document.createElement('li');
          lnameItem.textContent = lname;
      
          const userList = document.querySelector('.usersAnswer');
          userList.appendChild(fnameItem);
          userList.appendChild(lnameItem);
        }
      });


/**
 * Exercices 3
 */
 console.log("-----------------Exercices 3---------------");
      
// 1- Déclarez une variable globale nommée allBoldItems.
let allBoldItems;

// 2- Créez une fonction appelée getBold_items() qui ne prend aucun paramètre. Cette fonction doit collecter tous les éléments en gras à l'intérieur du paragraphe et les affecter à la allBoldItemsvariable.
function getBoldItems() {
    allBoldItems = document.getElementsByTagName("strong");
    // console.log(allBoldItems)
    return allBoldItems;
}

// 3- Créez une fonction appelée highlight() qui change la couleur de tout le texte en gras en bleu.
function highlight() {
    for (let i = 0; i < getBoldItems().length; i++) {
        allBoldItems[i].style.color = "blue";
    }

}
  
// 4- Créez une fonction appelée return_normal() qui change la couleur de tout le texte en gras en noir.
function return_normal() {
    for (let i = 0; i < getBoldItems().length; i++) {
      allBoldItems[i].style.color = "black";
    }
}

// 5- Appelez la fonction highlight() sur mouseover (c'est-à-dire lorsque le pointeur de la souris est déplacé sur le paragraphe) et la fonction return_normal()sur mouseout (c'est-à-dire lorsque le pointeur de la souris est déplacé hors du paragraphe). Regardez cet exemple
let dd = document.getElementsByTagName('strong');
for (const iterator of dd) {
    iterator.addEventListener("mouseover", highlight)
}

for (const iterator of dd) {
    iterator.addEventListener("mouseout",  return_normal)
}


/**
 * Exercices 4
 */
 console.log("-----------------Exercices 4---------------");
      
 // 1- Écrivez un programme JavaScript pour calculer le volume d'une sphère. Utilisez le code ci-dessous comme base :
 document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let radius = document.getElementById('MyForm').radius;
    radius.setAttribute("value", "");
    let radiusValue = document.getElementById('MyForm').radius.value;
    console.log(radiusValue);

    let volume = document.getElementById('MyForm').volume;
    volume.setAttribute("value", "");

    const resultVolume = (4/3) * Math.PI * Math.pow(radiusValue, 3);
    document.getElementById('MyForm').volume.value = resultVolume
});


/**
 * Exercices 5
 */
console.log("-----------------Exercices 5 ---------------");

const element = document.querySelector('#my-element');

element.addEventListener('click', () => {
  // Change position x
  element.style.left = '200px';
});

element.addEventListener('mouseover', () => {
  // Change position y
  element.style.top = '100px';
});

element.addEventListener('mouseout', () => {
  // Change color
  element.style.color = 'red';
});

element.addEventListener('dblclick', () => {
  // Change font size
//   element.style.fontSize = '20px';
  element.style.color = 'green';

});

     







