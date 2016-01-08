namespace MoviesWebAPI.Services {

    class Fortune {
        fortuneRoll() {
            let roll = Math.random();
            if (roll >= 0 && roll <= .33) {
                return "Your fortune is that you rolled low and will die soon!";
            }
            else if (roll > .33 && roll <= .66) {
                return "Your fortune is okay, your life is average in every way!";
            }
            else return "Your fortune is excellent, your life will be filled with joy!";
        }
    }

    angular.module('MoviesWebAPI').service('Fortune', Fortune);
}