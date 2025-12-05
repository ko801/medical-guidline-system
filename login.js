let home4 = document.querySelector(".home4");
let medicines4 = document.querySelector(".medicines4");
let login4 = document.querySelector(".login4");
let services4 = document.querySelector(".services4");

if (document.getElementById("homelink4")) {
  document.getElementById('homelink4').addEventListener('click', function(e){
      e.preventDefault();
      window.location.reload();
  });
}

if (medicines4) {
    medicines4.addEventListener("click", function() {
        window.location.href = "medicines.html";  
    });
}

if (home4) {
    home4.addEventListener("click", function() {
        window.location.href = "main.html";  
    });
}
if (services4) {
    services4.addEventListener("click", function() {
        window.location.href = "services.html";  
    });
}
const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
    loginBtn.addEventListener("click", function() {
        const username = document.querySelector('input[placeholder="Username / Email"]').value;
        const password = document.querySelector('input[placeholder="Password"]').value;
        const mobile = document.querySelector('input[placeholder="Mobile Number"]').value;

        if(username && password && mobile){
            alert("Login Successful!");
            window.location.href = "main.html";
        } else {
            alert("Please fill in all required fields");
        }
    });
}

const forgotLink = document.querySelector('.extra-links a:nth-child(1)');
const createLink = document.querySelector('.extra-links a:nth-child(2)');

if (forgotLink) {
    forgotLink.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = "forget.html";
    });
}

if (createLink) {
    createLink.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = "createACCOUNT.html";
    });
}


const resetBtn = document.getElementById("resetBtn");

if (resetBtn) {
    resetBtn.addEventListener("click", function () {
        let email = document.getElementById("emailInput").value.trim();
        let msg = document.getElementById("message");

        if (email === "") {
            msg.style.color = "red";
            msg.innerHTML = "Please enter your email!";
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            msg.style.color = "red";
            msg.innerHTML = "Enter a valid email address!";
            return;
        }

        msg.style.color = "green";
        msg.innerHTML = "A reset link has been sent to your email!";
              
        alert("email Created Successfully!");

        window.location.href = "login.html";
    });
}


document.addEventListener("DOMContentLoaded", function () {

    const btn = document.querySelector("button");

    btn.addEventListener("click", function () {
        
        let fullName = document.querySelector('input[placeholder="Full Name"]').value.trim();
        let email = document.querySelector('input[placeholder="Email"]').value.trim();
        let password = document.querySelectorAll('input[placeholder="Password"]')[0].value.trim();
        let confirmPass = document.querySelector('input[placeholder="Confirm Password"]').value.trim();
        
        if (fullName === "") {
            alert("Please enter your full name!");
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailPattern.test(email)) {
            alert("Please enter a valid email!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }

        // PASSWORD MATCH CHECK
        if (password !== confirmPass) {
            alert("Passwords do not match!");
            return;
        }

        // SUCCESS
        alert("Account Created Successfully!");

        // Redirect to login page
        window.location.href = "login.html";
    });

});
