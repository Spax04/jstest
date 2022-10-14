const object = {
    name: "test",
    width : 1920,
    height : 1080,
    colors : {
        bg: "red",
        border: "black"
    }
};

//--------foreache of object example (in JS use regular FOR)
for(let key in object){

    console.log(`In key ${key} value: ${object[key]}`);
    if(typeof(object[key]) == 'object' ){
        for(let innerkey in object[key]){
            console.log(`In Inner key ${innerkey} value: ${object[key][innerkey]}`);
        }
    }
}

console.log(Object.keys(object));
console.log(Object.keys(object).length);

//---------destructurization example  вытаскивание внутрених элементов из обьекта

const {border,bg} = object.colors;

console.log(border);