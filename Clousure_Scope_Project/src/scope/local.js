//Example 1
const scopeLocal = () => {
    var myName = "Christian";
    console.log(myName);
}

scopeLocal()
console.log(myName); //Error. It is scope local


//Example 2
var scope = "I am global";
const scopeGlobal = () => {
    // a esto se le llama el ambito léxico. Esta variable scope es local y es diferente a la variable global scope, asi tengan el mismo nombre
    var scope = 'i am just a local';
    const funct = () => {
        return scope;
    }
    console.log(funct());
}

scopeGlobal();
//Ambito lexico
console.log(scope);
