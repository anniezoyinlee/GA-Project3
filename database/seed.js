const User = require('../models/User');
const Pokemon = require('../models/Pokemon');
const seedData = require('./seeds.json');

// For future update, no user feature in frontend yet
const getUser = async () => {
	try {
		if (!process.argv[2]) {
			throw new Error(
					'To seed the database provide an email address for an existing user'
			);
		}

		const user = await User.findOne({
			email: process.argv[2]
		});

		if (!user) {
			throw new Error('No matching user found!');
		}

		return user;
	} catch (error) {
		console.error(error);
	}
};

Pokemon.deleteMany()
	.then(getUser)
	.then((user) => {
			const seedDataWithOwner = seedData.map((pokemon) => {
					pokemon.owner = user._id;
					return pokemon;
			});
			return Pokemon.insertMany(seedDataWithOwner);
	})
	.then(console.log)
	.then(console.error)
	.finally(() => {
			process.exit();
	});