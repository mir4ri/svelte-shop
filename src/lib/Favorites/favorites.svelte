<script lang="ts">
	export let isFavorite: boolean = false;
	export let toggleFavorite: () => void;

	$: isFavorite = isFavorite;
</script>

<button type="button" class="heart" on:click={() => toggleFavorite()}>
	{#if isFavorite}
		<img src="/heart-filled.svg" alt="видалити з вибраного" />
	{:else}
		<img src="/heart.svg" alt="додати до вибраного" />
	{/if}
</button>

<style lang="scss">
	.heart {
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
</style>
