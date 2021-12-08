<script lang="ts">
	export let img: string;
	export let title: string;
	export let index: number;
	export let id: number;
	export let price: number;
</script>

<article class="cart-item">
	<img class="cart-item-img" src={img} alt={title} />
	<div class="cart-item-info">
		<h2 class="cart-item-title">{title}</h2>
		<span>{price}₴</span>
	</div>
</article>

<style lang="scss">
	.cart-item {
		background: #fff;
		margin-bottom: 10px;
		padding: 6px;
		border-radius: 2px;
		.cart-item-img {
			display: block;
			height: 175px;
			max-width: 220px;
			object-fit: contain;
			margin: 0 auto;
		}
		.cart-item-info {
			.cart-item-title {
				font-size: 1em;
			}
		}
		@media screen and (min-width: 992px) {
			display: flex;
			align-items: center;
			.cart-item-img {
				margin: 0;
				margin-right: 12px;
				padding: 6px;
			}
		}
	}
</style>
