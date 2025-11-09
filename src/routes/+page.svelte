<script lang="ts">
	import { ArrowLeft, ArrowRight } from '@lucide/svelte';

	const generatedArray = Array.from({ length: 6 });

	let elemCarousel: HTMLDivElement;

	/** On navigation left, scroll the container */
	function carouselLeft() {
		if (!elemCarousel) {
			return;
		}
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	/** On navigation right, scroll the container */
	function carouselRight() {
		if (!elemCarousel) {
			return;
		}
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	/** On thumbnail click, scroll large image into view */
	function carouselThumbnail(index: number) {
		if (elemCarousel) {
			elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
		}
	}
</script>

<header>
	<h1>Header</h1>
</header>
<main>
	<div class="w-full" data-testid="carousel">
		<!-- Carousel -->
		<div class="grid grid-cols-[auto_1fr_auto] items-center gap-4 card p-4">
			<!-- Button: Left -->
			<button
				on:click={carouselLeft}
				type="button"
				class="btn-icon preset-filled"
				title="Previous slide"
				aria-label="Previous slide"
				data-testid="carousel-left"
			>
				<ArrowLeft size={16} />
			</button>
			<!-- Full Images -->
			<div
				bind:this={elemCarousel}
				class="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
				data-testid="carousel-images"
			>
				<!-- Loop X many times. -->
				{#each generatedArray as _, i}
					<img
						class="w-[5xl] snap-center rounded-container"
						src={`https://picsum.photos/seed/${i + 1}/1024/768`}
						alt={`full-${i}`}
						loading="lazy"
					/>
				{/each}
			</div>
			<!-- Button: Right -->
			<button
				on:click={carouselRight}
				type="button"
				class="btn-icon preset-filled"
				title="Next slide"
				aria-label="Next slide"
				data-testid="carousel-right"
			>
				<ArrowRight size={16} />
			</button>
		</div>
		<!-- Thumbnails -->
		<div class="grid grid-cols-6 gap-4 card p-4" data-testid="carousel-thumbnails">
			<!-- Loop X many times. -->
			{#each generatedArray as _, i}
				<button
					type="button"
					on:click={() => carouselThumbnail(i)}
					data-testid="carousel-thumbnail"
				>
					<img
						class="rounded-container hover:brightness-125"
						src={`https://picsum.photos/seed/${i + 1}/256`}
						alt={`thumb-${i}`}
						loading="lazy"
					/>
				</button>
			{/each}
		</div>
	</div>
</main>
<footer>Footer</footer>
