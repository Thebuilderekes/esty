document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll("ul.tabs li");

  tabLinks.forEach(function(tabLink) {
    tabLink.addEventListener("click", function() {
      const tabId = tabLink.dataset.tab;
      const tabLinks = document.querySelectorAll("ul.tabs li");
      const tabContents = document.querySelectorAll(".tab-content");

      tabLinks.forEach(function(link) {
        link.classList.remove("current");
      });
      tabContents.forEach(function(content) {
        content.classList.remove("current");
      });

      tabLink.classList.add("current");
      document.getElementById(tabId).classList.add("current");
    });
  });
});
