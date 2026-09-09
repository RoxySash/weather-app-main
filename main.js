const unitDropdown = document.getElementById("unitDropdown");
const arrowDropdown = document.getElementById("arrowDropdown");

function dropdown() {
    if(unitDropdown.style.display === "none"){
        unitDropdown.style.display = "block";
    } else {
        unitDropdown.style.display = "none";
    }
}

arrowDropdown.addEventListener("click", dropdown);

