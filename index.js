var scroll = new SmoothScroll('.navbar a[href*="#"]', {
    customEasing: function (time) {

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	}
});

AOS.init({
    disable: 'mobile'
  });