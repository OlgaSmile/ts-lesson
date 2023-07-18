class Key {
  private signature: number;

  constructor(){
      this.signature = Math.random();
  }
  getSignature (): number {
      return this.signature;
  }
}

class Person {
  constructor(private key: Key){
  }
  getKey(): Key{
    return this.key
  }
}

abstract class House {
  protected doorOpen = false;
  private tenants: Person[] = [];

  constructor(protected key: Key){
  }

  comeIn(person: Person):void {
    if(!this.doorOpen){
      throw new Error('Door is close')
    }
    this.tenants.push(person);
    console.log('Person inside')
  }

  abstract openDoor (key: Key): void;
}

class MyHouse extends House {
  openDoor (key:Key){
      if(key.getSignature!==this.key.getSignature){
        throw new Error('Key to another door');
      }
      this.doorOpen = true;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

// const buttonEl = document.querySelector("button")!;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// // function add(num1: number, num2: number) {
// //   return num1 + num2;
// // }

// buttonEl.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });

