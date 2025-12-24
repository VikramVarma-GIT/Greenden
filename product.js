var menuIcon = document.getElementById("menu-icon");
var closeNav = document.getElementById("close-nav");
var sideNav = document.getElementById("side-nav");


// Side Navbar Closing Function

menuIcon.addEventListener("click",function(){
   sideNav.style.right=0;
})

closeNav.addEventListener("click",function(){
    sideNav.style.right="-25%"
})

// Search Functionality

var search = document.getElementById("search");

search.addEventListener("keyup",()=>{
    var searchText = search.value.toLocaleLowerCase();
    var products = document.getElementsByClassName("product");

    for(count=0; count<products.length; count=count+1){
        plantName = products[count].getElementsByTagName("p")[0].innerText.toLocaleLowerCase();
        products[count].style.display = plantName[count].includes(searchText)? "block":"none";
    }
})

