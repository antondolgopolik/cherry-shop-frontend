$.ajax("http://api.cherry-shop.com/login/isAuthorized", {
    xhrFields: {
        withCredentials: true
    },
    async: false
}).fail(function () {
    window.location.replace("http://cherry-shop.com/login");
});