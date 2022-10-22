'use strict';

// Getting elements by....

const box = document.getElementById('box'),  //<--- by ID
      btns = document.getElementsByTagName('button'), ///<--- by Tag name | geting pseudo Arrey with all elements by tag
      circles = document.getElementsByClassName('circle'), // <--- similar to Tag | Pseudo arrey
      hearts = document.querySelectorAll('heart'),  // <--- getting all elements by selector | Pseudo arrey
      oneHeart = document.querySelector('.heart'); // <---geting one element by selector


//  Styles by JS to CSS

box.style.backgroundColor = 'blue';
box.style.width = '500px'; // <-- have to recive STRING parameter.

btns[1].style.border = '100%'; // <--- working width elements in pseudo arrey

box.style.cssText = 'background-color : green;'; // <---CUSTOME CSS

// CREATING ELEMENTS

const div = document.createElement('div'); // Creating element

div.classList.add('black'); // adding class to element

// APPENDING ELEMENTS
document.body.append(div);
document.body.appendChild(div);  // appending element to body

hearts[0].before(div); // вставляет div перед обьектом
hearts[0].after(div); // вставляет div после обьекта

circles[0].remove();
wrapper.removeChild(hearts[0]); // REMOVING

hearts[0].replaceWith(circles[0]);
wrapper.replaceChild(div,circles[0]); // REPLACING THE ELEMENTS

wrapper.insertBefore(div,hearts[1]);

//Pending TEXT

div.innerHTML = "hello World";
div.textContent = "Hello world";

div.insertAdjacentHTML('afterbegin','HELLO WORLD');