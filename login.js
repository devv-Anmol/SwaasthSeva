let mail = document.getElementById("mail");
let para = document.getElementById("emailError");

mail.addEventListener("input", function() {
    if (mail.value.includes("@")) {
        para.textContent = "";
    } else {
        para.textContent = "Invalid Email";
        para.style.color = "red";
    }
});
