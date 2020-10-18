//STEP 1

var step1 = function () {
    "use strict";
    window.console.log("Step 1");
    var myFavoriteMovies = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca"];
    window.console.log("Second movie in the array is " + myFavoriteMovies[1]);
}

//STEP 2

var step2 = function () {
    "use strict";
    window.console.log("Step 2");
    var myFavoriteMovies = new Array(5);
    myFavoriteMovies[0] = "Predestination ";
    myFavoriteMovies[1] = "The Godfather";
    myFavoriteMovies[2] = "John Wick";
    myFavoriteMovies[3] = "Gladiator";
    myFavoriteMovies[4] = "Casablanca";
    window.console.log("First movie in the array is " + myFavoriteMovies[0]);
}

//STEP 3

var step3 = function () {
    "use strict";
    window.console.log("Step 3");
    var arrayOfMovies = new Array(5);
    arrayOfMovies[0] = "Predestination ";
    arrayOfMovies[1] = "The Godfather";
    arrayOfMovies[2] = "John Wick";
    arrayOfMovies[3] = "Gladiator";
    arrayOfMovies[4] = "Casablanca";
    arrayOfMovies.splice(2, 0, "A Few Good Men");
    window.console.log("New array length is " + arrayOfMovies.length);
}


//STEP 4

var step4 = function () {
    "use strict";
    window.console.log("Step 4");
    var arrayOfMovies = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca"];
    arrayOfMovies.splice(0, 1);
    window.console.log(" After deletion, array contents are: " + arrayOfMovies);
}

//STEP 5

var step5 = function () {
    "use strict";
    window.console.log("Step 5");
    var arrayOfMovies = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca", "Mad Max", "Star Wars"]
    for (var index = 0; index < 7; index++) {
        window.console.log(arrayOfMovies[index]);
    }
}

//STEP 6

var step6 = function () {
    "use strict";
    window.console.log("Step 6");
    var arrayOfMovies = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca", "Mad Max", "Star Wars"]
    for (var movie in arrayOfMovies) {
        window.console.log(arrayOfMovies[movie]);
    }
}


//STEP 7

var step7 = function () {
    "use strict";
    window.console.log("Step 7");
    var arrayOfMovies = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca", "Mad Max", "Star Wars"]
    arrayOfMovies.sort()
    for (var movie in arrayOfMovies) {
        window.console.log(arrayOfMovies[movie]);
    }
}


//STEP 8

var step8 = function () {
    "use strict";
    window.console.log("Step 8");

    var arrayOfMovies = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca", "Mad Max", "Star Wars"]
    window.console.log("\nMovies I like: \n");
    arrayOfMovies.forEach(movie => {
        window.console.log(movie);
    });

    var leastFavMovies = ["Cars", "Coco", "Frozen"];
    window.console.log("\n\nMovies I regret watching: \n");
    leastFavMovies.forEach(movie => {
        window.console.log(movie);
    });
}


//STEP 9

var step9 = function () {
    "use strict";
    window.console.log("Step 9");
    var arrayOfMovies = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca", "Mad Max", "Star Wars"]
    var leastFavMovies = ["Cars", "Coco", "Frozen"];
    var movies = arrayOfMovies.concat(leastFavMovies);
    window.console.log(movies.sort().reverse());
}


//STEP 10

var step10 = function () {
    "use strict";
    window.console.log("Step 10");
    var arrayOfMovies = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca", "Mad Max", "Star Wars"]
    var leastFavMovies = ["Cars", "Coco", "Frozen"];
    var movies = arrayOfMovies.concat(leastFavMovies);
    window.console.log(movies[movies.length - 1]);
}

step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();