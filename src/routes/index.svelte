<script context="module" lang="ts">
	import Card from '$lib/Card/card.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>Snoopy store - Головна</title>
</svelte:head>

<section class="new-goods">
	<h2 class="new-goods-title">Новинки</h2>
	<div class="grid">
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	</div>
</section>

<style lang="scss">
	.new-goods {
		.new-goods-title {
			margin-bottom: 10px;
		}
	}
	.grid {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	}
</style>
