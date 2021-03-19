console.log('Hello, World!');

// TOPIC: 1. Variable
let firstName: string = 'Nutt';
firstName = 'Cheer';
console.log(firstName);

// TOPIC: 2.
let list: number[] = [1, 2, 3];
let myList: Array<number> = [1, 2, 3];
let fname1: string[] = ['John', 'Same'];
let fname2: Array<string> = ['John', 'Same'];

// TOPIC: 3. Enum
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

// TOPIC: 4. unknown
let notSure: unknown;
notSure = 'maybe a string instead';
notSure = 20;
notSure = 'John';
console.log(notSure);

// TOPIC: 5. Return from function
// SUB TOPIC: if not define return type => default is any
function warnUser(fName: string): void {
  console.log(`Hello ${fName}`);
  // return -5 //! cannot return different type
}
// console.log(warnUser(20)) //! cannot pass argument with different type

declare function create(obj: object | null): void

create({ prop: 0 });
create(null);
