// function diffOfSquares(a, b) {
//   return a*a - b*b;
// }



// var diff = function diffOfSquares(a, b) {
//   return a*a - b*b;
// };
//
// console.log(diff(9, 5));

// Now, I'm turning this ^ into anonymous function

var diff = function(a, b) {
  return a*a - b*b;
};

console.log(diff(4, 3));





// var greeting = function() {
//   alert("Thanks for visiting my studio!\n" +
//         "I hope your photo session is cool!");
// };

var greeting;
var newCustomer = true;

if(newCustomer) {
  greeting = function() {
    alert("Welcome to my studio!\n" +
          "I hope your photo session is cool.");
  };
} else {
  greeting = function() {
    alert("Welcome back to my studio!\n" +
          "What can I do for you this time?");
  };
}

closeTerminal( greeting );
function closeTerminal(message) {
  message();
}





var num = [12, 3, 6, 7, 88, 97, 11, 0];
var results = num.map(function(i) { return i * 2; });

console.log(results);
console.log(num);





var isHiromi = true;
// var logo;

// if(isHiromi) {
//   logo = "Ninja";
// } else {
//   logo = "Poop";
// }

var logo = isHiromi && isNakano ? "Ninja" : "Poop";
var isNakano = false;

console.log("Current logo: " + logo);

console.log("Current logo: " + (isHiromi && isNakano ? "Ninja" : "Poop"));






var armory = { addSword: function (sword) {
                  this.swords = this.swords ? this.swords : [ ];
                  this.swords.push(sword);
                }
             };




var array5 = ["Clinton", "Hiromi", "Miku", "McLaine"];
array5.splice(2, 0, "Whitney") && array5.splice(5, 0, "Swarley");
console.log(array5);
