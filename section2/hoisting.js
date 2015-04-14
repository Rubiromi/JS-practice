function capacityStatus(numGuests, capacity) {
  var noSeats = function() {
    alert("No seats left!");
    return false;
  }
  var seatsAvailable = function() {
    alert("There are " + (capacity - numGuests) + " seats available!");
    return true;
  }

  if(numGuests == capacity) {
    noSeats();
  } else {
    seatsAvailable();
  }
}

capacityStatus(77, 100);
