const fruits = () => {
     var fruit = 'Apple';
     console.log(fruit);
    // const funct = () => {
    //     return scope;
    // }
    // console.log(funct());
}

//Local Scope
fruits();
console.log(fruit);


const anotherFunctions = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    //Let no puede ser reasignada
    //let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunctions();