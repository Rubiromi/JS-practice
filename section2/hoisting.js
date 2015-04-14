// function capacityStatus(numGuests, capacity) {
//   var noSeats = function() {
//     alert("No seats left!");
//     return false;
//   }
//   var seatsAvailable = function() {
//     alert("There are " + (capacity - numGuests) + " seats available!");
//     return true;
//   }
//
//   if(numGuests == capacity) {
//     noSeats();
//   } else {
//     seatsAvailable();
//   }
// }
//
// capacityStatus(100, 100);

function capacityStatus(numGuests, capacity) {

  if(numGuests == capacity) {
    noSeats();
  } else {
    seatsAvailable();
  }

  function noSeats() {
    alert("No seats left!");
    return false;
  }
  function seatsAvailable() {
    alert("There are " + (capacity - numGuests) + " seats available!");
    return true;
  }


}

capacityStatus(32, 100);
