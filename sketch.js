let symmetry = 6; //the screen is divided in 6 parts
let angle = 360 / symmetry; //every time rotate by 60 degrees

let colors1 = ["#6e40aa", "#7140ab", "#743fac", "#773fad", "#7a3fae", "#7d3faf", "#803eb0", "#833eb0", "#873eb1", "#8a3eb2", "#8d3eb2", "#903db2", "#943db3", "#973db3", "#9a3db3", "#9d3db3", "#a13db3", "#a43db3", "#a73cb3", "#aa3cb2", "#ae3cb2", "#b13cb2", "#b43cb1", "#b73cb0", "#ba3cb0", "#be3caf", "#c13dae", "#c43dad", "#c73dac", "#ca3dab", "#cd3daa", "#d03ea9", "#d33ea7", "#d53ea6", "#d83fa4", "#db3fa3", "#de3fa1", "#e040a0", "#e3409e", "#e5419c", "#e8429a", "#ea4298", "#ed4396", "#ef4494", "#f14592", "#f34590", "#f5468e", "#f7478c", "#f9488a", "#fb4987", "#fd4a85", "#fe4b83", "#ff4d80", "#ff4e7e", "#ff4f7b", "#ff5079", "#ff5276", "#ff5374", "#ff5572", "#ff566f", "#ff586d", "#ff596a", "#ff5b68", "#ff5d65", "#ff5e63", "#ff6060", "#ff625e", "#ff645b", "#ff6659", "#ff6857", "#ff6a54", "#ff6c52", "#ff6e50", "#ff704e", "#ff724c", "#ff744a", "#ff7648", "#ff7946", "#ff7b44", "#ff7d42", "#ff8040", "#ff823e", "#ff843d", "#ff873b", "#ff893a", "#ff8c38", "#ff8e37", "#fe9136", "#fd9334", "#fb9633", "#f99832", "#f89b32", "#f69d31", "#f4a030", "#f2a32f", "#f0a52f", "#eea82f", "#ecaa2e", "#eaad2e", "#e8b02e", "#e6b22e", "#e4b52e", "#e2b72f", "#e0ba2f", "#debc30", "#dbbf30", "#d9c131", "#d7c432", "#d5c633", "#d3c934", "#d1cb35", "#cece36", "#ccd038", "#cad239", "#c8d53b", "#c6d73c", "#c4d93e", "#c2db40", "#c0dd42", "#bee044", "#bce247", "#bae449", "#b8e64b", "#b6e84e", "#b5ea51", "#b3eb53", "#b1ed56", "#b0ef59", "#adf05a", "#aaf159", "#a6f159", "#a2f258", "#9ef258", "#9af357", "#96f357", "#93f457", "#8ff457", "#8bf457", "#87f557", "#83f557", "#80f558", "#7cf658", "#78f659", "#74f65a", "#71f65b", "#6df65c", "#6af75d", "#66f75e", "#63f75f", "#5ff761", "#5cf662", "#59f664", "#55f665", "#52f667", "#4ff669", "#4cf56a", "#49f56c", "#46f46e", "#43f470", "#41f373", "#3ef375", "#3bf277", "#39f279", "#37f17c", "#34f07e", "#32ef80", "#30ee83", "#2eed85", "#2cec88", "#2aeb8a", "#28ea8d", "#27e98f", "#25e892", "#24e795", "#22e597", "#21e49a", "#20e29d", "#1fe19f", "#1edfa2", "#1ddea4", "#1cdca7", "#1bdbaa", "#1bd9ac", "#1ad7af", "#1ad5b1", "#1ad4b4", "#19d2b6", "#19d0b8", "#19cebb", "#19ccbd", "#19cabf", "#1ac8c1", "#1ac6c4", "#1ac4c6", "#1bc2c8", "#1bbfca", "#1cbdcc", "#1dbbcd", "#1db9cf", "#1eb6d1", "#1fb4d2", "#20b2d4", "#21afd5", "#22add7", "#23abd8", "#25a8d9", "#26a6db", "#27a4dc", "#29a1dd", "#2a9fdd", "#2b9cde", "#2d9adf", "#2e98e0", "#3095e0", "#3293e1", "#3390e1", "#358ee1", "#378ce1", "#3889e1", "#3a87e1", "#3c84e1", "#3d82e1", "#3f80e1", "#417de0", "#437be0"];
let colors2 = ["#ff4040", "#ff423d", "#ff453a", "#ff4838", "#fe4b35", "#fe4e33", "#fe5130", "#fd542e", "#fd572b", "#fc5a29", "#fb5d27", "#fa6025", "#f96322", "#f96620", "#f7691e", "#f66c1c", "#f56f1a", "#f47218", "#f37517", "#f17815", "#f07c13", "#ee7f11", "#ed8210", "#eb850e", "#e9880d", "#e88b0c", "#e68e0a", "#e49209", "#e29508", "#e09807", "#de9b06", "#dc9e05", "#d9a104", "#d7a403", "#d5a703", "#d2aa02", "#d0ad02", "#ceb001", "#cbb301", "#c9b600", "#c6b800", "#c3bb00", "#c1be00", "#bec100", "#bbc300", "#b8c600", "#b6c900", "#b3cb01", "#b0ce01", "#add002", "#aad202", "#a7d503", "#a4d703", "#a1d904", "#9edc05", "#9bde06", "#98e007", "#95e208", "#92e409", "#8ee60a", "#8be80c", "#88e90d", "#85eb0e", "#82ed10", "#7fee11", "#7cf013", "#78f115", "#75f317", "#72f418", "#6ff51a", "#6cf61c", "#69f71e", "#66f920", "#63f922", "#60fa25", "#5dfb27", "#5afc29", "#57fd2b", "#54fd2e", "#51fe30", "#4efe33", "#4bfe35", "#48ff38", "#45ff3a", "#42ff3d", "#40ff40", "#3dff42", "#3aff45", "#38ff48", "#35fe4b", "#33fe4e", "#30fe51", "#2efd54", "#2bfd57", "#29fc5a", "#27fb5d", "#25fa60", "#22f963", "#20f966", "#1ef769", "#1cf66c", "#1af56f", "#18f472", "#17f375", "#15f178", "#13f07c", "#11ee7f", "#10ed82", "#0eeb85", "#0de988", "#0ce88b", "#0ae68e", "#09e492", "#08e295", "#07e098", "#06de9b", "#05dc9e", "#04d9a1", "#03d7a4", "#03d5a7", "#02d2aa", "#02d0ad", "#01ceb0", "#01cbb3", "#00c9b6", "#00c6b8", "#00c3bb", "#00c1be", "#00bec1", "#00bbc3", "#00b8c6", "#00b6c9", "#01b3cb", "#01b0ce", "#02add0", "#02aad2", "#03a7d5", "#03a4d7", "#04a1d9", "#059edc", "#069bde", "#0798e0", "#0895e2", "#0992e4", "#0a8ee6", "#0c8be8", "#0d88e9", "#0e85eb", "#1082ed", "#117fee", "#137cf0", "#1578f1", "#1775f3", "#1872f4", "#1a6ff5", "#1c6cf6", "#1e69f7", "#2066f9", "#2263f9", "#2560fa", "#275dfb", "#295afc", "#2b57fd", "#2e54fd", "#3051fe", "#334efe", "#354bfe", "#3848ff", "#3a45ff", "#3d42ff", "#4040ff", "#423dff", "#453aff", "#4838ff", "#4b35fe", "#4e33fe", "#5130fe", "#542efd", "#572bfd", "#5a29fc", "#5d27fb", "#6025fa", "#6322f9", "#6620f9", "#691ef7", "#6c1cf6", "#6f1af5", "#7218f4", "#7517f3", "#7815f1", "#7c13f0", "#7f11ee", "#8210ed", "#850eeb", "#880de9", "#8b0ce8", "#8e0ae6", "#9209e4", "#9508e2", "#9807e0", "#9b06de", "#9e05dc", "#a104d9", "#a403d7", "#a703d5", "#aa02d2", "#ad02d0", "#b001ce", "#b301cb", "#b600c9", "#b800c6", "#bb00c3", "#be00c1", "#c100be", "#c300bb", "#c600b8", "#c900b6", "#cb01b3", "#ce01b0", "#d002ad", "#d202aa", "#d503a7", "#d703a4", "#d904a1", "#dc059e"];
let lines = []; //empty array used to keep track of lines

//coordinates of the balls that create the snowflake
let x = 100;
let y = 100;
//initial speed
let velx = 0;
let vely = 0;
let c; //color

let pongo = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0); //default background (black)
  c = color("white"); //default balls' color (white)
}

function draw() {
  //the speed varies according to the rotation and its maximum is 2
  if (pongo == 0) {
    vely = constrain(rotationX, -2, 2);
    velx = constrain(rotationY, -2, 2);
  }
  //add the speed to the current position of the balls
  x += velx;
  y += vely;

  push()
  translate(width / 2, height / 2);
  let angle = 360 / symmetry;
  for (let i = 0; i < symmetry; i++) {
    rotate(angle);
    push()
    noStroke()
    fill(c);
    circle(x, y, 5);
    pop()

    push();
    scale(1, -1); //draw in the opposite direction
    push()
    noStroke()
    fill(c)
    circle(x, y, 5);
    pop()
    pop();
  }
  pop();

  // keep on screen
  if (x > width) {
    x = 0
  } else if (x < 0) {
    x = width
  }
  if (y > height) {
    y = 0
  } else if (y < 0) {
    y = height
  }

  //writing 'Shake and Rotate'
  let myText = 'Rotate & Shake';
  fill(color("white"));
  textFont('Georgia');
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(40);
  text(myText, width / 2, 80);
}

// called at the beginning of a touch event
// here I'm using it to track beginning and end of touches
function touchStarted() {
  touchstarted = true;
  touchended = false;
  return false;
}

// called whenever a touch is moving (like mouseMoved())
function touchMoved() {
  return false;
}

// ask for permissions on iOS
function touchEnded(event) {
  // check that those functions exist
  // if they exist it means we are
  // on iOS and we can request the permissions
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission()
  }
}

//if the device is shaken the colors of balls and background change
function deviceShaken() {
  background(random(colors1));
  c = (random(colors2));
}

function mousePressed() {
  pongo = 2;
  velx = 0;
  vely = 0;
}

function mouseReleased() {
  pongo = 0;
}
