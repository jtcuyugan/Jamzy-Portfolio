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

    // Load the carousel
    fetch('carousel.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.projects').innerHTML += data;
        });

    // Carousel functionality
    function initCarousel(carouselSelector) {
        const carousel = document.querySelector(`${carouselSelector} .carousel-inner`);
        const items = document.querySelectorAll(`${carouselSelector} .carousel-item`);
        const prev = document.querySelector(`${carouselSelector} .carousel-control-prev`);
        const next = document.querySelector(`${carouselSelector} .carousel-control-next`);
        const dots = document.querySelectorAll(`${carouselSelector} .carousel-indicators .dot`);
        let index = 0;

        function showItem(index) {
            carousel.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            updatePreviewImages();
        }

        function updatePreviewImages() {
            const prevIndex = (index > 0) ? index - 1 : items.length - 1;
            const nextIndex = (index < items.length - 1) ? index + 1 : 0;
            prev.querySelector('img').src = items[prevIndex].querySelector('img').src;
            next.querySelector('img').src = items[nextIndex].querySelector('img').src;
        }

        prev.addEventListener('click', () => {
            index = (index > 0) ? index - 1 : items.length - 1;
            showItem(index);
        });

        next.addEventListener('click', () => {
            index = (index < items.length - 1) ? index + 1 : 0;
            showItem(index);
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                index = i;
                showItem(index);
            });
        });

        // Automatically revolve the carousel
        setInterval(() => {
            index = (index < items.length - 1) ? index + 1 : 0;
            showItem(index);
        }, 3000); // Change slide every 3 seconds

        // Initialize preview images
        updatePreviewImages();

        // Adjust carousel item width for smaller screens
        function adjustCarouselItemWidth() {
            const itemWidth = window.innerWidth < 768 ? window.innerWidth : items[0].offsetWidth;
            items.forEach(item => {
                item.style.width = `${itemWidth}px`;
            });
        }

        // Adjust carousel item width on load and resize
        adjustCarouselItemWidth();
        window.addEventListener('resize', adjustCarouselItemWidth);
    }

// Carousel js
$('input').on('change', function() {
    $('body').toggleClass('blue');
});

    // Initialize carousels
    initCarousel('.projects');
    // No need to initialize the languages carousel as it is infinite and automatic
});