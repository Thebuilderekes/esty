document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function () {
      const tabId = tabLink.dataset.tab;
      const tabLinks = document.querySelectorAll(".tab-link");
      const tabContents = document.querySelectorAll(".tab-content");

      tabLinks.forEach(function (link) {
        link.classList.remove("current");
      });
      tabContents.forEach(function (content) {
        content.classList.remove("current");
      });

      // tabLink.addEventListener("focus", handleTabFocus);
      // tabLink.addEventListener("keydown", handleKeyDown);

      tabLink.classList.add("current");
      document.getElementById(tabId).classList.add("current");
    });
  });

  // tab through and display corresponding content whenever you press enter on the focused tab

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
      const tabId = tabLink.dataset.tab;
        const targetId = tabLink.dataset.tab;
        const targetContent = document.getElementById(targetId);
        tabLinks.forEach(function (link) {
          link.classList.remove("current");
        });
        tabContents.forEach(function (content) {
          content.classList.remove("current");
        });

        tabLink.classList.add("current");
        document.getElementById(tabId).classList.add("current");
        showTabContent(targetContent);
      }
    });
  });

  function showTabContent(tabContent) {
    tabContents.forEach((content) => {
      content.classList.remove("current");
    });
    tabContent.classList.add("current");
  }
 });
