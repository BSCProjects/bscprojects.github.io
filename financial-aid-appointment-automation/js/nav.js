// Scroll to show where your active link is
window.onscroll = (e) => {
    const elements = document.getElementsByClassName("content-section");
    for (let i = 0; i < elements.length; i++) {
        if (document.documentElement.scrollTop >= elements[i].offsetTop) //Adjust Tolerance as you want
        {
            const activeElmnt = document.getElementsByClassName("active")[0]; // there should only be one elmnt with this class
            // remove the active class from the link
            activeElmnt.classList.remove("active");
            // add the active class to this link
            const navLinks = document.getElementsByClassName("nav-link");
            for (let j = 0; j < navLinks.length; j++) {
                if (navLinks[j].innerHTML.toLowerCase() == elements[i].id) navLinks[j].classList.add("active");
            }
        }
    }
}

// smooth scrolling when you click on an anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});