<article class="card">
	<button type="button" class="card-like"><img src="/heart.svg" alt="додати до вибраного" /></button
	>
	<a href="#" class="card-link">
		<img class="card-img" src="/xbox.jpg" alt="товар" />
	</a>
	<div class="card-info">
		<h2 class="card-title">Microsoft Xbox Series S 512 GB All-Digital Console</h2>
		<div>
			<span><span class="card-price">13999 ₴</span></span>
			<button type="button" class="card-toCart">В кошик</button>
		</div>
	</div>

	<button type="button" class="card-order">Оформити замовлення</button>
</article>

<style lang="scss">
	.card {
		position: relative;
		height: calc(100% - 5px);
		background: #fff;
		max-width: 500px;
		min-width: 160px;
		width: 100%;
		border-radius: 6px;
		.card-like {
			cursor: pointer;
			position: absolute;
			top: 7px;
			right: 7px;
			border: none;
			background: none;
			border-radius: 50%;
			padding: 3px;
			@include rippleEffectPrimaryOnClick;
			img {
				display: block;
			}
		}

		.card-link {
			display: block;
			// height: 100%;
			color: #101010;
			text-decoration: none;
			.card-img {
				display: block;
				margin: 0 auto;
				object-fit: cover;
				padding: 18px 9px;
				width: calc(100% - 18px);
			}
		}

		.card-info {
			position: relative;
			z-index: 2;

			background: #fff;
			border-radius: 4px;
			padding: 0 9px 12px;
			.card-title {
				font-size: 0.875em;
				margin-bottom: 16px;
				height: 38px;
				overflow: hidden;
			}
			& > div {
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: relative;
				z-index: 99;
				padding: 2px 0;
				span {
					.card-price {
						z-index: 2;
						font-weight: 500;
					}
				}
				.card-toCart {
					cursor: pointer;
					background: $primaryButton;
					@include rippleEffectPrimaryOnClick;
					color: #fff;
					border: none;
					border-radius: 6px;
					padding: 4px 8px;
					font-weight: 500;
				}
			}
		}
		.card-order {
			cursor: pointer;
			position: relative;
			bottom: 5px;
			width: 100%;
			background: $submitButton;
			color: #fff;
			border: none;
			padding: 14px 0 10px;
			border-radius: 0 0 6px 6px;
			@include rippleEffectSubmitOnClick;
		}
	}
</style>
