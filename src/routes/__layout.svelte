<script lang="ts">
	import '../app.scss';
	import Header from '$lib/header/Header.svelte';
	import '../app.scss';
</script>

<Header />
<main class="main">
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style lang="scss">
	.main {
		padding: 16px 5px;
		@media screen and (min-width: 992px) {
			max-width: 1320px;
			margin: 0 auto;
		}
	}
</style>
