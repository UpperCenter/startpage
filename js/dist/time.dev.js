"use strict";

window.onload = displayClock();

function displayClock() {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();
  document.getElementById("time").innerText = d.toLocaleTimeString();
  document.getElementById("month").innerText = mm;
  document.getElementById("day").innerText = dd;
  setTimeout(displayClock, 1000);
}