var stars = document.getElementsByClassName("fas");
var emoji = document.getElementById("emoji");

stars[0].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#e4e4e4";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(0)";
}

stars[1].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-100px)";
}

stars[2].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-200px)";
}

stars[3].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-300px)";
}

stars[4].onclick = function() {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#ffd93b";
    emoji.style.transform = "translateX(-400px)";
}