<script lang="ts">
	import type { Asset } from '$lib/schemas';
	import AssetFig from './AssetFig.svelte';
	export let assets: Asset[] = [];
</script>

<section>
	{#each assets as asset}
		<AssetFig {asset} />
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
	}
</style>
