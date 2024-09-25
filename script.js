import { collapse, initMDB } from 'mdb-ui-kit';
initMDB({ collapse });


  const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Counter for "Satisfied Happy Clients"
function countUp(target, elementId, duration) {
  const element = document.getElementById(elementId);
  let count = 0;
  const increment = target / (duration / 100);

  const counterInterval = setInterval(() => {
      count += increment;
      if (count >= target) {
          clearInterval(counterInterval);
          count = target;
      }
      element.textContent = Math.floor(count);
  }, 100);
}

// Counter for "Calories Decreased"
function countDown(start, end, elementId, duration) {
  const element = document.getElementById(elementId);
  let count = start;
  const decrement = (start - end) / (duration / 100);

  const counterInterval = setInterval(() => {
      count -= decrement;
      if (count <= end) {
          clearInterval(counterInterval);
          count = end;
      }
      element.textContent = Math.floor(count);
  }, 100);
}

// Start the counters when the page loads
window.onload = function() {
  countUp(3000, 'clients-counter', 3000); // Counts up to 3000
  countDown(2500, 300, 'calories-counter', 3000); // Counts down to 300
};


