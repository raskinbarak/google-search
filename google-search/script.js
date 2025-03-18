const micButton = document.getElementById('mic-button');
const googleLogo = document.getElementById('google-logo');
let isBold = false;

micButton.addEventListener('click', function() {
    isBold = true;
    const letters = googleLogo.querySelectorAll('div');
    letters.forEach(letter => {
        letter.style.fontWeight = 'bold';
    });
});

const lensButton = document.getElementById('lens-button');
lensButton.addEventListener('click', function() {
    isBold = false;
    const letters = googleLogo.querySelectorAll('div');
    letters.forEach(letter => {
        letter.style.fontWeight = 'normal';
    });
});

const magnifyingGlass = document.getElementById('magnifying-glass');
const searchBar = document.getElementById('search-bar');
const triggerSearch = function() {
    if (searchBar.value.trim() !== '') {
        const searchValue = searchBar.value;
        const googleLetters = searchValue.split('');
        googleLogo.innerHTML = '';

        googleLetters.forEach((letter, index) => {
            const div = document.createElement('div');
            div.id = `div${index + 1}`;
            div.textContent = letter;

            const colors = ['blue', 'red', 'yellow', 'blue', 'green', 'red'];
            div.className = colors[index % colors.length];

            if (letter === 'e') {
                div.classList.add('letter-e');
            }

            if (isBold) {
                div.style.fontWeight = 'bold';
            }

            googleLogo.appendChild(div);
        });

        searchBar.value = '';
    }
};

magnifyingGlass.addEventListener('click', triggerSearch);
searchBar.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        triggerSearch();
    }
});