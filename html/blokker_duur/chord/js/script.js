let range = document.getElementById("range");
let imgOne = document.getElementsByClassName("img1")[0];
let imgTwo = document.getElementsByClassName("img2")[0];

range.addEventListener("input", function () {
    // imgOne.style.opacity = this.value / this.max;
    // imgTwo.style.opacity = (this.max - this.value) / this.max;
    imgTwo.style.opacity = this.value / this.max;
});

setTimeout(function(){
    // let a = document.querySelector(".bk-root .bk .bk:nth-child(1)");
    let b = document.querySelector(".bk-root .bk .bk:nth-child(2)");
    b.setAttribute("class", "vincent");
    // let c = document.querySelector(".bk-root .bk .bk:nth-child(3)");
    let c = document.querySelector(".bk-root .bk .bk");
    c.remove();
    // a.remove();
    // c.remove();

    
}, 100);
