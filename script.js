var advertpopup=document.getElementById("advertback")
var advert=document.getElementById("advert")
var cancel=document.getElementById("cancel")

setTimeout(Myfunction, 25000)



setTimeout(yourfunction, 20000)

function Myfunction(){cancel.style.display="block"}

function yourfunction() {advertpopup.style.display="block"}

cancel.onclick=function () {advertpopup.style.display="none"}

/*side bar*/
var sidebutton=document.getElementById("sidebutton")
var sidebar=document.getElementById("sidebar")

var sidebarcan=document.getElementById("kancel")


sidebutton.onclick=function  () {sidebar.style.right="0px"}

sidebarcan.onclick=function  () {sidebar.style.right="-400px"}
