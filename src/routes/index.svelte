<script lang="ts">
	import { onMount } from 'svelte';

	let images = [];

	onMount(async () => {
		const arr = [];
		const res = await fetch('/assets');

		const data = await res.json();

		console.log(data);

		for (let asset of data.assets) {
			arr.push(asset.image_url);
		}

		images = arr;
	});

	console.log(images);

	$: console.log(images);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each images as image}
	<img src={image} alt="img" />
{/each}
