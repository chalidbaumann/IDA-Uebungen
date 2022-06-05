console.log('hallo von extern');

let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
    n++; /* ist dasselbe wie n=n+1*/
    document.getElementById("element").style.left = (n * 5) + "px";
    //console.log(document.getElementById("element"));
}


function neuesElement(){
    let div = document.createElement("div");
    div.classList.add('random');
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}



function neuesBild() {
    n++;
   let versatz = 20; /* um wieviel das bild jedesmal nach rechts rückt*/
   let myImage = new Image(100, 100);
   myImage.src = '/exercise 05.05.22/assets/images/20210607_171323.jpg';
   myImage.classList.add('bild');
   myImage.style.left = n * versatz + "px";
   document.body.appendChild(myImage);
   myImage.classList.add('random');
   myImage.style.left = Math.random() * window.innerWidth + "px";
   myImage.style.top = Math.random() * window.innerHeight + "px";
}


function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 3);
    function frame() {
      if (pos == 900) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos +'px';
      }
    }
  }


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