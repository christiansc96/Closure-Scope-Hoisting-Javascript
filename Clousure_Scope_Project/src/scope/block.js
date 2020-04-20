//Example 1
const fruits = () => {
    if (true) {
        var fruit = 'Apple';
        let fruit2 = 'Banana';
        const fruit3 = 'Kiwi';
   
    }

    //Let and const are blocked
    console.log(fruit);  
    console.log(fruit2); 
    console.log(fruit3); 
}

fruits(); 


//Example 2
let x=1;
{
    let x = 2;
    console.log(x);  
}
console.log(x);  


//Example 3
var x=1;
{
    var x = 2;
    console.log(x);  
}
console.log(x);  

//Example 4
const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log (i);
        }, 1000)
    }
};

anotherFunction();