"use strict";
const create = () => 'Hellow';
console.log(create());
function create2() {
    let a = 10;
    let b = 10;
    console.log(a + b);
}
// FUNCTION PARAM NUMBER && BOOLEAN BUT THE EXPECT OUTPUT STRING
function add(x, y, z) {
    return `${x} Ditambah ${y} = ${x + y} is ${z}`;
}
create2();
console.log(add(10, 10, true));
