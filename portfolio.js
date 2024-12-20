document.addEventListener('DOMContentLoaded', () => {
    // Load the navbar
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML += data;
            // Add event listeners to the newly loaded navbar links
            const headerLinks = document.querySelectorAll('header nav a');
            headerLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.getAttribute('href'));
                    target.scrollIntoView({ behavior: 'smooth' });
                });
            });
        });

    // Load the footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });

    // Carousel functionality
    function initCarousel(carouselSelector) {
        const carousel = document.querySelector(`${carouselSelector} .cards`);
        const items = document.querySelectorAll(`${carouselSelector} .card`);
        const radios = document.querySelectorAll(`${carouselSelector} input[type=radio]`);
        const infoArea = document.querySelector(`${carouselSelector} .info-area`);
        let index = 0;

        function showItem(index) {
            items.forEach((item, i) => {
                item.style.transform = `translateX(${(i - index) * 100}%)`;
                item.style.opacity = i === index ? 1 : 0.4;
                item.style.zIndex = i === index ? 1 : 0;
            });
            infoArea.style.transform = `translateY(-${index * 60}px)`; // Adjust translation for info area
        }

        radios.forEach((radio, i) => {
            radio.addEventListener('change', () => {
                index = i;
                showItem(index);
            });
        });

        // Initialize the carousel
        showItem(index);
    }

$('input').on('change', function() {
    $('body').toggleClass('blue');
});

    // Initialize carousels
    initCarousel('.projects');
    // No need to initialize the languages carousel as it is infinite and automatic
});