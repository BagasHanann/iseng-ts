const create = (): string => 'Hellow';

console.log(create());

function create2(): void {
	let a = 10;
	let b = 10;
	console.log(a + b);
}

// FUNCTION PARAM NUMBER && BOOLEAN BUT THE EXPECT OUTPUT STRING
function add(x: number, y: number, z: boolean): string {
	return `${x} Ditambah ${y} = ${x + y} is ${z}`;
}

create2();
console.log(add(10, 10, true));
