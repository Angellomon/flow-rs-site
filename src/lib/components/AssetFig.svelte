<script lang="ts">
	import type { Asset } from '$lib/schemas';

	export let asset: Asset;
	let ellipsis = true;

	const toggleParagraph = () => {
		ellipsis = !ellipsis;
	};
	console.log(asset.external_link);
</script>

<figure>
	<img src={asset.image_url} alt={asset.token_id} />
	<figcaption>
		<p class:ellipsis on:click={toggleParagraph}>{asset.description}</p>
		<a href={asset.permalink}>OpenSea</a>
	</figcaption>
</figure>

<style>
	img {
		max-width: 7em;
		height: auto;
	}
	figure {
		max-width: 7em;
	}
	figcaption p.ellipsis {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
