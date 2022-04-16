window.addEventListener("scroll", styleNav);

function styleNav()
{
    // Adding styles to navbar while scroll
    document.querySelector("header").classList.toggle("nav-scroll", window.scrollY > 0);
}
