function showForm() {
    $("#screen, #form").fadeIn(100);
}

function hideForm() {
    $("#screen, #form").hide();
}

function submitForm() {
    hideForm();
    $.post("/submit", {
        "author": $("#name").val(),
        "content": $("#content").val()
    }, postSubmit, "json");
    var msg = $(".messagetpl").clone();
    msg.children(".meta").children(".name").text($("#name").val());
    msg.children(".content").text($("#content").val());
    msg.attr("class", "message");
    msg.insertBefore(".message");
    msg.hide();
    msg.fadeIn(250);
}

function postSubmit(data) {
    if(data['status'] != 200) {
        return alert("WHAT");
    }
}

$(document).ready(function() {
    $("#create").click(showForm);
    $("#screen").click(hideForm);
    $("#submit").click(submitForm);
});
