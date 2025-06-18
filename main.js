const hearts = document.querySelectorAll('.fa-solid.fa-heart');

hearts.forEach(e => {
    e.addEventListener('click', function() {
        addHeart(e);
    });
});

function addHeart(e) {
    if(e.style.color == "var(--red)") {
        e.style.color = "var(--gray)";
    } else {
        e.style.color = "var(--red)";
    }
}