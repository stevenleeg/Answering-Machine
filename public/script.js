function showForm() {
    $("#screen, #form").fadeIn(100);
    $("#name, #content").val("");
}

function hideForm() {
    $("#screen, #form").hide();
}

function submitForm() {
    // Do some vaildation
    $("#name, #content").css("border-color", "#000");
    var error = false;
    if($("#name").val().length < 3) {
        $("#name").css("border-color", "#FF0000");   
        error = true;
    }
    if($("#content").val().length < 3) {
        $("#content").css("border-color", "#FF0000");   
        error = true
    }
    if(error == true) return;

    hideForm();
    $.post("/submit", {
        "author": $("#name").val(),
        "content": $("#content").val()
    }, postSubmit, "json");
    var msg = $(".messagetpl").clone();
    msg.children(".meta").children(".name").text($("#name").val());
    msg.children(".content").text($("#content").val());
    msg.attr("class", "message");
    msg.insertAfter(".top");
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
