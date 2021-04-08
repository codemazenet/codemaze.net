$(function () {
    $.showLoading = function () {
        setTimeout(function () {
            $('.loading').addClass('active');
        }, 100);
    }

    $.hideLoading = function () {
        setTimeout(function () {
            $('.loading').removeClass('active');
        }, 10);
    }

    $.redirectToIndex = function () {
        window.location.href = "/index.html";
        location.replace("/index.html");
    }
});