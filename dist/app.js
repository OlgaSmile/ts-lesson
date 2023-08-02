"use strict";
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
//# sourceMappingURL=app.js.map