const soldier = {
    health : 100,
    armor : 200
};

const john = {};

//john.__proto__ = soldier;  // <---- __prot__ является прототипным наследованием.
                           // внутри каждого Object есть значене __proto__ которое являеться PerentClass



//-----------------  __PROTO__ Устраел --------------
// new version

Object.setPrototypeOf(john,soldier);  //<--- новая версия _proto_
console.log(john.health);

const den = Object.create(soldier);  // <---- the same