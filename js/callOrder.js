jQuery(document).ready(function ($) {

    $(".ajax-contact-form").submit(function () {
        var str = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "../send.php",
            data: str,
            success: function (msg) {
                if (msg == 'OK') {
                    alert("Twoje dane zostały wysłane!");
                    window.location.replace('index.html') 
                } else {
                    result = msg;
                }
            }
        });
        return false;
    });
});