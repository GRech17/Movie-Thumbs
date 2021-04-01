let api_key = "068bcb78c00e7bd39492e93efa6cd1c2"
        
// fetch request to pull movies
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        // query selectors to display popular movie list
        // popular movie list
        let popular1 = document.querySelector('#popular1');
        let popular2 = document.querySelector('#popular2');
        let popular3 = document.querySelector('#popular3');
        let popular4 = document.querySelector('#popular4');
        let popular5 = document.querySelector('#popular5');
        // popular movie poster
        let popularPoster1 = document.querySelector('#popular-poster1');
        let popularPoster2 = document.querySelector('#popular-poster2');
        let popularPoster3 = document.querySelector('#popular-poster3');
        let popularPoster4 = document.querySelector('#popular-poster4');
        let popularPoster5 = document.querySelector('#popular-poster5');
        // end query selectors

        // =============================================================
        // =============================================================
        // =============================================================

        // use API to display popular movie list
        // POPULAR MOVIE LIST 
        popular1.innerHTML = response.results[1].title;
        popular2.innerHTML = response.results[2].title;
        popular3.innerHTML = response.results[3].title;
        popular4.innerHTML = response.results[4].title;
        popular5.innerHTML = response.results[5].title;

        // POPULAR MOVIE POSTER
        popularPoster1.src = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2/' + response.results[1].poster_path;
        popularPoster2.src = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2/' + response.results[2].poster_path;
        popularPoster3.src = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2/' + response.results[3].poster_path;
        popularPoster4.src = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2/' + response.results[4].poster_path;
        popularPoster5.src = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2/' + response.results[5].poster_path;
    });