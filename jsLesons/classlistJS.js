'use strict';

const btns = document.querySelectorAll('button');

// Monipulations with classes

btns[0].classList.add('someClass'); // adding the class to element
btns[0].classList.remove("someClass"); //removing the class from element
btns[0].classList.toggle("someClass"); // if element has the class - it will be removed,else it will be added

btns[0].classList.contains("someClass"); // returns TRUE if element has this class