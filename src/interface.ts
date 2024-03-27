;;interface FootballPlayer {
	nama: string;
	age: number;
	club: string;
	nation: string;
	foot: string;
}

function Create(career: FootballPlayer): void {
	console.log(`
  Profile Football Player
  Name:${career.nama}
  Age:${career.age}
  Club:${career.club}
  Nation:${career.nation}
  Strong Foot:${career.foot}
  `);
}

const Ronaldo = {
	nama: 'Cristiano Ronaldo',
	age: 38,
	club: 'Al-Nasser',
	nation: 'Portugal',
	foot: 'Right',
};

const Messi = {
	nama: 'Lionel Messi',
	age: 35,
	club: 'Inter Miami',
	nation: 'Argentina',
	foot: 'Left',
};

Create(Ronaldo);
Create(Messi);
