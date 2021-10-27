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

};

function logIn() {
    var input = document.getElementById("input").value;

    for (x in employee) {
        if (input == employee[x].id) {
            console.log("sucess");
            break;

        } else {
            console.log("you flopped")
        }
    }
};

function logOut() {

};

function checkId() {

};