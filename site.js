/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.

            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: 'IMDB + Michaels Top 8 Movies',
            owner: 'Michael',
            github: 'https://github.com/bojangles77/Byrnes-P3'
      }
    },
<<<<<<< HEAD
=======



>>>>>>> 6ed3604acaea1a14f6886ced7800aeb08032be38
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            getMonthText(dateArray) {
              switch(released[1]) {
                case "1":
                  released[1] = "January";
                  break;
                case "2":
                  released[1] = "February";
                  break;
                case "3":
                  released[1] = "March";
                  break;
                case "4":
                  released[1] = "April";
                  break;
                case "5":
                  released[1] = "May";
                  break;
                case "6":
                  released[1] = "June";
                  break;
                case "7":
                  released[1] = "July";
                  break;
                case "8":
                  released[1] = "August";
                  break;
                case "9":
                  released[1] = "September";
                  break;
                case "10":
                  released[1] = "October";
                  break;
                case "11":
                  released[1] = "November";
                  break;
                case "12":
                  released[1] = "December";
                  break;


              }
            }
      }
})

vue_app.mount("#vue_app")
