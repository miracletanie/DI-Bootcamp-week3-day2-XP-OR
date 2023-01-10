


console.log(document.getElementsByTagName('h1')[0]);

document.getElementsByTagName('p')[3].remove();

document.getElementsByTagName('h2')[0].addEventListener('click', () => {document.getElementsByTagName('h2')[0].style.backgroundColor = "red" });

document.getElementsByTagName('h3')[0].addEventListener('click', () => {document.getElementsByTagName('h3')[0].style.display = "none" });

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

