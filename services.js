const chatList = document.getElementById("chatList");
const chats = [
  { name: "komal", role: "Patient", text: "Sir,i have fever.", num:"+91 98211 22334", img: "k" },
  { name: "Dr. Aditi", role: "Doctor", text: "from how much days", num: "+91 99876 54321", img: "D" },
  { name: "kajal", role: "Patient", text: "i have a headach", num: "+91 99112 22881", img: "k" },
  { name: "Dr. Aditi", role: "Doctor", text: "from how much days", num: "+91 99876 54321", img: "D" },
];
function renderChats() {
  chatList.innerHTML = "";
  chats.forEach(c => {
    chatList.innerHTML += `
      <div class="chat-item">
        <div class="chat-left">
          <div class="avatar">${c.img}</div>
          <div>
            <div class="chat-name">${c.name} • ${c.role}</div>
            <div class="snip">${c.text}</div>
          </div>
        </div>
        <div class="chat-right">
          <a class="wa-sm" href="https://wa.me/${c.num.replace(/\D/g,'')}">${c.num}</a>
        </div>
      </div>
    `;
  });
}
renderChats();

document.getElementById("sendBtn").onclick = () => {
  const msg = document.getElementById("msgInput").value.trim();
  if (!msg) return;
  chats.unshift({ name: "doctor", role: "Patient", text: msg, num: "91 90000 00000", img: "Y" });
  renderChats();
  document.getElementById("msgInput").value ="";
};

let home3 = document.querySelector(".home3");
let medicines3=document.querySelector(".medicines3");
let login3 = document.querySelector(".login3");
let services3 = document.querySelector(".services3");


if (document.getElementById("homelink3")) {
  document.getElementById('homelink3').addEventListener('click', function(e){
      e.preventDefault();
      window.location.reload();
  });
}

if (medicines3) {
    medicines3.addEventListener("click", function() {
        window.location.href = "medicines.html";  
    });
}

if (home3) {
    home3.addEventListener("click", function() {
        window.location.href = "main.html";  
    });
}
if (services3) {
    services3.addEventListener("click", function() {
        window.location.href = "services.html";  
    });
}
if (login3) {
    login3.addEventListener("click", function() {
        window.location.href = "login.html";  
    });
}
