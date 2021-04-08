const { json } = require("sequelize/types");

const watchList = async function (event) {
    event.preventDefault();
    let movie = document.getElementById("title").value;
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

document.getElementById("list-title").innerHTML +=
    ('<tr>' + movie + '</tr>')

    document.querySelector('.watchBtn').addEventListener('submit', watchList)