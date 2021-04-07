var PostManage = function () {
    var initTableManage = function () {
        var table = $('#manage');

        var oTable = table.dataTable({
            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                "aria": {
                    "sortAscending": ": Sắp xếp cột tăng dần",
                    "sortDescending": ": Sắp xếp cột giảm dần"
                },
                "processing": "Đang xử lý...",
                "emptyTable": "Không có dữ liệu",
                "info": "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
                "infoEmpty": "Đang xem 0 đến 0 trong tổng số 0 mục",
                "infoFiltered": "(được lọc từ _MAX_ mục)",
                "lengthMenu": "Xem _MENU_ mục",
                "search": "Tìm:",
                "zeroRecords": "Không tìm thấy dòng nào phù hợp"
            },

            // Or you can use remote translation file
            //"language": {
            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Vietnamese.json'
            //},

            buttons: [
                { extend: 'print', className: 'btn dark btn-outline' },
                { extend: 'copy', className: 'btn red btn-outline' },
                { extend: 'pdf', className: 'btn green btn-outline' },
                { extend: 'excel', className: 'btn yellow btn-outline ' }
                //{ extend: 'csv', className: 'btn purple btn-outline ' },
                //{ extend: 'colvis', className: 'btn dark btn-outline', text: 'Columns' }
            ],

            // setup responsive extension: http://datatables.net/extensions/responsive/
            responsive: true,

            //"ordering": false, disable column ordering
            "paging": false, //disable pagination
            "info": false,
            "order": [
                [3, 'asc']
            ],

            //"lengthMenu": [
            //    [10, 20, 50, 100, -1],
            //    [10, 20, 50, 100, "All"] // change per page values here
            //],
            // set the initial value
            //"pageLength": 10,

            //"dom": "<'row' <'col-md-12'>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
        });

        // handle datatable custom tools
        $(document).on("click", "#manage_tools > li > a.tool-action", function () {
            var action = $(this).attr('data-action');
            oTable.DataTable().button(action).trigger();
        });
    }

    var UIConfirmations = function () {
        var handleUIConfirmations = function () {
            $('.bs_confirmation_delete').on('confirmed.bs.confirmation', function () {
                var button = $(this);
                var data_id = button.attr('data-id');
                $.kzAjax('/post/manage/delete', 'POST', { id: data_id }, function (response) {
                    if (response.isSuccess) {
                        $.kzNotify("Delete success!", 'success', '250');
                        button.closest("tr").remove();
                    }
                    else {
                        $.kzNotify("Delete Failed!", 'success', '250');
                    }
                });
            });

            $('.bs_confirmation_delete').on('canceled.bs.confirmation', function () {
            });
        }

        return {
            //main function to initiate the module
            init: function () {
                handleUIConfirmations();
            }
        };
    }();

    var UITagSuggession = function () {
        return $.kzAjax("api/tag/suggestion",
            "GET",
            '',
            function (res) {
                var elt = $('.bootstrap-tagsinput input');

                elt.tagsinput({
                    typeaheadjs: {
                        name: 'Tags',
                        source: res
                    }
                });
            });
    }

    return {
        //main function to initiate the module
        init: function () {
            if (!jQuery().dataTable) {
                return;
            }
            initTableManage();

            UIConfirmations.init();

            UITagSuggession();

            //init maxlength handler
            $('.maxlength-handler').maxlength({
                limitReachedClass: "label label-danger",
                alwaysShow: true,
                threshold: 5
            });

            if (window.tinyMCE !== undefined) {
                window.tinyMCE.init({
                    selector: '.editor-full',
                    themes: "silver",
                    skin: "oxide",
                    height: 500,
                    relative_urls: false, // avoid image upload fuck up
                    browser_spellcheck: true,
                    branding: false,
                    fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
                    plugins: "advlist autolink hr autosave link image lists charmap print preview hr anchor pagebreak spellchecker searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking save table directionality template paste codesample imagetools",
                    toolbar: "undo redo | formatselect | fontsizeselect | bold italic strikethrough forecolor backcolor | removeformat | link image codesample media | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code | fullscreen",
                    paste_data_images: true,
                    images_upload_url: '/FileUpload',
                    images_upload_credentials: true,
                    content_css: "/admin/plugins/tinymce/tinymce-editor.css",
                    mobile: {
                        theme: 'mobile'
                    }
                });
            }
        }
    };
}();

jQuery(document).ready(function () {
    PostManage.init();
});