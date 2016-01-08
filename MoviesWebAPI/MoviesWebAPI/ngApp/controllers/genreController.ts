﻿namespace MoviesWebAPI.Controllers {

    export class GenreController {

        public genres;

        constructor(private $http: ng.IHttpService) {
            this.$http.get('/api/genres')
                .then((response) => {
                    this.genres = response.data
                });
        }

    }
}