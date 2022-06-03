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

  const container = document.getElementById("horizontal");
  // where "container" is the id of the container
	container.addEventListener("wheel", function (e) {
	  if (e.deltaY > 0) {
		container.scrollLeft += 100;
		e.preventDefault();
  // prevenDefault() will help avoid worrisome 
  // inclusion of vertical scroll 
	  }
	  else {
		container.scrollLeft -= 100;
		e.preventDefault();
	  }
	});


import barba from '@barba/core';
import barbaCss from '@barba/css';

barba.use(barbaCss);

barba.init({
    transitions: [
        {
            once(){}
        }
    ]
});