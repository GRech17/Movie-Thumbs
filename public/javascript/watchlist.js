const watchList = async function (movie) {
    console.log(movie)
const response = await fetch('/api/watchlists', {
    method: 'POST', 
    body: JSON.stringify ({movie}),
    headers: {
        'Content-Type': 'application/json'

    }
}
)
if (response.ok) {
    console.log('movie saved')
} else {
    console.log(response)
}
}

//document.getElementById("list-title").innerHTML +=
 //   ('<tr>' + movie + '</tr>')

let movieOne = document.getElementById('movieOne');
let movieTwo = document.getElementById('movieTwo');

let watchOne = document.getElementById('watchBtnOne');
let watchTwo = document.getElementById('watchBtnTwo')

watchOne.addEventListener("click", () => {
    let title = movieOne.textContent
    console.log(title)
    watchList(title)
})
watchTwo.addEventListener("click", () => {
    let title = movieTwo.textContent
    console.log(title)
    watchList(title)
})

