let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; 

$("#needy-button").click(function () { 
   $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count] );
   $("body").css("background-color", colors[count]);
   count = count + 1;

   if (count==4) 
});
