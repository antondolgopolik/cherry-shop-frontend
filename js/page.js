$.ajax("http://api.cherry-shop.com/login/isAuthorized.php", {
    dataType: "json",
    xhrFields: {
        withCredentials: true
    },
    async: false
}).done(function (data) {
    if (!data.isAuthorized) {
        window.location.replace("http://cherry-shop.com/login");
    }
});