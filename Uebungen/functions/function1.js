function sayHi(where){
    try{
        where("hi");
    }
    catch(e){
        console.log('\x1b[33mError \x1b[0m');

    }
}

sayHi((x)=>console.log(x)); // hi
sayHi(console.log); // hi
sayHi(console.log()); // Error

console.fun = function(){
    this.log("haha");
};

console.fun(); // haha
sayHi(console.fun); // error
