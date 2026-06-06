let environmentTitle = "Redrocket's house!!";

let environmentElements = ["pet alien", "fuel coffee kettle", "planetarium", "house plant (for oxygen)", "alien toys", "black hole carpet"];

let html = ""
let index = 0;

let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]

function updateValues(text) {
    if(index <= 5) {
        html = html + "<li>" + text + "</li>"
        $("#appliance-list").html(html)
    } else {
        $("#show-more").html("thats it!")
    }
}

$("#show-more").click(function() {
    updateValues(environmentElements[index]);
    index = index + 1;
})

$("#planet").click(function() {
    let planet = prompt("Name any planet")

    if(!planets.includes(planet)) {
        alert("I dont know that planet. try typing it in lowercase")
    } else {
        if (planet == "earth") {
            $("#planet-image").attr("src", "https://science.nasa.gov/wp-content/uploads/2024/03/blue-marble-apollo-17-16x9-1.jpg?resize=600,338")
        } else if (planet == "venus") {
            $("#planet-image").attr("src", "https://science.nasa.gov/wp-content/uploads/2024/03/venus-mariner-10-pia23791-fig2-16x9-1.jpg?resize=600,338")
        } else if (planet == "mars") {
            $("#planet-image").attr("src", "https://science.nasa.gov/wp-content/uploads/2024/03/mars-full-globe-16x9-1.jpg?resize=600,338")
        } else if (planet == "mercury") {
            $("#planet-image").attr("src", "https://science.nasa.gov/wp-content/uploads/2024/03/pia15162-mercury-basins-messenger-16x9-1.jpg?resize=600,338")
        } else if (planet == "jupiter") {
            $("#planet-image").attr("src", "https://science.nasa.gov/wp-content/uploads/2024/03/jupiter-marble-pia22946-16x9-1.jpg?resize=600,338")
        } else if (planet == "saturn") {
            $("#planet-image").attr("src", "https://science.nasa.gov/wp-content/uploads/2023/05/saturn-farewell-pia21345-sse-banner-1920x640-1.jpg?resize=600,200")
        } else if (planet == "uranus") {
            $("#planet-image").attr("src", "https://science.nasa.gov/wp-content/uploads/2024/03/uranus-pia18182-16x9-1.jpg?resize=600,338")
        } else if (planet == "neptune") {
            $("#planet-image").attr("src", "https://science.nasa.gov/wp-content/uploads/2024/03/pia01492-neptune-full-disk-16x9-1.jpg?resize=600,338")
        } else if (planet == "pluto") {
            $("#planet-image").attr("src", "https://science.nasa.gov/wp-content/uploads/2024/03/pluto-new-horizons-pia20291-16x9-1.jpg?resize=768,432")
        }
    }
    
})