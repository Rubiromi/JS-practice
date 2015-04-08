// var firstNum = prompt("Pick a first number!");
// confirm("You picked " + firstNum + ".  Is this correct?");
// alert("First number is " + firstNum + ".");
//
// var secondNum = prompt("Pick a second number!");
// confirm("You picked " + secondNum + ".  Is this correct?");
// alert("Second number is " + secondNum + ".");
//
// var sum = Number(firstNum) + Number(secondNum);
// alert("The sum of two numbers you picked is " + sum + ".");
//
// function playWithNums(a, b, c) {
//   var a = Number(firstNum);
//   var b = Number(secondNum);
//   var c = sum;
//   var result = c - (a + b);
//   if(result == 0) {
//     alert("Your result is 0. It means this function is working!");
//   } else {
//     alert("This is a broken function...");
//   }
// }

// playWithNums(firstNum, secondNum, sum);




// function countAs() {
//   var phrase = prompt("Please enter some phrase.");
//   if(typeof(phrase) != "string") {
//     alert("That's not a valid entry!");
//     return false;
//   } else {
//     var aCount = 0;
//     for(var index = 0; index < phrase.length; index++) {
//       if(phrase.charAt(index) == 'a' || phrase.charAt(index) == 'A') {
//         aCount++;
//       }
//     }
//     alert("There are " + aCount + " A's in \"" + phrase + "\".");
//     return true;
//   }
// }
//
// countAs()




// var array = ["Clint", "Hiromi", "Whit", "Juliet", "McLaine"];
// array[0] = "Clinton";
// alert(array[array.length - array.length]);
//
//
// var hush2 = [["Clint", 45], ["Hiromi", 44], ["Whit", 19]];
// hush2[1][1] = 27;
// alert(hush2[1]);
//
// var bothArray = [array, hush2];
// alert(bothArray);
// alert(bothArray[1][2][0]);




// var num = [2, 5, 8, 4, 12, 7, 9, 6, 11];
//
// num[2] = undefined;
//
// for(var i = 0; i < num.length; i++) {
//   console.log("The value in cell " + i + " is " + num[i]);
// }
//
//
// var evenCount = 0;
//
// for(var i = 0; i < num.length; i++) {
//   if(num[i] % 2 == 0) {
//     evenCount++;
//   } else {
//     num[i] = undefined;
//   }
// }
// console.log(num);
// console.log(evenCount);






function addPassenger(name, list) {
  if(list.length == 0) {
    list.push(name);
  } else {
    for(var i = 0; i < list.length; i++) {
      if(list[i] == undefined) {
        list[i] = name;
        return list;
      } else if(i == list.length - 1){
        list.push(name);
        return list;
      }
    }
  }
}


var passengerList = [];

passengerList = addPassenger("Clint", passengerList);
passengerList = addPassenger("Hiromi", passengerList);
passengerList = addPassenger("Whit", passengerList);
passengerList = addPassenger("Juliet", passengerList);
passengerList = addPassenger("McLaine", passengerList);
passengerList = addPassenger("Swarley", passengerList);



function deletePassenger(name, list) {
  if(list.length == 0) {
    console.log("List is empty!");
  } else {
    for(var i = 0; i < list.length; i++) {
      if(list[i] == name) {
        list[i] = undefined;
        return list;
      } else if (i == list.length - 1) {
        console.log("Passenger not found!");
      }
    }
  }
  return list;
}
