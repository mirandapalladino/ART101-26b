let environmentTitle = "Redrocket's house!!";

let environmentElements = [
    "pet alien",
    "fuel coffee kettle",
    "planetarium",
    "house plant (for oxygen)",
    "alien toys",
    "black hole carpet",
];

let html = "";
let index = 0;

$("#show-more").click(function () {
    if (index <= 5) {
        html = html + "<li>" + environmentElements[index] + "</li>";
        index = index + 1;
        $("#appliance-list").html(html);
    } else {
        $("#show-more").html("thats it!");
    }
});
