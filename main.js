document.getElementById("loginButton").addEventListener("click",redirect);
function redirect() {
    event.preventDefault()
    window.location.href = "./classes.html";
}