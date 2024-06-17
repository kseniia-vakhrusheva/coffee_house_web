document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
      document.querySelector(".header").classList.toggle("active");
      document.querySelector("body").classList.toggle("lock");
      document.querySelectorAll(".menu_link").forEach(function(link) {
        link.classList.remove("static-underline");
        link.style.textAlign = "center";
      });
    });
  });
  
  
  
  var navLinks = document.querySelectorAll(".nav_link");
  
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      document.querySelector(".header").classList.remove("active");
      document.querySelector("body").classList.remove("lock");
    });
  });