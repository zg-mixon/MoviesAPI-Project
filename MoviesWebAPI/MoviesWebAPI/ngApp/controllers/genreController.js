var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Controllers;
    (function (Controllers) {
        var GenreController = (function () {
            function GenreController($http) {
                var _this = this;
                this.$http = $http;
                this.$http.get('/api/genres')
                    .then(function (response) {
                    _this.genres = response.data;
                });
            }
            return GenreController;
        })();
        Controllers.GenreController = GenreController;
    })(Controllers = MoviesWebAPI.Controllers || (MoviesWebAPI.Controllers = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
