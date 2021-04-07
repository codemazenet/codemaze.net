$(function () {
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Vote Like or Hit
    $(document).on("click", ".single-question-vote-up", function () {
        $.kzAjax("/post/like", "POST", { postId: $("input[name='postId']").val() }, function (response) {
            if (response != null) {
                if (!response.isSuccess) {
                    return $.notifyInfo(response.message);
                } else {
                    var vote = parseInt($(".single-question-vote-result").text()) + 1;
                    $(".single-question-vote-result").text("+" + vote);
                    return;
                }
            }
        });
    });

    $(document).on("click", ".single-question-vote-down", function () {
        $.kzAjax("/post/hit", "POST", { postId: $("input[name='postId']").val() });
    });

    if (typeof hljs != "undefined") {
        hljs.initHighlightingOnLoad();
    }

    $(document).on("change", "#commentform #author", function () {
        return ValidateAuthor(this);
    });

    $(document).on("change", "#commentform #email", function () {
        return ValidateEmail(this);
    });

    $(document).on("click", "#submitComment", function () {
        var _this = this;
        var _form = $(_this).closest("#commentform");
        var _name = _form.find("input[name='author']");
        var _email = _form.find("input[name='email']");
        var _commentId = _form.find("input[name='commentid']").val();
        var _comment_value = _form.find("textarea[name='comment']").val();
        var _postId = $("input[name='postId']").val();
        var validate_author = ValidateAuthor(_name);
        var validate_email = ValidateEmail(_email);

        var data = {
            "PostId": _postId,
            "CommentId": _commentId,
            "Author": _name.val(),
            "Email": _email.val(),
            "Comment": _comment_value
        };

        if (validate_author && validate_email) {
            $.kzAjax("/api/comment/add", "POST", JSON.stringify(data));
        }
    });

    function ValidateEmail(emailControl) {
        var _value = $(emailControl).val();
        var _error_field = $(emailControl).closest("div").find(".comment-email-error");

        if (typeof _value != 'undefined' && _value.trim() != '') {
            _error_field.addClass("hide");
            $(emailControl).removeClass("field-error");
            if (!validateEmail(_value)) {
                _error_field.text("Please enter a valid email address");
                _error_field.removeClass("hide");
                $(emailControl).addClass("field-error");
                return false;
            }
        } else {
            _error_field.text("Please enter your email");
            _error_field.removeClass("hide");
            $(emailControl).addClass("field-error");
            return false;
        }
        return true;
    }

    function ValidateAuthor(authorControl) {
        var _value = $(authorControl).val();
        var _error_field = $(authorControl).closest("div").find(".comment-name-error");
        if (typeof _value != 'undefined' && _value.trim() != '') {
            _error_field.addClass("hide");
            $(authorControl).removeClass("field-error");
            return true;
        } else {
            _error_field.text("Please enter your name");
            _error_field.removeClass("hide");
            $(authorControl).addClass("field-error");
            return false;
        }
    }

    // Reply comment 
    $(document).on("click", ".comment-reply", function (source) {

        var commentid = $(source.target).attr("data-comment-id");
        $("#comment .comment-id").val(commentid);
    });
});