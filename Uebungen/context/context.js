globalThis.counter = 999;
const object = {
    counter: 3,
    foo: function () {
        console.log(this.counter)
    }
};
const object2 = {counter: 100};
const foo = object.foo;

object.foo(); // 3
foo(); // 999
foo.call({counter: 10}); // 10

object2.foo = foo;
object2.foo(); // 100

const newFoo = foo.bind({counter: 11});
newFoo(); // 11
newFoo.call({counter: 12}); //undefined; der call aufruf kann das bind nicht überschreiben

//advanced
new foo(); // undefined
new newFoo(); // undefined

