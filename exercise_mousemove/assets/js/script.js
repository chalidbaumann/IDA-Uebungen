

let mouse = []
let max = 500
document.onmousemove = function (e){
    let pos_x = e.clientX
    let pos_y = e.clientY
    let object = {
        x: pos_x,
        y: pos_y
    }
    if(mouse.length > max){
    console.log('array is filled up!')
    mouse.shift()
//console.log(mouse)
}
mouse.push(object)
console.log(mouse)
}

let pointer = document.getElementById('pointer')
pointer.style.position = 'fixed'
console.log(pointer)


/**
 * Animate our collected data
 */
let index = 0
window.requestAnimationFrame(animate)
function animate(){
    window.requestAnimationFrame(animate)

    //console.log(mouse[index])
    //console.log(index)
if(mouse.length > 0){
    pointer.style.left = mouse[index].x + 'px'
    pointer.style.top = mouse[index].y + 'px'
}


    index++
    if(index >= mouse.length) {
        index = 0
    }
}



    // save JSON data
let save_button = document.querySelector('#save-button');
save_button.addEventListener('click', function(){
    console.log('clicked');
    let data = JSON.stringify(mouse);
    let blob = new Blob([data], { type: 'application/json' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'mouse_movements' + Date.now().toString() + '.json';
    a.click();
    URL.revokeObjectURL(url);
}
)

// load JSON data

let load_button = document.querySelector('#load-button');
load_button.addEventListener('click', function(){
    console.log('clicked');
    let input = load_button.querySelector('input');
    let file = input.files[0];
    let reader = new FileReader();
    reader.onload = (event) => {
        let data = JSON.parse(event.target.result);
        mouse = data;
        console.log(mouse);
    }
    reader.readAsText(file);
}
)






//funktion benützen wenn oft wiederholen nötig. Ganze Liste wird in enem Wort gespeichert.
//window.requestAnimationFrame



//array sind Datenstruktur: sammeln Daten
//sätze, buchstaben, nummern
//es braucht immer index: Grösse zwischen 0 



//Objekte: selber identifizierung nennen





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