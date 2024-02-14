// Select all elements with the class "expand"
const expandElements = document.querySelectorAll(".expand");

// Attach click event listeners to each expanded element
expandElements.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();

    const link = element.src || element.href; // Get the link from either src or href attribute
    const altText = element.alt || ""; // Get the alt text

    // Select the full image container and fade it in
    const imgFullContainer = document.querySelector(".img-full-container");
    imgFullContainer.style.display = "block"; // Ensure it's visible before fading
    imgFullContainer.classList.add("fade-in"); // Apply fade-in class

    // Set the image source within the container
    imgFullContainer.querySelector("img").src = link;
    imgFullContainer.querySelector("img").alt = altText;
  });
});

// Close preview on click of the full image container
const imgFullContainer = document.querySelector(".img-full-container");
imgFullContainer.addEventListener("click", function () {
  imgFullContainer.classList.add("fade-out"); // Apply fade-out class

  setTimeout(function () {
    // After a delay, completely hide the container
    imgFullContainer.style.display = "none";
    imgFullContainer.querySelector("img").src = ""; // Clear the image source
  }, 1000);
});
