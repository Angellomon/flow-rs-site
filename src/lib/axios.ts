import axios from 'axios';
import { API_KEY } from '$lib/constants';

const defaultHeaders = {};
if (API_KEY) defaultHeaders['X-API-KEY'] = API_KEY;

export async function doGet(url: string, schema?: any, safe: boolean = false) {
	try {
		const res = await axios.get(url, {
			...defaultHeaders
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
