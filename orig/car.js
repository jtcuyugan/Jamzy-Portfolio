$('input').on('change', function() {
    $('body').toggleClass('blue');
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
