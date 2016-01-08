var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Services;
    (function (Services) {
        var Fortune = (function () {
            function Fortune() {
            }
            Fortune.prototype.fortuneRoll = function () {
                var roll = Math.random();
                if (roll >= 0 && roll <= .33) {
                    return "Your fortune is that you rolled low and will die soon!";
                }
                else if (roll > .33 && roll <= .66) {
                    return "Your fortune is okay, your life is average in every way!";
                }
                else
                    return "Your fortune is excellent, your life will be filled with joy!";
            };
            return Fortune;
        })();
        angular.module('MoviesWebAPI').service('Fortune', Fortune);
    })(Services = MoviesWebAPI.Services || (MoviesWebAPI.Services = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
