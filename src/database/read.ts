import prisma from './init';
import type { User } from '@prisma/client';

interface Error {
	name: string;
	message: string;
	stack?: string;
}

/**
 * Finds a User by their email address.
 *
 * @param email - string - any email address stored for the User.
 * @returns [Error, User]
 */
export async function findSingleUserByEmail(
	email: string
): Promise<[undefined | Error, undefined | User]> {
	try {
		const result = await prisma.user.findUnique({
			where: { email },
		});

		if (!result) throw new Error(`USER_NOT_FOUND`);

		return [undefined, result];
	} catch (err: unknown) {
		return [err as Error, undefined];
	}
}
