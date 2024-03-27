// TYPE
type FriendType = {
	nama: string;
	age: number;
	isAlive?: boolean;
};

// OPERATOR ? TYPE OPTIONAL

const friend: FriendType = {
	nama: 'Apip',
	age: 21,
};

console.log({ friend });
