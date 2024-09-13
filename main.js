document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll(".announcement-text p");
  const pushButton = document.getElementById("push-btn");
  const resumeButton = document.getElementById("resume-btn");
  let currentIndex = 0;
  let interval;

  function showParagraph(index) {
      paragraphs.forEach((p, i) => {
          p.style.display = i === index ? "block" : "none";
      });
  }

  function startRotation() {
      interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % paragraphs.length;
          showParagraph(currentIndex);
      }, 2000);
      toggleButtons(false); // Show the push button and hide the resume button
  }

  function stopRotation() {
      clearInterval(interval);
      toggleButtons(true); // Show the resume button and hide the push button
  }

  function toggleButtons(isPaused) {
      if (isPaused) {
          pushButton.style.display = "none";
          resumeButton.style.display = "inline-block";
      } else {
          pushButton.style.display = "inline-block";
          resumeButton.style.display = "none";
      }
  }

  pushButton.addEventListener("click", stopRotation);
  resumeButton.addEventListener("click", startRotation);

  // Initialize: Display the first paragraph, start rotation, and set button visibility
  showParagraph(currentIndex);
  startRotation();
  toggleButtons(false); // Initially show the push button
});



// scrool function----------------

document.addEventListener("DOMContentLoaded", function () {
    const sectionHeading = document.querySelector(".section-2-heading");

    // Function to check if the element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight && rect.bottom >= 0
      );
    }

    // Event listener to check scrolling and apply/remove animation
    function handleScroll() {
      if (isInViewport(sectionHeading)) {
        sectionHeading.classList.add("animate"); // Add class to start animation
      } else {
        sectionHeading.classList.remove("animate"); // Remove class to reset animation
      }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the element is already in view
    handleScroll();
  });




  document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".section-imgs-con-1 img");

    // IntersectionObserver callback function
    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If the element is in view, add the animation class to its parent
          entry.target.parentElement.classList.add("animate");
        } else {
          // If the element is out of view, remove the animation class from its parent
          entry.target.parentElement.classList.remove("animate");
        }
      });
    }

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when at least 10% of the element is visible
    });

    // Observe each image and paragraph
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });



  // slider--------------------------


  let currentSlide = 0;

document.getElementById('leftArrow').addEventListener('click', slideLeft);
document.getElementById('rightArrow').addEventListener('click', slideRight);

function slideLeft() {
    const slider = document.querySelector('.slider');
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : 1; // Loop to the last slide if at the first one
    slider.style.left = `-${currentSlide * 100}%`;
}

function slideRight() {
    const slider = document.querySelector('.slider');
    currentSlide = (currentSlide < 1) ? currentSlide + 1 : 0; // Loop to the first slide if at the last one
    slider.style.left = `-${currentSlide * 100}%`;
}



const productBox = document.getElementById("product-box");
const rightArrow = document.getElementById("right-ar");
const leftArrow = document.getElementById("left-ar");
const products = document.querySelectorAll(".product-sec");

let currentIndex = 0; // Current position index
const productsPerPage = 5; // Number of products to show per page

// Function to update product display
function updateProducts() {
  const productWidth = products[0].offsetWidth + 8; // Width of each product including padding
  const totalMove = productWidth * productsPerPage; // Total move for one page of products
  productBox.style.transform = `translateX(-${currentIndex * totalMove}px)`; // Smooth transition due to CSS
}

// Event listener for right arrow click
rightArrow.addEventListener("click", function () {
  if (currentIndex < Math.ceil(products.length / productsPerPage) - 1) {
    currentIndex++;
    updateProducts();
  }
});

// Event listener for left arrow click
leftArrow.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateProducts();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".s6-section-img");

  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the image is in the viewport
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate"); // Add class to start animation
      } else {
        entry.target.classList.remove("animate"); // Remove class when not in view
      }
    });
  }, observerOptions);

  images.forEach((image) => {
    observer.observe(image); // Observe each image
  });
});




  const sectionHeading = document.querySelector(".s6-section-heading");

  // Function to check if the element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom >= 0
    );
  }

  // Event listener to check scrolling and apply/remove animation
  function handleScroll() {
    if (isInViewport(sectionHeading)) {
      sectionHeading.classList.add("animate"); // Add class to start animation
    } else {
      sectionHeading.classList.remove("animate"); // Remove class to reset animation
    }
  }

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Initial check in case the element is already in view
  handleScroll();




// scrool function----------------

document.addEventListener("DOMContentLoaded", function () {
  const sectionHeading = document.querySelector(".s7-heading");

  // Function to check if the element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom >= 0
    );
  }

  // Event listener to check scrolling and apply/remove animation
  function handleScroll() {
    if (isInViewport(sectionHeading)) {
      sectionHeading.classList.add("animate"); // Add class to start animation
    } else {
      sectionHeading.classList.remove("animate"); // Remove class to reset animation
    }
  }

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Initial check in case the element is already in view
  handleScroll();
});  


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".s7-img");

  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the image is in the viewport
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate"); // Add class to start animation
      } else {
        entry.target.classList.remove("animate"); // Remove class when not in view
      }
    });
  }, observerOptions);

  images.forEach((image) => {
    observer.observe(image); // Observe each image
  });
});