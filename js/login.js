$(document).ready(function () {
    $("#logInButton").click(logInButtonClick);
});

function logInButtonClick(event) {
    // Убирает обработчик по умолчанию
    event.preventDefault();
    // Формирование запроса
    const data = {
        login: $("#login").val(),
        password: $("#password").val()
    };
    // Запрос
    $.ajax("http://api.cherry-shop.com/login/logIn", {
        data: data,
        xhrFields: {
            withCredentials: true
        }
    }).done(function () {
        window.location.replace("http://cherry-shop.com/home");
    }).fail(function (data, status) {
        alert(status + " " + data.status);
    });
}