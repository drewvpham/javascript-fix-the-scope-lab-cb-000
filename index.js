var animal = 'car'

function myAnimal() {
  var animal='dog'
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat'

  return animal
}

function add2(n) {
  const two = 2

  return n + two
}

var funkyFunction = function() { // funkyFunction
  return function() { // funkyFunction()
    return "FUNKY!" // funkyFunction()()
  }
}

// We want this to return "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()
