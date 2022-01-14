import { string, object, union, number, TypeOf } from 'zod';

export const user = object({
	username: string().nullable(),
	config: string().optional()
});
export type User = TypeOf<typeof user>;

export const account = object({
	address: string(),
	user,
	config: string()
});
export type Account = TypeOf<typeof account>;

export const trait = object({
	trait_type: string(),
	value: union([string(), number()]),
	display_type: string().nullable()
});
export type Trait = TypeOf<typeof trait>;

export const contract = object({
	name: string(),
	symbol: string(),
	image_url: string().url().nullable(),
	description: string(),
	external_link: string().url().nullable()
});
export type Contract = TypeOf<typeof contract>;

export const asset = object({
	token_ids: string().optional(),
	image_url: string().url().nullable(),
	background_color: string().nullable(),
	external_link: string().url().nullable(),
	asset_contract: contract,
	owner: account,
	traits: trait.array(),
	last_sale: string().nullable()
});
export type Asset = TypeOf<typeof asset>;

export const assetsResponse = object({
	assets: asset.array()
});
export type AssetsResponse = TypeOf<typeof assetsResponse>;
