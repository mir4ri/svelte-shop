<script lang="ts">
	import { cart } from '../../stores/cart';

	export let img: string = '';
	export let title: string = '';
	export let id: string = '';
	export let price: number = 0;
	export let quantity: number = 0;

	const changeItemQuantity = (value: number) => {
		if (value !== 0 && !!value) {
			return ($cart[$cart.findIndex((cartItem) => cartItem.id === id)].quantity = value);
		}
		return null;
	};

	const removeItemFromCart = () => {
		cart.update((itemsData) => {
			return itemsData.filter((cartItem) => cartItem.id !== id);
		});
	};
</script>

<article class="cart-item">
	<div class="cart-item-img-container">
		<img class="cart-item-img" src={img} alt={title} />
	</div>

	<div class="cart-item-info">
		<h2 class="cart-item-title">{title}</h2>
		<span class="cart-item-quantity-container">
			<span class="cart-item-price">{price}₴</span>
			<span>
				<button
					class="cart-item-quantity-button"
					type="button"
					on:click={() => changeItemQuantity(quantity - 1)}>-</button
				>
				<input
					class="cart-item-quantity-input"
					type="number"
					bind:value={quantity}
					on:input={() => {
						changeItemQuantity(quantity);
					}}
				/>
				<button
					class="cart-item-quantity-button"
					type="button"
					on:click={() => changeItemQuantity(quantity + 1)}>+</button
				>
			</span>
		</span>
		<button type="button" class="cart-item-remove" on:click={() => removeItemFromCart()}>
			<img src="/bin.svg" alt="Видалити товар" />
		</button>
	</div>
</article>

<style lang="scss">
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}
	.cart-item {
		background: #fff;
		margin-bottom: 10px;
		padding: 10px;
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
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.cart-item-title {
				font-size: 1em;
				height: 40px;
				overflow: hidden;
				margin-bottom: 16px;
				width: 100%;
			}
			.cart-item-quantity-container {
				display: flex;
				align-items: center;
				justify-content: space-between;
				& > span {
					display: flex;
					align-items: center;
				}
				.cart-item-quantity-button {
					cursor: pointer;
					display: inline-block;
					line-height: 9px;
					width: 26px;
					height: 26px;
					border: none;
					background: $primaryButton;
					color: #fff;
					font-weight: 600;
					border-radius: 2px;
					box-sizing: border-box;
					@include rippleEffectPrimaryOnClick;
				}
				.cart-item-quantity-input {
					width: 30px;
					height: 26px;
					box-sizing: border-box;
					margin: 0 5px;
					border-radius: 2px;
					text-align: center;
					border: 1px solid black;
				}
			}
		}
		.cart-item-remove {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			max-width: 200px;
			color: #fff;
			font-weight: 500;
			background: $clearButton;
			border: none;
			padding: 4px 6px;
			border-radius: 6px;
			margin-bottom: 4px;
			img {
				display: block;
			}
			// @media screen and (min-width: 992px) {
			&::before {
				content: 'Видалити товар';
				display: block;
				margin-right: 5px;
			}
			// }
		}
	}
</style>
