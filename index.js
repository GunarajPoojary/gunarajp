// Smooth scrolling for links
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute('href');
const offsetTop = document.querySelector(href).offsetTop;

scroll({
top: offsetTop,
behavior: "smooth"
});
}

// Interactive game cards
const games = document.querySelectorAll('.game');

for (const game of games) {
const btn = game.querySelector('.btn');
btn.addEventListener('click', () => {
game.classList.toggle('show');
btn.textContent = game.classList.contains('show') ? 'Hide Game' : 'Play Game';
});
}

// Game ratings
const ratings = document.querySelectorAll('.rating');

for (const rating of ratings) {
const stars = rating.querySelectorAll('.star');
stars.forEach((star, i) => {
star.addEventListener('click', () => {
rating.setAttribute('data-rating', i + 1);
updateRating(rating);
});
});
updateRating(rating);
}

function updateRating(rating) {
const ratingValue = rating.getAttribute('data-rating');
const stars = rating.querySelectorAll('.star');
stars.forEach((star, i) => {
if (i < ratingValue) {
star.classList.add('rated');
} else {
star.classList.remove('rated');
}
});
}