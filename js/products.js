$(document).ready(function () {
    $.getJSON("http://api.cherry-shop.com/products/getAll.php", function (data) {
        $.each(data, function (i, product) {
            $("#products-list").append("<li><a href='product.html'>" + product.product_name + "</a></li>");
        })
    });
});