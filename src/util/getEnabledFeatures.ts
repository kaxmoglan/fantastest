import features from '../../features.json';

/**
 *
 * @param email - string - user's email address
 * @param location - string - user's 2-character location code
 * @returns array of enabled features
 */
export function getEnabledFeatures(email: string, location: string): String[] {
	let enabledFeatures: String[] = [];

	features.forEach((feature) => {
		const excludedCountries = feature.excludedCountries as String[];
		const includedCountries = feature.includedCountries as String[];

		if (feature.enabledEmails.includes(email)) {
			enabledFeatures.push(feature.name);
			return;
		}

		if (excludedCountries.includes(location)) return;

		if (includedCountries.includes(location)) {
			enabledFeatures.push(feature.name);
			return;
		}
	});

	return enabledFeatures;
}
