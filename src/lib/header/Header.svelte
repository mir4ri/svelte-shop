<header class="header">
	<div class="container">
		<a class="logo" href="/"><img src="/logo.svg" alt="логотип" /></a>
		<nav />
		<button class="menu" type="button">
			<span />
			<span />
			<span />
		</button>
	</div>
</header>

<style lang="scss">
	.header {
		border-bottom: 1px solid #dedede;

		background: #f0f8ff;
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
			@media screen and (min-width: 992px) {
				max-width: 1440px;
				margin: 0 auto;
			}
		}
	}
</style>
