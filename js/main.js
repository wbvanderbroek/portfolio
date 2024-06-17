document.addEventListener("DOMContentLoaded", function() {
  var center = document.querySelector(".window-center");
  var mobileDevice = document.querySelector(".mobile-device-warning");

  if (window.outerWidth < 800) {          
      center.style.display = "none";
      mobileDevice.style.display = "block";
  } else {
      mobileDevice.style.display = "none";
  }
});
