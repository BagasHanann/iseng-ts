// Tipe data
let nama: string = 'Hello, World!';
let num: number = 100;
let isAlive: boolean = true;

// Multi tipe data
let data: string | number;
data = 100;

// Lu pake any ngapain pake typescript bro buset
let data2: any;

// array harus string
let myGf: string[];
myGf = ['a', 'b', 'c'];

let myGf2: [string, number, boolean];
myGf2 = ['a', 1, false];

let data3: Array<string | number | boolean>;
data3 = ['a', 1, false];

console.log({ nama });
console.log({ num });
console.log({ isAlive });
console.log({ data });
console.log({ myGf });
console.log({ myGf2 });
console.log({ data3 });
