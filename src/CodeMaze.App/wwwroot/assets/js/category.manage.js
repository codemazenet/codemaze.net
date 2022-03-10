var category_manage = (function () {
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

    function registerEvents() {
        $('.btn-category-update').click(function (e) {
            if (e.currentTarget.type === 'button' && typeof e.currentTarget.attributes['data-model'] != 'undefined') {
                let data = e.currentTarget.attributes['data-model'].value;
                let model = JSON.parse(data);
                setFormData(model);
            }
        });

        $('.btn-category-submit').click(function (e) {
            let _id = $(form_id).val();
            let isUpdate = _id.length > 0 ? true : false;
            let _endpoint = isUpdate ? '/api/manage/category?id='+_id : '/api/manage/category'
            let _form = $(form).find('form')[0];
            let _form_data = new FormData(_form);
            $.ajax({
                url: _endpoint,
                type: isUpdate ? "PUT":"POST",
                data: _form_data,//JSON.stringify(_data),
                contentType: false,
                processData: false,
                async: false, //_async,
                success: function (data, status, xhr) {
                    if (data != null && typeof data != 'undefined') {

                        console.log(data);

                        if (data.responseCode == 200 && data.successed == true && data.data == true) {
                            alert("Successed!!!!");
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
        form_id.val(model.Id);
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

new category_manage().Init();
