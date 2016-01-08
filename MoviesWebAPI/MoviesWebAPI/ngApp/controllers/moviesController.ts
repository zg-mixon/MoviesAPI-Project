namespace MoviesWebAPI.Controllers {

    export class MoviesController {

        public movies;
        public genres;
        public selectedGenre;
        //always use fat arrow in AJAX calls
        constructor(private $http) {
            this.$http.get('/api/movies')
                .then((response) => {
                    this.movies = response.data;
                })
                .catch((response) => {

                })
            this.$http.get('/api/genres')
                .then((response) => {
                    console.log(response);
                    this.genres = response.data;
                    console.log(this.genres);
                })
          
        }
        public getMovies() {
            this.$http.get(`/api/genres/${this.selectedGenre.id}`)
                .then((response) => {
                    this.movies = response.data.movies;
                    console.log(this.genres);
                })
            }
        }
    }
                    
         

               

       



        