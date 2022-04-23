import { PrismaClient } from '@prisma/client';
import exampleUsers from '../example_users.json';

const prisma = new PrismaClient();

async function main() {
	console.log(`Seeding database...`);

	exampleUsers.forEach(async (user) => {
		await prisma.user.upsert({
			where: { email: user.email },
			update: {},
			create: {
				email: user.email,
				location: user.location,
			},
		});
	});

	console.log(`Seeding database completed.`);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
