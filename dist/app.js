"use strict";
function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}
getPromise()
    .then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
        this.key = key;
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error('Who are you? You do not live here!');
        }
        this.tenants.push(person);
        console.log('Hi, dude! Please, come in!');
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (this.key.getSignature !== key.getSignature) {
            throw new Error('Please, try another key');
        }
        return this.door = true;
    }
}
const key = new Key();
const person = new Person(key);
const myHouse = new MyHouse(key);
myHouse.openDoor(person.getKey());
myHouse.comeIn(person);
const buttonEl = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
buttonEl.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//# sourceMappingURL=app.js.map