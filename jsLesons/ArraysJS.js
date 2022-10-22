'use strict';
const arr = [1,4,6,8,9];
arr.pop();  //<-- classic pop and push methods
arr.push(2);

// ---------arrey foreach example

const arrTest = [1,3,5,7,9];


for(let a of arrTest){
    console.log(a);
}

arrTest.forEach(function(item,i,arr){  //<--- foreach of array
    console.log(`${i}: ${item} in array ${arr}`);
});

// split operator превращает string в arrey с помощью разделителя (параметр)

const stringEx = "a, b, c, d";
const stringExArr = stringEx.split(", ");  //<-- becones arrey
console.log(stringExArr);

// join operator соединяет элементы arrey в один string, параметр указывает на то чем будут элементы разделены

const newString = stringExArr.join("---");
console.log(newString);

// slice - обрезает arrey
const arrSLice = ['a','b','c','d','e','f'];
const newArrSlice = arrSLice.slice(0,-1); //<-- 1 index - from | 2 index - until  (-1 means one less from the end)

//SORTING
const arrTest1 = [8,3,1,7,9];
arrTest1.sort(compareNumbers);

function compareNumbers(a,b){
    return a-b;
}
console.log(arrTest1);

