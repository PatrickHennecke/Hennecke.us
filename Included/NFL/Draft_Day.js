let currentYear = new Date();
let Welcome = "Welcome to " + currentYear.getFullYear() + " Hennecke NFL Team Extravaganza";
document.getElementById("Year").textContent = Welcome;

$(document).ready(function() {
    $('#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9, #b10, #b11, #b12, #b13, #b14, #b15, #b16, #b17, #b18, #b19, #b20, #b21, #b22, #b23, #b24, #b25, #b26, #b27, #b28, #b29, #b30, #b31, #b32').on('click', function() {
        $(this).hidden();
    });
});