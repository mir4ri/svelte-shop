<script lang="ts">
	import Modal from '$lib/Modal/modal.svelte';

	let showModal: boolean = false;

	const handleForm = () => {
		showModal = false;
		alert('Успішно! Замовлення в опрацюванні');
	};
</script>

<button class="order-submit" type="submit" on:click={() => (showModal = true)}>
	<slot />
</button>

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
</style>
