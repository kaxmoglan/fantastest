import { getEnabledFeatures } from './getEnabledFeatures';

describe(`#GetEnabledFeatures`, () => {
	test(`Feature is enabled if email is enabled`, () => {
		const features = getEnabledFeatures(`fred@example.com`, `GB`);

		expect(features.includes(`SuperCoolFeature`)).toBe(true);
	});

	test(`Feature is enabled if country is included`, () => {
		const features = getEnabledFeatures(`kathy@example.com`, `US`);

		expect(features.includes(`MarketingBanner`)).toBe(true);
	});

	test(`Feature is disabled if country is excluded`, () => {
		const features = getEnabledFeatures(`fred@example.com`, `GB`);

		expect(features.includes(`NewUserOnboardingJourney`)).toBe(false);
	});

	test(`Feature is disabled if country not included and email not included`, () => {
		const features = getEnabledFeatures(`fred@example.com`, `GB`);

		expect(features.includes(`EnhancedDashboardFeature`)).toBe(false);
	});

	test(`Multiple features can be returned`, () => {
		const features = getEnabledFeatures(`kathy@example.com`, `US`);

		expect(features.length > 0).toBe(true);
		expect(features.includes(`EnhancedDashboardFeature`)).toBe(true);
		expect(features.includes(`MarketingBanner`)).toBe(true);
	});

	test(`Empty array returned if no matches`, () => {
		const features = getEnabledFeatures(`fake@email.com`, `NA`);

		expect(features.length).toBe(0);
	});
});
