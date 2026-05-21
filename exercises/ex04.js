
let count=0;
let colors=["Orchid", "Coral", "HotPink", "Plum"];
let colorCount;

$("#needy-button").click( function(){
    
    count = count +1;
    
    colorCount=count=-1;

    $("#needy-button").html("you clicked me " + count + " and your favourite color today is: " + colors[count] );

    $("#needy-button").css( "background-color", colors[count]);  

    $("html").css( "background-color", colors[count=1]);

    

});