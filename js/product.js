$(document).ready(function () {
    // Получение ID
    const url = window.location.href;
    const id = parseInt(url.substr(url.lastIndexOf('/') + 1));
    // Получение продукта
    $.ajax("http://api.cherry-shop.com/products/get", {
        data: {id: id},
        xhrFields: {
            withCredentials: true
        },
        async: false,
        dataType: "json"
    }).done(function (product) {
        // Установка атрибутов
        $("#name").append(product.product_name);
        $("#price").append(product.price);
        $("#number").append(product.number);
        $("#product-image").attr("src", product.image);
    }).fail(function (data, status) {
        alert(status + " " + data.status);
    });
});