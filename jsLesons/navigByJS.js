let nodes = document.body.childNodes; // псевдо мосив с о всеми элементами внутри body

let nodesfirst = document.body.firstChild; // первый вложеный элемент
let nodeslast = document.body.lastChild; // последний вложенный элемент

const someNode = document.querySelector('#current').parentNode; // обращение к родителю

const someElementTwo = document.querySelector('#current').nextSibling;  // следующий по порядку элемент.
const someElementThree = document.querySelector('#current').previousSibling; // предидущий по порядку элемент.