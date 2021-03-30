let api_key = "068bcb78c00e7bd39492e93efa6cd1c2"


fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&include_adult=false&include_video=false&page=3`)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        let randomPage = Math.floor(Math.random() * (response.total_pages - 1) + 1);

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&include_adult=false&include_video=false&page=${randomPage}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                console.log(response)


                // query selector to display movie name and poster
                let movieName = document.querySelector('#movie-name')
                let moviePoster = document.querySelector('#movie-poster')
                // second movie
                let movieName2 = document.querySelector('#movie-name2')
                let moviePoster2 = document.querySelector('#movie-poster2')

                // grab random number and use random number to grab random movie
                let randomNumber = Math.floor(Math.random() * (response.results.length - 1) + 1);
                let movieTitle = response.results[randomNumber].title;

                // grab second random number to grab different random movie
                let randomNumber2 = Math.floor(Math.random() * (response.results.length - 1) + 2);
                let movieTitle2 = response.results[randomNumber2].title;

                // if two random numbers are equal then run random number again
                if (randomNumber === randomNumber2) {
                    // grab random number and movie title
                    let randomNumber = Math.floor(Math.random() * (response.results.length - 1) + 1);
                    let movieTitle = response.results[randomNumber].title;

                    // grab second random number and movie
                    let randomNumber2 = Math.floor(Math.random() * (response.results.length - 1) + 2);
                    let movieTitle2 = response.results[randomNumber2].title;

                    // console logs
                    // first random number and resulting movie
                    console.log(randomNumber);
                    console.log(movieTitle);
                    // second random number and resulting movie
                    console.log(randomNumber2);
                    console.log(movieTitle2);
                    // array list of movies from API
                    console.log(response)

                    // DISPLAY MOVIE INFO
                    // FIRST MOVIE
                    //display movie name
                    movieName.innerHTML = response.results[randomNumber].title;
                    // display movie poster
                    moviePoster.src = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2/' + response.results[randomNumber].poster_path
                    // END FIRST MOVIE

                    // SECOND MOVIE
                    //display  second movie name
                    movieName2.innerHTML = response.results[randomNumber2].title;
                    // display second movie poster
                    moviePoster2.src = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2/' + response.results[randomNumber2].poster_path
                    //END SECOND MOVIE
                } else {
                    // console logs
                    // first random number and resulting movie
                    console.log(randomNumber);
                    console.log(movieTitle);
                    // second random number and resulting movie
                    console.log(randomNumber2);
                    console.log(movieTitle2);
                    // array list of movies from API
                    console.log(response)

                    // DISPLAY MOVIE INFO
                    // FIRST MOVIE
                    //display movie name
                    movieName.innerHTML = response.results[randomNumber].title;
                    // display movie poster
                    moviePoster.src = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2/' + response.results[randomNumber].poster_path
                    // END FIRST MOVIE

                    // SECOND MOVIE
                    //display  second movie name
                    movieName2.innerHTML = response.results[randomNumber2].title;
                    // display second movie poster
                    moviePoster2.src = 'https://www.themoviedb.org/t/p/w150_and_h225_bestv2/' + response.results[randomNumber2].poster_path
                    //END SECOND MOVIE
                }
            });
    });