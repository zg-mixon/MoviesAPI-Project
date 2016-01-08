var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Controllers;
    (function (Controllers) {
        var FortuneController = (function () {
            function FortuneController(Fortune) {
                this.Fortune = Fortune;
                this.fortune = Fortune.fortuneRoll();
            }
            FortuneController.prototype.roll = function () {
                this.fortune = this.Fortune.fortuneRoll();
            };
            return FortuneController;
        })();
        Controllers.FortuneController = FortuneController;
    })(Controllers = MoviesWebAPI.Controllers || (MoviesWebAPI.Controllers = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
