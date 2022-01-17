import axios from 'axios';
import { API_KEY } from '$lib/constants';

const defaultHeaders = {
	'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0'
};
if (API_KEY) defaultHeaders['X-API-KEY'] = API_KEY;

export async function doGet(url: string, schema?: any, safe: boolean = false) {
	try {
		const res = await axios.get(url, {
			headers: {
				...defaultHeaders
			}
		});

		if (schema) {
			return safe ? schema.safeParse(res.data) : schema.parse(res.data);
		}

		return res.data;
	} catch (err) {
		console.log(err);

		return null;
	}
}
