let prompt = require("prompt-sync")();
let ratingStr = parseFloat(prompt("Enter the movie rating (0-5): "));

function getStatusBasedOnRating(ratingStr) {
    switch (true) {
            case ratingStr >= 0 && ratingStr <= 2:
                return "Flop";

            case ratingStr >= 2.1 && ratingStr <= 3.4:
                return "Semi-hit";

            case ratingStr >= 3.5 && ratingStr <= 4.5:
                return "Hit";

            case ratingStr >= 4.6 && ratingStr <= 5.0:
                return "Super Hit";

            default:
                return "Invalid rating";
        }
}

let status = getStatusBasedOnRating(ratingStr);
console.log("The movie is: " + status);