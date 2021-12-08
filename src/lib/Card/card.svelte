<script lang="ts">
	export let data = {
		id: '1',
		title: 'Ігрова консоль Microsoft Xbox Series S 512 GB All-Digital Console',
		price: 13999,
		img: '/xbox.jpg'
	};

	const { id, title, price, img } = data;

	import { browser } from '$app/env';

	import { cart } from '../../stores/cart';
	import { favorites } from '../../stores/favorites';

	import Favorites from '$lib/Favorites/favorites.svelte';
	import Modal from '$lib/Modal/modal.svelte';

	let showModal = false;

	const checkIsFavorite = (currentId: string) => {
		if (browser) {
			return $favorites.some(({ id }) => id === currentId);
		}

		return false;
	};

	let isFavorite = checkIsFavorite(id);

	const toggleFavorite = () => {
		if (!checkIsFavorite(id)) {
			favorites.update((favData) => [...favData, data]);
			isFavorite = true;
		} else {
			favorites.update((favData) => {
				return favData.filter((fav) => fav.id !== data.id);
			});

			isFavorite = false;
		}
	};

	const handleForm = () => {
		showModal = false;
		alert('Успішно! Замовлення в опрацюванні');
	};
</script>

<article class="card">
	<Favorites {isFavorite} {toggleFavorite} />
	<a href="#" class="card-link">
		<img class="card-img" src={img} alt={title} {title} />
	</a>
	<div class="card-info">
		<h2 class="card-title">{title}</h2>
		<div>
			<span><span class="card-price">{price}₴</span></span>
			<button
				type="button"
				class="card-toCart"
				on:click={() => {
					cart.update((cartData) => [...cartData, data]);
				}}
			>
				<img src="/addToCart.svg" alt="додати у кошик" />
			</button>
		</div>
	</div>

	<button type="button" class="card-order" on:click={() => (showModal = true)}>
		Оформити замовлення
	</button>
</article>

{#if showModal}
	<Modal on:close={() => (showModal = false)}>
		<form class="order-form" on:submit|preventDefault={handleForm}>
			<span>
				<input
					type="text"
					placeholder="Ім'я"
					pattern="[А-ЩЬЮЯҐЄІЇа-щьюяґєії_-]+"
					maxlength="32"
					minlength="1"
					required
					title="Ім'я повинно складатися тільки з киририлиці, без пробілів"
				/>
				<input
					type="text"
					placeholder="Прізвище"
					pattern="[А-ЩЬЮЯҐЄІЇа-щьюяґєії_-]+"
					maxlength="32"
					minlength="1"
					required
					title="Прізвише повинно складатися тільки з киририлиці, без пробілів"
				/>
			</span>
			<span>
				<input type="email" placeholder="Ел. пошта" required minlength="7" />
				<input
					type="tel"
					placeholder="Номер телефону"
					size="10"
					minlength="10"
					maxlength="10"
					multiple
				/>
			</span>

			<input type="text" placeholder="Місто" list="cities" required />
			<input type="submit" value="Підтвердити" class="order-form-submit" />
			<datalist id="cities">
				<option value="Київ" />
				<option value="Львів" />
				<option value="Івано-Франківськ" />
				<option value="Чернівці" />
				<option value="Вінниця" />
				<option value="Дніпро" />
				<option value="Запоріжжя" />
				<option value="Кривий Ріг" />
				<option value="Луцьк" />
			</datalist>
		</form>
	</Modal>
{/if}

<style lang="scss">
	.card {
		position: relative;
		height: calc(100% - 5px);
		background: #fff;
		max-width: 500px;
		min-width: 160px;
		width: 100%;
		border-radius: 6px;

		.card-link {
			color: #101010;
			text-decoration: none;
			height: 180px;
			display: flex;
			justify-content: center;
			align-items: center;
			.card-img {
				display: inline-block;
				object-fit: contain;
				padding: 18px 9px;
				box-sizing: border-box;
				width: 100%;
				max-height: 100%;
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
				margin-bottom: 10px;
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
					padding: 6px;
					font-weight: 500;
					display: flex;
					align-items: center;
					@media screen and (min-width: 992px) {
						&::before {
							content: 'В кошик';
							display: block;
							margin-right: 5px;
							font-weight: 500;
						}
					}
					img {
						display: inline-block;
					}
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

	.order-form {
		span {
			display: flex;
			justify-content: space-between;
			input {
				width: 49%;
			}
		}
		input {
			display: block;
			width: 100%;
			padding: 2px 6px;
			height: 30px;
			box-sizing: border-box;
			margin-bottom: 8px;

			&:focus:invalid {
				outline-color: red;
			}
			&:focus:valid {
				outline-color: $submitButton;
			}
			&:focus {
				outline-color: $primaryButton;
			}
			&::placeholder {
				font-weight: 500;
				color: $gray;
			}
		}
		.order-form-submit {
			cursor: pointer;
			background: $submitButton;
			border: none;
			color: #fff;
			font-weight: 500;
			border-radius: 2px;
			height: inherit;
			padding: 10px 0;
			@include rippleEffectSubmitOnClick;
		}
	}
</style>
