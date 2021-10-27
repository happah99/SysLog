function changePage(page) {

    if (page === "staff"){
        document.getElementById("staff").style.display = "block";
    } else if (page ==="guest"){
        document.getElementById("guest").style.display = "block";
    }  
    document.getElementById("home-page").style.display = "none";

}