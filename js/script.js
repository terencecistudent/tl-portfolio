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

// Scroll nav transition
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  let navbar = document.querySelector(".navbar")
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    navbar.classList.add("scroll-transition__smooth");
  } else {
    navbar.style.top = "-73.60px";
    navbar.classList.add("scroll-transition__smooth");
  }
  prevScrollpos = currentScrollPos;
};

// Scroll to top button functionality
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
let rootElement = document.documentElement;

const scrollToTop = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

scrollToTopBtn.addEventListener("click", scrollToTop);
