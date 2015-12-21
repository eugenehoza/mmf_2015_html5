"use strict";

$(document).ready(function () {
    updateFilelist();
    handleFormSubmit();
});

function updateFilelist() {
    $.ajax({
        url: "http://localhost:3000/files",
        success: function (data) {
            var list = data.files.map(function (filename) {
                return $("<li/>").text(filename);
            });

            $(".file-list").html(list);
        }
    });
}

function handleFormSubmit() {
    var form = $(".file-upload_form")[0];

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        upload();
    });
}

function upload() {
    var input = $(".file-upload_input")[0];

    var data = new FormData();

    data.append('file', input.files[0]);

    $.ajax({
        url: 'http://localhost:3000/upload',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: updateFilelist
    });
}