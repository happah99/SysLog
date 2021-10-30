var homePage = document.getElementById("home-page");
var staffPage = document.getElementById("staff");
var guestPage = document.getElementById("guest");
var loginModal = document.getElementById("loginModal");
var loginModalLabel = document.getElementById("loginModalLabel");
var time = document.getElementById("time");
var warning = document.getElementById("warning");

function changePage(page) {

    if (page === "staff"){
        staffPage.style.display = "block";
        homePage.style.display = "none";

    } else if (page ==="guest"){
        guestPage.style.display = "block";
        homePage.style.display = "none";
    
    } else if (page ==="home") {
        homePage.style.display = "block";
        guestPage.style.display = "none";
        staffPage.style.display = "none";
        warning.style.display = "none";
    }

};

function logIn() {
    var input = document.getElementById("input").value;

    for (x in employee) {
        if (input == employee[x].id) {
            
            loginModalLabel.innerHTML = "Welcome " + employee[x].name + "!";
            time.innerHTML = Date();

            var loginModal = new bootstrap.Modal(document.getElementById("loginModal"), {});

            document.onreadystatechange = function () {
                loginModal.show(); 
            };

            loginModal.show();
            warning.style.display = "none";

            break;

        } else {
            console.log("Access denied.");
            warning.style.display = "block";
        };
    };
};