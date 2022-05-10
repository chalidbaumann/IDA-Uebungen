
let history;
let count = 0; //jedem Frame eins hochzählen

function setup() {
  // put setup code here
  //basic definitionen z.B. Grösse canvas
  createCanvas(window.innerWidth, window.innerHeight);
  let url = "chrome_history.json";
  history = loadJSON(url, loaded);
  background(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  frameRate (1);
}

function loaded(data){
  history = data;
  //console.log(history[0].title);
  //console.log(history[1].lastVisitTimeLocal);
  //let aktuellestunde=20;
  //let deckungsgrad = map(aktuellestunde, 0, 23, 0, 255)
  //console.log(deckungsgrad);
  }



function draw() {
  background(255, 150);
  let textGroesse = map(history[count].visitCount, 1, 20, 14, 36);
  textSize (textGroesse)
  console.log(textGroesse)
  // put drawing code here
  // 60x in sekunde als standard
  // transparenz von 0 bis 255
  // ellipse(mouseX, mouseY, 50, 50);
  //background(255, 30);
  //triangle(mouseX, mouseY, 50, 70, 100, 150);
  text(history[count].title, width / 2, height / 2);
  count = count + 1;
}


function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}