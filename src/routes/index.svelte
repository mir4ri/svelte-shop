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
				title: 'Ігрова консоль PlayStation 5',
				price: 16999,
				img: '/playstation5.webp'
			}}
		/>
	</div>
</section>

<section class="new-goods">
	<h2 class="new-goods-title">Playstation</h2>
	<div class="grid">
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
				title: 'Ігрова консоль PlayStation 5',
				price: 16999,
				img: '/playstation5.webp'
			}}
		/>
		<Card
			data={{
				id: '6',
				title:
					'Ігрова консоль PlayStation 5 (PS5/RAT/SACK) + Гра Ratchet & Clank: Rift Apart + Гра Sackboy: A Big Adventure',
				price: 21299,
				img: '/ps5-cl.jpeg'
			}}
		/>
		<Card
			data={{
				id: '7',
				title:
					"Ігрова консоль PlayStation 5 (PS5/DMS/MSM) + Гра Demon's Souls + Гра Marvel Spider-Man: Miles Morales",
				price: 20999,
				img: '/ps5-sm-ds.jpeg'
			}}
		/>
		<Card
			data={{
				id: '8',
				title:
					'Ігрова приставка PS5 PlayStation 5 Digital Edition (PS5DE/DS/DSCH/PSP12) + Бездротовий геймпад PlayStation5 Dualsense + Зарядна станція PlayStation5 Dualsense + Підписка PlayStation Plus на 12 місяців',
				price: 17999,
				img: '/ps5dual.jpeg'
			}}
		/>
	</div>
</section>

<section class="new-goods">
	<h2 class="new-goods-title">Xbox</h2>
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
				id: '9',
				title: 'Ігрова консоль Microsoft Xbox Series X 1TB',
				price: 21999,
				img: '/xbox-ser-x.png'
			}}
		/>
		<Card
			data={{
				id: '10',
				title:
					'Ігрова консоль Xbox Series X 1Tb + Mortal Kombat 11 Ultimate (російська версія) + дод. Wireless Controller with Bluetooth (Carbon Black)',
				price: 24899,
				img: '/xbox-ser-x-mk11.jpeg'
			}}
		/>
		<Card
			data={{
				id: '11',
				title:
					'Ігрова консоль Xbox Series X 1Tb + Cyberpunk 2077 (російська версія) + Star Wars: Squadrons (російська версія)',
				price: 23199,
				img: '/xbox-ser-x-2077.jpeg'
			}}
		/>
		<Card
			data={{
				id: '12',
				title: 'Ігрова консоль Xbox Series X 1Tb + Forza Horizon 4 (російська версія)',
				price: 23199,
				img: '/fh5.jpeg'
			}}
		/>
	</div>
</section>

<section class="new-goods">
	<h2 class="new-goods-title">Nintendo switch</h2>
	<div class="grid">
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
				id: '13',
				title: 'Ігрова консоль Nintendo Switch (OLED Model) White+Ring Fit Adventure',
				price: 16999,
				img: '/switch-oled-advring.jfif'
			}}
		/>
		<Card
			data={{
				id: '14',
				title: 'Ігрова консоль Nintendo Switch Neon blue/red - Оновлена версія',
				price: 9499,
				img: '/nintendo-upgraded.jpeg'
			}}
		/>
		<Card
			data={{
				id: '15',
				title:
					'Ігрова консоль Nintendo Switch Neon blue/red - Оновлена версія + Гра The Legend of Zelda: Breath of the Wild',
				price: 10999,
				img: '/nintendo-upgraded-zelda.jpeg'
			}}
		/>
		<Card
			data={{
				id: '16',
				title: 'Ігрова консоль Nintendo Switch Lite Turquoise',
				price: 7149,
				img: '/nintendo-lite-blue.jpeg'
			}}
		/>
		<Card
			data={{
				id: '17',
				title:
					'Ігрова консоль Nintendo Switch Lite Coral + Гра Animal Crossing: New Horizons (російська версія)',
				price: 8599,
				img: '/nintendo-lite-pink-ac.jpeg'
			}}
		/>
	</div>
</section>

<section class="new-goods">
	<h2 class="new-goods-title">Ігри для приставок</h2>
	<div class="grid">
		<Card
			data={{
				id: '18',
				title: 'Гра Far Cry 6 для PS4',
				price: 1499,
				img: '/farcry6ps4.jpeg'
			}}
		/>
		<Card
			data={{
				id: '19',
				title: 'Гра IT TAKES TWO для PS4',
				price: 1399,
				img: '/ittakestwops4.jpeg'
			}}
		/>
		<Card
			data={{
				id: '20',
				title: "Гра Ghost of Tsushima Director's Cut для PS5",
				price: 2299,
				img: '/gotdcps5.jpeg'
			}}
		/>
		<Card
			data={{
				id: '21',
				title: 'Гра Far Cry 6 для PS5',
				price: 1799,
				img: '/farcry6ps5.jpeg'
			}}
		/>
		<Card
			data={{
				id: '22',
				title: 'Гра Just Dance 2021 для Switch',
				price: 1899,
				img: '/jdswitch.jpeg'
			}}
		/>
		<Card
			data={{
				id: '23',
				title: 'Гра Super Mario Odyssey для Nintendo Switch',
				price: 1899,
				img: '/smo.jpeg'
			}}
		/>
	</div>
</section>

<style lang="scss">
	.new-goods {
		margin-bottom: 12px;
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
