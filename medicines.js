let home2 = document.querySelector(".home2");
let medicines2=document.querySelector(".medicines2");
let login2 = document.querySelector(".login2");
let services2 = document.querySelector(".services2");

if (document.getElementById("homelink2")) {
  document.getElementById('homelink3').addEventListener('click', function(e){
      e.preventDefault();
      window.location.reload();
  });
}

if (medicines2) {
    medicines2.addEventListener("click", function() {
        window.location.href = "medicines.html";  
    });
}

if (home2) {
    home2.addEventListener("click", function() {
        window.location.href = "index.html";  
    });
}
if (services2) {
    services2.addEventListener("click", function() {
        window.location.href = "services.html";  
    });
}
if (login2) {
    login2.addEventListener("click", function() {
        window.location.href = "login.html";  
    });
}