import "../scss/main.scss"

console.log("PARCEL IS WORKING")


// function parcelText() {
//     console.log("hello")
// }
// setTimeout(parcelText, 2000)

var home = document.querySelector("#home");
// var resume = document.querySelector("#resume");
// var body = [home, resume];
var icon = document.querySelector(".menu-icon");

var burger = document.querySelector(".menu-icon .fas");
// home.classList.replace("menu-active")

icon.addEventListener("click", function() {
  home.classList.toggle("menu-active")
  if ( burger.classList.contains("fa-bars")) {
    var count = function() {
      var i = 0;
      return ++i
    }
    console.log('burger menu ' + count())
    burger.classList.toggle("fa-times")
      }
  })
