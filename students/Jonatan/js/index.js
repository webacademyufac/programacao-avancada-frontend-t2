var ul = document.querySelector('nav ul')


function menuShow() {
    if (ul.classList.contains('open')){
        ul.classList.remove('open')
        document.getElementById("display").style.display = "flex";
        

    }
    else{
        ul.classList.add('open')
        document.getElementById("display").style.display = "none";
    }
}
