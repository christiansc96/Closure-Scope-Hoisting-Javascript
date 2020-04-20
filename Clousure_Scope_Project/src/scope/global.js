//Solo var puede ser reasignado
var hello = "Hello";

//No se puede reasignar valores a let y const.
//let world = "Hello World! +";
let world = "Hello World!";
const helloW = "Hello World!";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloW);
}

anotherFunction();

const helloWorld = () => {
    globalVar = "I am global";
}

helloWorld();
console.log(globalVar);

//Bad practices
const ThreeAssigned = () => {
    var scope = globalVar = "I am global";
}

ThreeAssigned();
console.log(globalVar);