function hello () {
    console.log('Hello', this);
}

const person = {
    name: 'Vladislav',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${this.job}`)
        console.log(`Phone is ${this.phone}`)
        console.groupEnd();
    }
}

const anna = {
    name: 'Anna',
    age: 22
}

/* person.logInfo.bind(anna,'Frontend', '233-432-453'); */
/* person.logInfo.call(anna,'Frontend', '233-432-453'); */
/* person.logInfo.apply(anna, ['Frontend', '233-432-453']); */

const array = [1, 2, 3, 4, 5];

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}
console.log(array.multBy(4));


