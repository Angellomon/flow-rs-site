import { COLLECTION_NAME, OPENSEA_URL } from '$lib/constants';
import { doGet } from '$lib/axios';
import { Asset, assetsResponse, AssetsResponse } from '$lib/schemas';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params, url }) {
	console.log(url);

	let assets: Asset[];
	const collection = url.searchParams.get('collection');
	const offset = url.searchParams.get('offset') || '0';
	const limit = url.searchParams.get('limit') || '30';

	try {
		const res: AssetsResponse = await doGet(
			`${OPENSEA_URL}/assets?collection=${collection}&offset=${offset}&limit=${limit}`,
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
