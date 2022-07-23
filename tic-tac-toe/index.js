let gridItems = document.querySelectorAll(".grid-item");
let restartBtn = document.getElementById("restartBtn");
let clickCount = 0;


gridItems.forEach((ele) => {
    ele.addEventListener("click", () => {
        clickCount++;
        if (clickCount%2 == 0) {
            ele.innerText = "X";
            ele.style.backgroundColor = "red";
        }
        else {
            ele.innerText = "O";
            ele.style.backgroundColor = "green";
        }
    }, {once: true});
});

restartBtn.onclick = () => {
    window.location.reload();
}