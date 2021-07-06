const nav = document.querySelector('nav');

document.addEventListener("scroll", () => {
    if (pageYOffset > 0) {
        nav.setAttribute("style", "border-bottom: 1px solid #c4af9a;");
    }
    if (pageYOffset == 0) {
        nav.setAttribute("style", "border-bottom: 0;");
    }
});
