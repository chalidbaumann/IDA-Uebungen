console.log('🤪');



function myFnc(e){
    e.classList.toggle("show");

    var elem = document.getElementById("navID"),
    Style = window.getComputedStyle(elem),
    right = Style.getPropertyValue("right");


    if(right == "0px"){
        elem.style.right = "-300px";
    }else{
        elem.style.right = "0px";
    }
}