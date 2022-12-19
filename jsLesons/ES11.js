'use strict';

//Nulish '??'

let username;

console.log(username ?? "user");  // Eсли username null  значит автоматически вернется второе значение
                                  // Эдентично || оператуор (или)


// "?" Оператор опционной цепочки
const userData = {
    name: "Name",
    age: 11
};

// if(userData && userData.skill && userData.skill.js){  // Когда то проивряли на существующий элемент в обьекте так,до оператор "?"
//     console.log(userData.skill.js);
// }

console.log(userData.skill?.js);