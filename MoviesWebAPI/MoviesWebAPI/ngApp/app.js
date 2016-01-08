var MoviesWebAPI;
(function (MoviesWebAPI) {
    angular.module("MoviesWebAPI", ['ngRoute'])
        .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/ngApp/views/moviesList.html',
            controller: MoviesWebAPI.Controllers.MoviesController,
            controllerAs: 'moviesList'
        })
            .when('/genre', {
            templateUrl: '/ngApp/views/moviesList.html',
            controller: MoviesWebAPI.Controllers.GenreController,
            controllerAs: 'genreCont'
        })
            .when('/service', {
            templateUrl: '/ngApp/views/serviceView.html',
            controller: MoviesWebAPI.Controllers.FortuneController,
            controllerAs: 'fortuneController'
        });
    });
})(MoviesWebAPI || (MoviesWebAPI = {}));
