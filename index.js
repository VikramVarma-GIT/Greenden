var menuIcon = document.getElementById("menu-icon");
var closeNav = document.getElementById("close-nav");
var sideNav = document.getElementById("side-nav");

menuIcon.addEventListener("click",function(){
   sideNav.style.right=0;
})

closeNav.addEventListener("click",function(){
    sideNav.style.right="-25%"
})