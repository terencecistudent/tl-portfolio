// Burger Icon
// const hamburgerButton = document.getElementById('hamburger');
// const navList = document.getElementById('nav-list');

// const toggleButton = () => {
//     navList.classList.toggle('show');
// };

// hamburgerButton.addEventListener('click', toggleButton);

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

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: ".ml3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

// Bootstrap Scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar-example",
});
