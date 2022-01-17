import { string, object, union, number, TypeOf, boolean } from 'zod';

const str = string();
const url = str.url();

export const user = object({
	username: str.nullable(),
	config: str.optional()
});
export type User = TypeOf<typeof user>;

export const account = object({
	address: str,
	user,
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
	chat_url: str,
	created_date: str,
	default_to_fiat: boolean(),
	description: str,
	dev_buyer_fee_basis_points: str,
	dev_seller_fee_basis_points: str,
	discord_url: str,
	display_data: displayData,
	external_url: str,
	featured: boolean(),
	featured_image_url: url.nullable(),
	hidden: boolean(),
	image_url: str,
	instagram_username: str,
	is_subject_to_whitelist: boolean(),
	large_image_url: str,
	medium_username: str,
	name: str,
	only_proxied_transfers: boolean(),
	opensea_buyer_fee_basis_points: str,
	opensea_seller_fee_basis_points: str,
	payout_address: str,
	require_email: boolean(),
	safelist_request_status: str,
	short_description: str,
	slug: str,
	telegram_url: str,
	twitter_username: str,
	wiki_url: url
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
	opensea_version: str,
	owner: number(),
	payout_address: str,
	schema_name: str,
	seller_fee_basis_points: number(),
	symbol: str,
	total_supply: str
});

export const asset = object({
	animation_origial_url: url.optional(),
	animation_url: url.nullable(),
	asset_contract: assetContract,
	background_color: str.nullable(),
	collection,
	decimals: number(),
	description: str,
	external_link: str.nullable(),
	id: number(),
	image_original_url: url,
	image_preview_url: url,
	image_thumbnail_url: url,
	image_url: url.nullable(),
	is_presale: boolean(),
	last_sale: str,
	listing_date: str,
	name: str,
	num_sales: number(),
	owner,
	permalink: url,
	sell_orders: str,
	token_id: str,
	token_metadata: str,
	top_bid: str,
	traits: trait.array(),
	transfer_fee: str,
	transfer_fee_payment_token: str
});
export type Asset = TypeOf<typeof asset>;

export const assetsResponse = object({
	assets: asset.array()
});
export type AssetsResponse = TypeOf<typeof assetsResponse>;
