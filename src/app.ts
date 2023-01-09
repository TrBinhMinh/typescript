interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number = 26;

  constructor(n?: string) {
    if (n) this.name = n;
  }

  greet(phrase: string) {
    if (this.name) console.log(phrase + " " + this.name);
    else console.log("Hi!");
  }
}

let user1 = new Person();

user1.greet("Hello the notorious");
