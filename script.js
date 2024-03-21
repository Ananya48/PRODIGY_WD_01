window.addEventListener('scroll', function() {
    const bar = document.getElementById('bar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        bar.classList.remove('scrolled');
    }
});
