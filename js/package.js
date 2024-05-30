// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Select all the <a> elements within the comparison-tab-menu
  var tabLinks = document.querySelectorAll(
    ".comparison-tab-menu .comparison-tab-link"
  );

  // Loop through each tab link
  tabLinks.forEach(function (link) {
    // Add a click event listener to each link
    link.addEventListener("click", function (event) {
      // Prevent the default action (if needed)
      event.preventDefault();

      // Remove the 'w--current' class from all links
      tabLinks.forEach(function (link) {
        link.classList.remove("w--current");
      });

      // Add the 'w--current' class to the clicked link
      this.classList.add("w--current");
    });
  });
});
