var CategoryManage = (function () {
    const form = $('#modal-category .modal-body');
    const form_id = form.find('input[name=Id]');
    const form_title = form.find('#category-title');
    const form_url = form.find('#category-url');
    const form_code = form.find('#category-code');
    const form_position = form.find('#category-position');
    const form_note = form.find('#category-note');
    const form_publish = form.find('#category-publish');
    const form_ontab = form.find('#category-showOnTab');
    const form_submit = form.find('.btn-category-submit');

    const sweetAlert = Swal.mixin({
        buttonsStyling: !1,
        target: "#page-container",
        customClass: {
            confirmButton: "btn btn-success m-1",
            cancelButton: "btn btn-danger m-1",
            input: "form-control"
        }
    });

    function registerEvents() {
        $('.btn-category-update').click(function (e) {
            if (e.currentTarget.type === 'button' && typeof e.currentTarget.attributes['data-model'] != 'undefined') {
                let data = e.currentTarget.attributes['data-model'].value;
                let model = JSON.parse(data);
                setFormData(model);
            }
        });

        $('.btn-category-add').click(function (e) {
            clearFormData();
        });

        $('.btn-category-delete').click(function (e) {
            let _this = this;
            if (e.currentTarget.type === 'button' && typeof e.currentTarget.attributes['data-id'] != 'undefined') {
                let isdelete = JSON.parse(e.currentTarget.attributes['data-delete'].value.toLocaleLowerCase());
                let warning = "This category will move to trash bin, you can recovery in future!";
                let textConfirm = isdelete ? "Yes, delete it!" : "Yes, let's move it!";
                if (isdelete) warning = "This category will to permanently delete, you don't recovery in future!"

                sweetAlert.fire({
                    title: "Are you sure?",
                    text: warning,
                    icon: "warning",
                    showCancelButton: !0,
                    customClass: {
                        confirmButton: "btn btn-danger m-1",
                        cancelButton: "btn btn-secondary m-1"
                    },
                    confirmButtonText: textConfirm,
                    html: !1,
                    preConfirm: e => new Promise((e => {
                        setTimeout((() => {
                            e()
                        }), 50)
                    }))
                }).then((t => {
                    if (t.value) {
                        let id = e.currentTarget.attributes['data-id'].value;

                        let tk = $('input[name="__RequestVerificationToken"]').val();

                        let form = new FormData();
                        form.append('categoryId', id);
                        form.append('isDelete', isdelete);
                        form.append('__RequestVerificationToken', tk);

                        $.ajax({
                            url: "/api/manage/category",
                            type: "DELETE",
                            data: form,
                            contentType: false,
                            processData: false,
                            success: function (data, status, xhr) {
                                if (typeof data != 'undefined' && data.successed && data.data) {
                                    $(_this).closest('tr').slideUp(500);
                                    let msgdel = "This category has been moved to the trash!";
                                    if (isdelete) msgdel = "The category was successfully deleted!"
                                    sweetAlert.fire(isdelete ? "Deleted!" : "Trash!", msgdel, "success");
                                }
                                else
                                    sweetAlert.fire("Oops...", "Something went wrong!", "error");
                            }, error: function (error, status, xhr) {
                                console.log(error);
                                let msg = 'Something went wrong!';
                                if (typeof error.responseJSON != 'undefined' && error.responseJSON.message.length > 0)
                                    msg = error.responseJSON.message;

                                sweetAlert.fire("Warning", msg, "warning");
                            }
                        });


                    }
                }))


            }
        });

        $('.btn-category-submit').click(function (e) {
            let _id = $(form_id).val();
            let isUpdate = _id.length > 0 ? true : false;
            let _endpoint = isUpdate ? '/api/manage/category?id=' + _id : '/api/manage/category'
            let _form = $(form).find('form')[0];
            let _form_data = new FormData(_form);
            $.ajax({
                url: _endpoint,
                type: isUpdate ? "PUT" : "POST",
                data: _form_data,//JSON.stringify(_data),
                contentType: false,
                processData: false,
                async: false, //_async,
                success: function (data, status, xhr) {
                    if (data != null && typeof data != 'undefined') {
                        if (data.responseCode == 200 && data.successed == true) {
                            let msg = "Everything was updated perfectly!";
                            if (!isUpdate)
                                msg = "Category added successfully!";
                            sweetAlert.fire("Success", msg, "success");
                            setTimeout(() => { location.reload(true); clearFormData(); }, 1500);
                        } else {
                            let msg = 'Something went wrong!';
                            if (typeof data != 'undefined' && typeof data.message != 'undefined' && data.message.length > 0)
                                msg = data.message;
                            sweetAlert.fire("Oops...", msg, "error");
                        }
                    }
                }
            });
        });

        $('#enable-url-edit').change(function (e) {
            let checked = $(e.currentTarget).prop('checked');
            form_url.prop('readonly', !checked);
        })
    }

    function setFormData(model) {
        if (model == null || typeof model === 'undefined') return false;

        form_id.val(model.Id);
        form_title.val(model.Title);
        form_url.val(model.Url);
        form_code.val(model.Code);
        form_position.val(model.Position);
        form_note.val(model.Note);
        form_ontab.prop('checked', model.ShowOnTab);
        form_publish.prop('checked', model.Publish);
    }

    function clearFormData() {
        form_id.val('');
        form_title.val('');
        form_url.val('');
        form_code.val('');
        form_position.val('0');
        form_note.val('');
        form_ontab.prop('checked', false);
        form_publish.prop('checked', true);
    }

    return {
        Init: function () {
            registerEvents();
        }
    }
});

new CategoryManage().Init();
