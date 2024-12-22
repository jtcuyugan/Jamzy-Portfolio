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

    $('.cards').on('transitionend', function() {
        let checkedRadio = $('input[name="slider"]:checked');
        let nextRadio = checkedRadio.next('input[name="slider"]');
        if (nextRadio.length === 0) {
            nextRadio = $('input[name="slider"]').first();
        }
        nextRadio.prop('checked', true);
    
        let songInfoId = checkedRadio.attr('id').replace('item', 'song-info');
        $('.song-info').hide();
        $('#' + songInfoId).show();
    });
    
    $('.card').hover(function() {
        $(this).find('.hover-description').css('opacity', '1');
    }, function() {
        $(this).find('.hover-description').css('opacity', '0');
    });
    

    // Initialize carousels
    initCarousel('.projects');
    // No need to initialize the languages carousel as it is infinite and automatic
});