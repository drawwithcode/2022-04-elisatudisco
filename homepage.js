//when you click on the homepage you can go the the drawing page
const urlString = window.location.href
let url = new URL(urlString)

function setup() {
}

function draw() {
}

function mouseClicked() {
    window.open('./home.html', '_self')
}

