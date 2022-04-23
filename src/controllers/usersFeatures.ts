import { findSingleUserByEmail } from '../database/read';
import { getEnabledFeatures } from '../util/getEnabledFeatures';

import type { Request, Response } from 'express';

export async function usersFeatures(req: Request, res: Response) {
	if (!req.body || !req.body.email) {
		return void res.status(400).send(`EMAIL_NOT_PROVIDED`);
	}

	const { email } = req.body;

	const [getUserErr, user] = await findSingleUserByEmail(email);

	if (getUserErr && getUserErr.message === `USER_NOT_FOUND`) {
		return void res.status(200).send({ email, features: [] });
	}

	if (getUserErr || !user) {
		res.status(500).send(`UNKNOWN_ERROR`);
		return void console.log(`Something went wrong...`, { getUserErr });
	}

	const features = getEnabledFeatures(user.email, user.location);

	res.send({ email, features });
}
