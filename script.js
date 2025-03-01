function startWebsite() {
    var name = document.getElementById("userName").value;
    if (name.trim() === "") {
        alert("Please enter your name!");
        return;
    }
    localStorage.setItem("username", name);
    window.location.href = "home.html";
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("displayName")) {
        document.getElementById("displayName").innerText = localStorage.getItem("username");
    }
});

function logout() {
    window.location.href = "exit.html";
}