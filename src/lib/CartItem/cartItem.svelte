<script lang="ts">
	export let img: string;
	export let title: string;
	export let index: number;
	export let id: number;
	export let price: number;
	export let totalItems: number;
</script>

<article class="cart-item">
	<div class="cart-item-img-container">
		<img class="cart-item-img" src={img} alt={title} />
	</div>

	<div class="cart-item-info">
		<h2 class="cart-item-title">{title}</h2>
		<span>{price}₴</span>
		<span>{totalItems} шт</span>
	</div>
</article>

<style lang="scss">
	.cart-item {
		background: #fff;
		margin-bottom: 10px;
		padding: 6px;
		border-radius: 2px;
		display: flex;
		.cart-item-img-container {
			height: 120px;
			width: 120px;
			margin-right: 12px;
			padding: 6px;
			.cart-item-img {
				display: block;
				height: 120px;
				width: 120px;
				object-fit: contain;
				margin: 0 auto;
			}
		}

		.cart-item-info {
			.cart-item-title {
				font-size: 1em;
			}
		}
	}
</style>
