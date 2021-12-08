<script>
	import Card from '$lib/Card/card.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>Snoopy store - Головна</title>
</svelte:head>

<section class="new-goods">
	<h2 class="new-goods-title">Новинки</h2>
	<div class="grid">
		<Card
			data={{
				id: '1',
				title: 'Ігрова консоль Microsoft Xbox Series S 512 GB All-Digital Console',
				price: 13999,
				img: '/xbox.jpg'
			}}
		/>
		<Card
			data={{
				id: '2',
				title: 'Ігрова консоль Nintendo Switch Mario Red & Blue Edition',
				price: 10499,
				img: '/nintendo_mario.webp'
			}}
		/>
		<Card
			data={{
				id: '3',
				title: 'Ігрова консоль Nintendo Switch (OLED Model) White+Ring Fit Adventure',
				price: 16999,
				img: '/switch-oled-advring.jfif'
			}}
		/>
		<Card
			data={{
				id: '4',
				title: 'Ігрова консоль PlayStation 4 1Тб Black + 3 гри + PlayStation Plus (3 міс.)',
				price: 10999,
				img: '/playstation4.jpeg'
			}}
		/>
		<Card
			data={{
				id: '5',
				title: 'Ігрова консоль Microsoft Xbox Series S 512 GB All-Digital Console',
				price: 16999,
				img: '/playstation5.webp'
			}}
		/>
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
