function toggleDarkLight() {
    var body = document.getElementById("body");
    var button = document.getElementById("button");
    var currentName = button.textContent;
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    button.textContent = currentName == "Light Mode" ? "Dark Mode" : "Light Mode";
}