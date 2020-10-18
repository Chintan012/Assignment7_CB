//STEP 1

window.console.log("Step 1");
var myFavoriteMovies = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca"];
window.console.log("Second movie in the array is " + myFavoriteMovies[1]);

//STEP 2

window.console.log("Step 2");
var arrayOfFiveMovies = new Array(5);
arrayOfFiveMovies[0] = "Predestination ";
arrayOfFiveMovies[1] = "The Godfather";
arrayOfFiveMovies[2] = "John Wick";
arrayOfFiveMovies[3] = "Gladiator";
arrayOfFiveMovies[4] = "Casablanca";
window.console.log("First movie in the array is " + arrayOfFiveMovies[0]);

//STEP 3

window.console.log("Step 3");
var arrayOfMovies = new Array(5);
arrayOfMovies[0] = "Predestination ";
arrayOfMovies[1] = "The Godfather";
arrayOfMovies[2] = "John Wick";
arrayOfMovies[3] = "Gladiator";
arrayOfMovies[4] = "Casablanca";
arrayOfMovies.splice(2,0,"A Few Good Men");
window.console.log("New array length is " + arrayOfMovies.length);

//STEP 4

window.console.log("Step 4");
var movies = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca"];
movies.splice(0,1);
window.console.log(" After deletion, array contents are: " + movies);

//STEP 5

window.console.log("Step 5");
var arrayOf7Movies = ["Predestination", "The Godfather", "John Wick", "Gladiator", "Casablanca", "Mad Max" , "Star Wars"]
for(index = 0; index < 7; index++ ) {
    window.console.log(arrayOf7Movies[index]);
}

//STEP 6

window.console.log("Step 6");
for(var movie in arrayOf7Movies) {
    window.console.log(arrayOf7Movies[movie]);
}

//STEP 7

window.console.log("Step 7");
arrayOf7Movies.sort()
for(var movie in arrayOf7Movies) {
    window.console.log(arrayOf7Movies[movie]);
}

//STEP 8

window.console.log("Step 8");

window.console.log("\nMovies I like: \n");
arrayOf7Movies.forEach(movie => {
    window.console.log(movie);
});

var leastFavMovies = ["Cars", "Coco", "Frozen"];
window.console.log("\n\nMovies I regret watching: \n");
leastFavMovies.forEach(movie => {
    window.console.log(movie);
});

//STEP 9

window.console.log("Step 9");
movies = leastFavMovies.concat(arrayOf7Movies);
window.console.log(movies.sort().reverse());

//STEP 10

window.console.log("Step 10");
window.console.log(movies[movies.length - 1]);


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