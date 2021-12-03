<script lang="ts">
	import '../app.scss';
	import Header from '$lib/Header/Header.svelte';
	import '../app.scss';
</script>

<Header />
<main class="main">
	<slot />
</main>

<style lang="scss">
	.main {
		padding: 16px 5px;
		@media screen and (min-width: 992px) {
			max-width: 1320px;
			margin: 0 auto;
		}
	}
</style>
