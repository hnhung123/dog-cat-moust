var chalk = require ('chalk')
function Dog(name){ 
    this.stomach =[];
    this.name=name
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat)
}

Dog.prototype.sayHi = function(){
    console.log('Hi! I am a dog. My name is '+chalk.red(this.name));
}

module.exports = Dog;