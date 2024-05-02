var a = 0;
b = 0;
function scope()
{
    try {
        console.log(1, c); // weshalb crasht c? 
    }
    catch(e){
        console.log(1, e.message); // 1 c is not defined
    }
    var b = 10;
    c = "ABC";
    a++;
    b++;
    console.log(2, a, b, c); // 2 1 11 ABC
}
scope();
console.log(3, a, b, c); // 3 1 0 ABC
console.log(4, globalThis.a, globalThis.b, globalThis.c); // 4 undefined 0 ABC
