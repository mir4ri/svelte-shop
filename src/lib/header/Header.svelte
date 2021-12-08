<script>
	import { goto } from '$app/navigation';
	import { cart } from '../../stores/cart';
</script>

<header class="header">
	<div class="container">
		<a class="logo" href="/"><img src="/logo.svg" alt="логотип" /></a>

		<span>
			<button class="cart" type="button" data-length={$cart.length} on:click={() => goto('/cart')}>
				<img class="cart-icon" src="/cart.svg" alt="корзина" />
			</button>
			<button class="menu" type="menu">
				<span />
				<span />
				<span />
			</button>
		</span>
	</div>
</header>

<style lang="scss">
	.header {
		border-bottom: 1px solid #dedede;

		// background: #f0f8ff;
		background: #e3f2ff;
		position: sticky;
		top: 0;
		z-index: 3;
		.container {
			display: flex;
			justify-content: space-between;
			padding: 6px 15px;
			.logo {
				img {
					width: 90%;
					display: inline-block;
				}
			}

			span {
				display: flex;
				align-items: center;
				button:not(:last-child) {
					margin-right: 10px;
				}
				.cart {
					position: relative;
					background: none;
					border: none;
					cursor: pointer;

					&::before {
						content: attr(data-length);
						position: absolute;
						top: -5px;
						right: -6px;
						display: flex;
						justify-content: center;
						align-items: center;
						width: 20px;
						height: 20px;
						border-radius: 50%;
						color: #fff;
						background: $primaryButton;
						font-size: 12px;
						font-weight: 600;
					}
					.cart-icon {
						display: block;
					}
				}
				.menu {
					background: none;
					border: none;
					padding: 0 5px;
					span {
						display: block;
						width: 20px;
						height: 3px;
						margin-bottom: 3px;
						background: #101010;
						border-radius: 1px;
					}
				}
			}

			@media screen and (min-width: 992px) {
				max-width: 1440px;
				margin: 0 auto;
			}
		}
	}
</style>
