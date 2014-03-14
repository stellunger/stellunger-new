$('a').smoothScroll();
$('#form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        method: 'POST',
        url: 'mail.php',
        data: $(this).serialize(),
        error: function () {
            alert('Произошла ошибка');
        },
        success: function () {
            $('#form').html('<div><h2>Спасибо! Мы свяжемся с вами!</h2></div>');
        }
    });
});