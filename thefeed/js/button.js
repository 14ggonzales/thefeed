document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    var btn = document.getElementById('back-to-top-btn');
    console.log('Button element found:', btn);
    btn.addEventListener('click', function() {
        console.log('Button clicked!');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
