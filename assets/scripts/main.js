window.addEventListener("scroll", styleNav);

function styleNav()
{
    // Adding styles to navbar while scroll
    document.querySelector(".coloured-section").classList.toggle("nav-scroll", window.scrollY > 0);
}
