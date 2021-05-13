$(document).ready(function () {
    $("#signUpButton").click(signUpButtonClick);
});

function signUpButtonClick(event) {
    // Убирает обработчик по умолчанию
    event.preventDefault();
    // Проверка ввода
    const password = $("#password").val();
    const repeated_password = $("#repeated-password").val();
    if (password !== repeated_password) {
        alert("Passwords differ!");
    } else {
        // Формирование запроса
        const data = {
            login: $("#login").val(),
            password: password,
        };
        // Запрос
        $.ajax("http://api.cherry-shop.com/registration/signUp", {
            type: "POST",
            data: data,
            xhrFields: {
                withCredentials: true
            }
        }).done(function () {
            window.location.replace("http://cherry-shop.com/login");
        }).fail(function (data, status) {
            alert(status + " " + data.status);
        });
    }
}