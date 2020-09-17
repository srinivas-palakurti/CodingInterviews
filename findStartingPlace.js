/* const findStartingPlace = (a) => {
  var a1 = a.map(function (tuple) {
    return tuple[0];
  });

  var a2 = a.map(function (tuple) {
    return tuple[1];
  });

  function difference(a1, a2) {
    var result = [];
    for (var i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) === -1) {
        result.push(a1[i]);
      }
    }
    return result;
  }

  console.log(difference(a1, a2));
} */

const findStartingPlace = (placeArr) => {
  // will check empty array places and return invalid trips message
  if (!placeArr.length) {
    return "Invalid trips";
  }

  const startElement = [];
  const endElement = [];

  // looping over places array to get inividual startingPoint and endingPoint arrays
  for (const element of placeArr) {
    if (element.length === 2) {
      startElement.push(element[0]);
      endElement.push(element[1]);
    } else {
      return "Not having valid staring place";
    }
  }

  // will filter starting place from startElement Array, starting place should not come in endElement Array
  const startinPlace = startElement.filter(
    (element) => endElement.indexOf(element) === -1
  );

  console.log(startinPlace[0]);
  return startinPlace[0];
};

const exampleTrips = [
  ["Cologne", "Berlin"],
  ["Munich", "Cologne"],
  ["YourPlace", "Munich"],
];
const exampleTrips2 = [
  ["A", "B"],
  ["B", "C"],
  ["C", "D"],
];

findStartingPlace(exampleTrips);
findStartingPlace(exampleTrips2);
