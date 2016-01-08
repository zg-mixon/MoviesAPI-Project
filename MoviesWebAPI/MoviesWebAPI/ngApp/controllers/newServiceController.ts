namespace MoviesWebAPI.Controllers {

    export class FortuneController {
        public fortune;

        constructor(private Fortune) {
            this.fortune = Fortune.fortuneRoll();
        }

        roll() {
            this.fortune = this.Fortune.fortuneRoll();
        }
    }
}