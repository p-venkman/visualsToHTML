let range = document.getElementById("range");
let imgOne = document.getElementsByClassName("img1")[0];
let imgTwo = document.getElementsByClassName("img2")[0];

range.addEventListener("input", function () {
    // imgOne.style.opacity = this.value / this.max;
    // imgTwo.style.opacity = (this.max - this.value) / this.max;
    imgTwo.style.opacity = this.value / this.max;
});