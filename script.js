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

  // counter
  const counters = document.querySelectorAll('.counter');
  const speed = 100; // Speed of the counting
  
  // Function to animate the counting
  const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-target'); // Get the target value
      const increment = target / speed; // Calculate the increment step
      let currentValue = 0;
      
      const updateCounter = () => {
          currentValue += increment;
          if (currentValue < target) {
              counter.textContent = Math.ceil(currentValue);
              requestAnimationFrame(updateCounter);
          } else {
              counter.textContent = target;
          }
      };
      
      updateCounter();
  };
  
  // Intersection Observer to start counting when in view
  const observerOptions = {
      threshold: 0.2 // When 20% of the counter is in view
  };
  
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounter(entry.target); // Start counting
              observer.unobserve(entry.target); // Stop observing once animation starts
          }
      });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  // Observe each counter
  counters.forEach(counter => {
      observer.observe(counter);
  });
