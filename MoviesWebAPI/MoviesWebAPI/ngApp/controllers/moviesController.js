var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Controllers;
    (function (Controllers) {
        var MoviesController = (function () {
            //always use fat arrow in AJAX calls
            function MoviesController($http) {
                var _this = this;
                this.$http = $http;
                this.$http.get('/api/movies')
                    .then(function (response) {
                    _this.movies = response.data;
                })
                    .catch(function (response) {
                });
                this.$http.get('/api/genres')
                    .then(function (response) {
                    console.log(response);
                    _this.genres = response.data;
                    console.log(_this.genres);
                });
            }
            MoviesController.prototype.getMovies = function () {
                var _this = this;
                this.$http.get("/api/genres/" + this.selectedGenre.id)
                    .then(function (response) {
                    _this.movies = response.data.movies;
                    console.log(_this.genres);
                });
            };
            return MoviesController;
        })();
        Controllers.MoviesController = MoviesController;
    })(Controllers = MoviesWebAPI.Controllers || (MoviesWebAPI.Controllers = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
