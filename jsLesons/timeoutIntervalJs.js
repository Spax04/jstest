// TimeOut

let someFunction = function(){
    //do some thing
};
const timerId = setTimeout(someFunction,2000); // After 2 sec function will be decleared // DO ONES

clearInterval(timerId); // stoping function in 'setTimeout' 

const intervalId = setInterval(someFunction,2000); // evrey 2 sec it does the FUNCTION // DO MANY TIMES