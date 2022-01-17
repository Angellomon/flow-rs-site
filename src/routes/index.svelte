<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch, url }) {
		const { collection = 'cryptoskulls' } = url.searchParams;

		const res = await fetch(`/assets?collection=${collection}`);

		if (res.ok) {
			return {
				props: res.json()
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import Collection from '$lib/components/Collection.svelte';
	import { selectedCollection } from '$lib/store';

	/** @type {import('$lib/schemas').Asset[]} */
	export let assets;
	let otherAssets = assets;

	let options = [
		{
			label: 'CryptoSkulls',
			value: 'cryptoskulls'
		},
		{
			label: 'Flow-Rs',
			value: 'flow-rs'
		}
	];

	const getCollectionAssets = async () => {
		console.log($selectedCollection);

		const res = await fetch(`/assets?collection=${$selectedCollection}`);

		const data = await res.json();

		otherAssets = data.assets;
	};
</script>

<select bind:value={$selectedCollection}>
	{#each options as opt}
		<option value={opt.value}>{opt.label}</option>
	{/each}
</select>
<button on:click={() => getCollectionAssets()}>OK</button>
<br />

<Collection assets={otherAssets} />
