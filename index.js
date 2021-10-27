var homePage = document.getElementById("home-page");
var staffPage = document.getElementById("staff");
var guestPage = document.getElementById("guest")


function changePage(page) {

    if (page === "staff"){
        staffPage.style.display = "block";
    } else if (page ==="guest"){
        guestPage.style.display = "block";
    }  
    homePage.style.display = "none";

}