function updateContent() {
    let resBlog = document.getElementById('resBlog');
    let blogTitle = document.getElementById('blogTitle');
    let isChanged = false;

    if (window.innerWidth < 768 && !isChanged) {
        resBlog.innerHTML = "<h4 class=\"text-center playfair-display text-success\">BLOGS</h4>";
        blogTitle.classList.add('fs-6');
        isChanged = true;
    }
    else if (window.innerWidth > 768 && isChanged) {
        resBlog.innerHTML = defaultText;
        blogTitle.classList.remove('fs-6');
        isChanged = false;
    }
}

window.onload = updateContent;
window.onresize = updateContent;

window.addEventListener("scroll", function() {
    let navBar = document.getElementById('navBar');

    if (window.scrollY > 0) {
        navBar.classList.add('shadow-sm');
    }
    else {
        if (window.scrollY == 0) {
            navBar.classList.remove('shadow-sm');
        }
    }
});

function addShadow() {
    let mytoggler = document.getElementById('navBar');
    if (mytoggler.classList.contains('shadow-sm') && !(window.scrollY > 0)) {
        mytoggler.classList.remove('shadow-sm'); 
    }
    else {
        if (window.scrollY > 0) {
            mytoggler.classList.add('shadow-sm');
        }
        else {
            mytoggler.classList.add('shadow-sm');
        }
    }
}

