<script>
	import { cart } from '../stores/cart';

	import CartItem from '$lib/CartItem/cartItem.svelte';
</script>

<svelte:head>
	<title>Кошик</title>
</svelte:head>

<main class="content">
	<h1>Кошик</h1>

	{#if $cart.length}
		<section class="cart-wrapper">
			{#each $cart as { id, title, img, price }, index}
				<CartItem {id} {title} {img} {index} {price} />
			{/each}
		</section>
		<button class="order-submit" type="submit">Підтвердити замовлення</button>
	{:else}
		<div class="cart-empty">Корзина порожня</div>
	{/if}
</main>

<style lang="scss">
	.cart-wrapper {
		@media screen and (min-width: 992px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 10px;
		}
	}
	.cart-empty {
		width: 100%;
		font-size: 1.2em;
		font-weight: 500;
		text-align: center;
		height: 200px;
		line-height: 200px;
	}

	.order-submit {
		cursor: pointer;
		display: block;
		max-width: 500px;
		color: #fff;
		background: $submitButton;
		border: none;
		font-weight: 500;
		padding: 6px 8px;
		border-radius: 2px;
		font-size: 1em;
		margin: 0 auto;
		@include rippleEffectSubmitOnClick;
	}
</style>
