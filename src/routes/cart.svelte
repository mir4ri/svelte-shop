<script>
	import { cart } from '../stores/cart';

	import CartItem from '$lib/CartItem/cartItem.svelte';
	import SubmitFormButton from '$lib/SubmitFormButton/submitFormButton.svelte';

	let uniqueCart;
	let totalPrice = 0;
	let sum = 0;

	if ($cart) {
		uniqueCart = [...new Map($cart.map((item) => [item['id'], item])).values()];
	}
	$: sum = $cart.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price,
		totalPrice
	);
</script>

<svelte:head>
	<title>Кошик</title>
</svelte:head>

<main class="content">
	<h1 class="cart-title">Кошик</h1>
	<span class="cart-header">
		В корзині
		<strong>{$cart.length} </strong>
		товари(-ів) на суму <strong>{sum}₴</strong>
	</span>
	{#if $cart.length}
		<section class="cart-wrapper">
			{#each uniqueCart as { id, title, img, price }, index}
				<CartItem
					{id}
					{title}
					{img}
					{index}
					{price}
					totalItems={$cart.filter((cartItem) => cartItem.id === id).length}
				/>
			{/each}
		</section>
		<SubmitFormButton>Підтвердити замовлення</SubmitFormButton>
		<button class="cart-clear" type="submit" on:click={() => cart.update(() => [])}>
			Очистити корзину
		</button>
	{:else}
		<div class="cart-empty">Корзина порожня</div>
	{/if}
</main>

<style lang="scss">
	.cart-title {
		margin-bottom: 4px;
	}
	.cart-header {
		display: block;
		margin-bottom: 12px;
	}

	.cart-wrapper {
		margin-bottom: 8px;
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

	.cart-clear {
		cursor: pointer;
		display: block;
		background: #cf000f;
		color: #fff;
		border: none;
		padding: 5px 8px;
		font-weight: 500;
		border-radius: 2px;
		margin: 10px auto 0;
		@include rippleEffectSubmitOnClick;
	}
</style>
