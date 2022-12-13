console.log('Working...')

/* =================================== OPEN NAVIGATION FULL CONTENT =================================== */

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("toogle-navigation-full-content").addEventListener("click", function (event) {
        this.parentElement.nextElementSibling.classList.toggle("hide");
    });

});

/* =================================== /OPEN NAVIGATION FULL CONTENT =================================== */
