function changeText() {
    var textsArray = ["Sibosh", "Nthabi", "Nqo", "Alex"];
    var number = getRandomNumberBetween(0, textsArray.length-1);
    console.log("index: ", number);
    document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}
