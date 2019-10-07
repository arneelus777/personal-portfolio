import "../scss/main.scss"

console.log("PARCEL IS WORKING")
// alert("PARCEL IS WORKING")

var home = document.querySelector("#home");

var icon = document.querySelector(".menu-icon");

var burger = document.querySelector(".menu-icon .fas");

icon.addEventListener("click", function() {
  home.classList.toggle("menu-active")
  if ( burger.classList.contains("fa-bars")) {
    var text = "burger menu"
    console.log(text.toUpperCase())
    burger.classList.toggle("fa-times")
      }
  })
