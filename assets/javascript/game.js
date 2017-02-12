

var wins = 0;
var losses = 0;



document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
        toUpperCase();

    console.log(userguess);

}






























// var michaelJordan = ["fullName", "college", "proTeam", "titleCount"];
//     var michaelJordanInfo = ["Michael Jordan", "UNC", "Chicago Bulls", 6, "Carolina Bobcats"];


//     var index = michaelJordan.indexOf("fullName");
//     console.log(michaelJordanInfo[index]);



//     var michaelJordan = {
//       "fullName": "Michael Jordan",
//       "college": "UNC",
//       "age": 60,
//       "bestYears": [1994, 1996, 1999],
//       "favoriteQuote": function() {
//         console.log("Larry Bird sucks");
//       }
//     };


//     michaelJordan.favoriteQuote();