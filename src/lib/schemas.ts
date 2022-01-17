import { string, object, union, number, boolean, any } from 'zod';
import type { TypeOf } from 'zod';

const str = string();
const url = str.url();

export const user = object({
	username: str.nullable(),
	config: str.optional()
});
export type User = TypeOf<typeof user>;

export const account = object({
	address: str,
	user: user.nullable(),
	config: str
});
export type Account = TypeOf<typeof account>;

export const trait = object({
	trait_type: str,
	value: union([str, number()]),
	display_type: str.nullable()
});
export type Trait = TypeOf<typeof trait>;

export const contract = object({
	name: str,
	symbol: str,
	image_url: url.nullable(),
	description: str,
	external_link: url.nullable()
});
export type Contract = TypeOf<typeof contract>;

export const owner = object({
	address: str,
	config: str,
	profile_img_url: str,
	user
});

export const creator = object({
	address: str,
	config: str,
	profile_img_url: str,
	user
});

export const displayData = object({
	card_display_style: str
});

export const collection = object({
	banner_image_url: url.nullable(),
	chat_url: str.nullable(),
	created_date: str,
	default_to_fiat: boolean(),
	description: str,
	dev_buyer_fee_basis_points: str,
	dev_seller_fee_basis_points: str,
	discord_url: str,
	display_data: displayData,
	external_url: str.nullable(),
	featured: boolean(),
	featured_image_url: url.nullable(),
	hidden: boolean(),
	image_url: str,
	instagram_username: str,
	is_subject_to_whitelist: boolean(),
	large_image_url: str,
	medium_username: str.nullable(),
	name: str,
	only_proxied_transfers: boolean(),
	opensea_buyer_fee_basis_points: str,
	opensea_seller_fee_basis_points: str,
	payout_address: str.nullable(),
	require_email: boolean(),
	safelist_request_status: str,
	short_description: str.nullable(),
	slug: str,
	telegram_url: str.nullable(),
	twitter_username: str.nullable(),
	wiki_url: url.nullable()
});

export const assetContract = object({
	address: str,
	asset_contract_type: str,
	buyer_fee_basis_points: number(),
	created_date: str,
	default_to_fiat: boolean(),
	description: str,
	dev_buyer_fee_basis_points: number(),
	dev_seller_fee_basis_points: number(),
	external_link: url.nullable(),
	image_url: url.nullable(),
	name: str,
	nft_version: str.nullable(),
	only_proxied_transfers: boolean(),
	opensea_buyer_fee_basis_points: number(),
	opensea_seller_fee_basis_points: number(),
	opensea_version: str.nullable(),
	owner: number(),
	payout_address: str.nullable(),
	schema_name: str,
	seller_fee_basis_points: number(),
	symbol: str,
	total_supply: str.nullable()
});

export const asset = object({
	animation_origial_url: url.optional(),
	animation_url: url.nullable(),
	asset_contract: assetContract,
	background_color: str.nullable(),
	collection,
	decimals: number().nullable(),
	description: str,
	external_link: str.nullable(),
	id: number(),
	image_original_url: url.nullable(),
	image_preview_url: url,
	image_thumbnail_url: url,
	image_url: url.nullable(),
	is_presale: boolean(),
	last_sale: any().nullable(),
	listing_date: str.nullable(),
	name: str,
	num_sales: number(),
	owner,
	permalink: url,
	sell_orders: any().array().nullable(),
	token_id: str,
	token_metadata: str.nullable(),
	top_bid: str.nullable(),
	traits: trait.array(),
	transfer_fee: str.nullable(),
	transfer_fee_payment_token: str.nullable()
});
export type Asset = TypeOf<typeof asset>;

export const assetsResponse = object({
	assets: asset.array()
});
export type AssetsResponse = TypeOf<typeof assetsResponse>;
