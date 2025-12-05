let home1 = document.querySelector(".home1");
let medicines1=document.querySelector(".medicines1");
let login1 = document.querySelector(".login1");
let services1= document.querySelector(".services1");
let mainbtn1=document.querySelector(".mainbtn1");
let mainbtn2=document.querySelector(".mainbtn2");
let mainbtn3=document.querySelector(".mainbtn3");

if (document.getElementById("homelink1")) {
  document.getElementById('homelink1').addEventListener('click', function(e){
      e.preventDefault();
      window.location.reload();
  });
}

if (medicines1) {
    medicines1.addEventListener("click", function() {
        window.location.href = "medicines.html";  
    });
}

if (home1) {
    home1.addEventListener("click", function() {
        window.location.href = "main.html";  
    });
}
if (services1) {
    services1.addEventListener("click", function() {
        window.location.href = "services.html";  
    });
}
if (login1) {
    login1.addEventListener("click", function() {
        window.location.href = "login.html";  
    });
}
if (mainbtn1) {
    mainbtn1.addEventListener("click", function() {
        window.location.href = "services.html";  
    });
}
if (mainbtn2) {
    mainbtn2.addEventListener("click", function() {
        window.location.href = "medicines.html";  
    });
}
if (mainbtn3) {
    mainbtn3.addEventListener("click", function() {
        window.location.href = "login.html";  
    });
}


 