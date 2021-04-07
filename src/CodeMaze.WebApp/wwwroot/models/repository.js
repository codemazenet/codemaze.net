$(function () {

    //exten ajax
    $.getTokenKey = function () {
        var tk = $("input[name='CSRF-MAZE-FORM']").val();
        return {
            "Kyzin-Token": tk
        }
    }

    $.kzAjax = function (url, type, data, callback, errorcallback) {
        $.ajax({
            url: url,
            type: type,
            data: data,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            headers: $.getTokenKey(),
            success: function (response) {
                if (typeof callback === "function") {
                    callback(response);
                }
            },
            error: function (response) {
                if (typeof errorcallback === "function") {
                    errorcallback(response);
                }
            }
        });
    };

    $.notifySuccess = function (msg) {
        $.notify({
            // options
            title: '<strong>Success!</strong>',
            message: msg,
            icon: 'icon icon-ok-sign ',
        }, {
            // settings
            element: 'body',
            //position: null,
            type: "success",
            //allow_dismiss: true,
            //newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 3300,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutRight'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
        });
    }

    $.notifyInfo = function (msg) {
        $.notify({
            // options
            title: '<strong>Info!</strong>',
            message: msg,
            icon: 'icon icon-info-sign',
        }, {
            // settings
            element: 'body',
            position: null,
            type: "info",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 3300,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutRight'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
        });
    }

    $.notifyWarning = function (msg) {
        $.notify({
            // options
            title: '<strong>Warning!</strong>',
            message: msg,
            icon: 'icon icon-warning-sign',
        }, {
            // settings
            element: 'body',
            position: null,
            type: "warning",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 3300,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutRight'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
        });
    }

    $.notifyDanger = function (msg) {
        $.notify({
            // options
            title: '<strong>Deny!</strong>',
            message: msg,
            icon: 'icon icon-remove-sign',
        }, {
            // settings
            element: 'body',
            position: null,
            type: "danger",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 3300,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutRight'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
        });
    }
});