function scrollLeft() {
    document.querySelector('.card-container').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.card-container').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}