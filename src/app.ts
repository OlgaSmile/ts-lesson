function getPromise (): Promise<Array<string|number>> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise ()
.then((data) => {
  console.log(data);
});
// ***

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top: Pick<AllType, 'name'| 'color'>, bottom: Pick<AllType, 'position'|'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
// ***

function merge<T extends object, U extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// ***

class Component <T> {
  constructor (public props:T) {

  }
}
interface IProps {
  title: string,
}

class Page extends Component<IProps>{
  pageInfo (): void {
    console.log(this.props.title);
  }
}

// ***
class Key{
  private signature: number;

  constructor(){
    this.signature =  Math.random();
  }
  getSignature(): number{
    return this.signature;
  }
}
class Person{
 
  constructor(private key: Key){
    this.key=key;
  }
  getKey(): Key{
    return this.key;
  }
}

abstract class House{
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key){
    this.key = key;
  }

  comeIn(person: Person):void{
    if(!this.door){
      throw new Error('Who are you? You do not live here!')
    }
    this.tenants.push(person);
    console.log('Hi, dude! Please, come in!');
  }
  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House{

  openDoor(key: Key){
    if(this.key.getSignature !== key.getSignature){
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

// ***
const buttonEl = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

buttonEl.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

