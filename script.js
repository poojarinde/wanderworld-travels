// Popup Open
function openForm() {
document.getElementById("popupForm").style.display = "flex";
}

// Popup Close
function closeForm() {
document.getElementById("popupForm").style.display = "none";
}

// Close Popup Outside Click
window.onclick = function(event) {
let popup = document.getElementById("popupForm");

if (event.target == popup) {
popup.style.display = "none";
}
};

// Booking Form Validation
document.getElementById("bookingForm").addEventListener("submit", function(e) {
e.preventDefault();

let name = document.getElementById("bname").value.trim();
let email = document.getElementById("bemail").value.trim();
let destination = document.getElementById("bdestination").value.trim();
let date = document.getElementById("bdate").value;

let msg = document.getElementById("bookmsg");

if (name === "" || email === "" || destination === "" || date === "") {
msg.style.color = "red";
msg.innerHTML = "Please fill all booking details.";
return;
}

if (!email.includes("@") || !email.includes(".")) {
msg.style.color = "red";
msg.innerHTML = "Enter valid email.";
return;
}

msg.style.color = "green";
msg.innerHTML = "Booking Submitted Successfully!";

document.getElementById("bookingForm").reset();

setTimeout(() => {
closeForm();
msg.innerHTML = "";
}, 2000);

});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

let msg = document.getElementById("msg");

if (name === "" || email === "" || message === "") {
msg.style.color = "red";
msg.innerHTML = "Please fill all fields.";
return;
}

if (!email.includes("@") || !email.includes(".")) {
msg.style.color = "red";
msg.innerHTML = "Enter valid email.";
return;
}

msg.style.color = "green";
msg.innerHTML = "Message Sent Successfully!";

document.getElementById("contactForm").reset();

});