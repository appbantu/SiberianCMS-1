
App.factory('Contact', function($http, Url, httpCache) {

    var factory = {};

    factory.value_id = null;

    factory.find = function() {

        if(!this.value_id) return;

        return $http({
            method: 'GET',
            url: Url.get("contact/mobile_view/find", {value_id: this.value_id}),
            cache: true,
            responseType:'json'
        });
    };

    factory.post = function(form) {

        if(!this.value_id) return;

        var url = Url.get("/contact/mobile_form/post", {value_id: this.value_id});

        return $http.post(url, form);
    };

    return factory;
});