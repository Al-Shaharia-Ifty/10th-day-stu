// Problem 1: conversion
function radianToDegree(radian) {
  if (typeof radian === "number") {
    const degree = radian * 57.2958;
    return degree;
  } else {
    return "Please provide a number";
  }
}
const totalDegree = radianToDegree(10);
console.log(totalDegree);
// end //
// Problem 2: isJavaScript
function isJavaScriptFile(file) {
  if (typeof file === "string") {
    if (file.toLowerCase().endsWith(".js")) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please add String";
  }
}
const checkJavaScriptFile = isJavaScriptFile("app.js");
console.log(checkJavaScriptFile);
// end //
// Problem 3: oilPrice
function oilPrice(dieselLiter, petrolLiter, octaneLiter) {
  if (
    typeof dieselLiter === "number" &&
    typeof petrolLiter === "number" &&
    typeof octaneLiter === "number"
  ) {
    // oil price per liter
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    // sum
    const totalPrice =
      dieselPrice * dieselLiter +
      petrolPrice * petrolLiter +
      octanePrice * octaneLiter;
    return totalPrice;
  } else {
    return "Please add valid Number";
  }
}
const totalOilPrice = oilPrice(30, 20, 10);
console.log(totalOilPrice);
// end //
// Problem 4: public bus
function publicBusFare(public) {
  if (typeof public === "number") {
    // Price
    const publicBusTicketPrice = 250;
    // calculation
    const restPicnicBus = public % 50;
    const restPicnicMIcroBus = restPicnicBus % 11;
    const restPublicTicketPrice = restPicnicMIcroBus * publicBusTicketPrice;
    return restPublicTicketPrice;
  } else {
    return "Please add valid Number";
  }
}
const totalBusTicketPrice = publicBusFare(55);
console.log(totalBusTicketPrice);
// end //
// Problem 5: is Best Friend
const friends = [
  { name: "Tom", friend: "Jack" },
  { name: "Jack", friend: "Tom" },
];
function isBestFriend(friends) {
  if (typeof friends === "object") {
    const name1st = friends[0].name.toLowerCase();
    const name2nd = friends[1].name.toLowerCase();
    const friend1st = friends[0].friend.toLowerCase();
    const friend2nd = friends[1].friend.toLowerCase();
    if (name1st === friend2nd && name2nd === friend1st) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please input object";
  }
}
const bestFriendCheck = isBestFriend(friends);
console.log(bestFriendCheck);
// end //
