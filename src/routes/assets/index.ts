import { COLLECTION_NAME, OPENSEA_URL } from '$lib/constants';
import { doGet } from '$lib/axios';
import { Asset, assetsResponse, AssetsResponse } from '$lib/schemas';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const { offset = '0', limit = '30' } = params;

	let assets: Asset[] | null;

	try {
		const res: AssetsResponse = await doGet(
			`${OPENSEA_URL}/assets?collection=${COLLECTION_NAME}&offset=${offset}&limit=${limit}`,
			assetsResponse
		);

		assets = res.assets;
	} catch (err) {
		console.log(err);
		assets = [];
	}

	return {
		body: {
			assets
		}
	};
}
