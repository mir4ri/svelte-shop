<script>
	import { browser } from '$app/env';

	import { cart } from '../stores/cart';

	import CartItem from '$lib/CartItem/cartItem.svelte';
	import SubmitFormButton from '$lib/SubmitFormButton/submitFormButton.svelte';

	let totalPrice = 0;
	let cartQuantity = 0;

	$: uniqueCart = browser ? [...new Map($cart.map((item) => [item['id'], item])).values()] : [];
	$: cartSumPrice = browser
		? uniqueCart.reduce(
				(accumulator, { price, quantity }) => accumulator + quantity * price,
				totalPrice
		  )
		: '';

	$: cartLength = browser
		? $cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, cartQuantity)
		: '';
</script>

<svelte:head>
	<title>Кошик</title>
</svelte:head>

<main class="content">
	<h1 class="cart-title">Кошик</h1>
	<span class="cart-header">
		В корзині
		<strong>{cartLength} </strong>
		товари(-ів) на суму <strong>{cartSumPrice}₴</strong>
	</span>
	{#if $cart.length}
		<section class="cart-wrapper">
			{#each uniqueCart as { id, title, img, price, quantity }}
				<CartItem {id} {title} {img} {price} {quantity} />
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
			grid-template-columns: repeat(3, 1fr);
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
		background: $clearButton;
		color: #fff;
		border: none;
		padding: 5px 8px;
		font-weight: 500;
		border-radius: 2px;
		margin: 10px auto 0;
		@include rippleEffectSubmitOnClick;
	}
</style>
