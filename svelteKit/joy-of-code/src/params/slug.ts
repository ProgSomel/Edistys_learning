import type { ParamMatcher } from '@sveltejs/kit';
// kitParammatcher
export const match: ParamMatcher = (param) => {
	return /^[a-z0-9]+$/.test(param);
};
