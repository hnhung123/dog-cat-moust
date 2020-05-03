var Dog = require ('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse')

var mouse = new Mouse('Mickey')
var dog = new Dog('Tom');
var cat = new Cat()
dog.eat(cat);
try{
    cat.eat(dog);
}catch(error){
    console.log('Error while cat eating a dog')
}
dog.sayHi();
console.log(cat)
