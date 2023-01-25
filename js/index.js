var header = document.getElementById("MyHeader");
// var sticky = header.offsetTop;

function movingBanner(){
    console.log(window.pageYOffset);
    if (window.pageYOffset == 0){
        header.classList.add("Solid");
    } else {
        header.classList.remove("Solid");
    }
}