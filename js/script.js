// Navbar Active
let selector = ".a-links";

$(selector).on("click", function () {
  $(selector).removeClass("active");
  $(this).addClass("active");
});

// Start page at the top when reloaded
history.scrollRestoration = "manual";

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
}

// Removes characters after url hash when reloaded
history.pushState("", document.title, window.location.pathname);

// Scroll to top button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let rootElement = document.documentElement;

const scrollToTop = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

scrollToTopBtn.addEventListener("click", scrollToTop);
