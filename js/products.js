$(document).ready(function () {
    $.getJSON("http://api.cherry-shop.com/products/getAll", function (products) {
        $.each(products, function (i, product) {
            $("#products-list").append("<li><a href='http://cherry-shop.com/products/" + product.id + "'>" + product.product_name + "</a></li>");
        })
    });
});