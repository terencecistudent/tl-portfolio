// Burger Icon
const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

const toggleButton = () => {
    navList.classList.toggle('show');
};

hamburgerButton.addEventListener('click', toggleButton);

// Navbar Active
let selector = '.a-links';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

// Start page at the top when reloaded
history.scrollRestoration = 'manual';

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    };
}
