//ALL GLOBAL VARIABLES
let allStoredEmotions = [];
let dictionaryEmotions = {};
let allStoredSelf = [];
let dictionarySelf = {};
let allStoredEnv = [];
let dictionaryEnv = {};

let codesColors = [];
let codesSelf = [];
let codesEnv = [];

var words = [];
var wordsStr = "";
let selfSize = 100;
let avgColor;
var colorsArray = [];
var allSocial = [];
var allEntities = [];
var canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight/2+200);
  canvas.position(0,0);
  canvas.style('z-index','-3');
  //canvas.parent('canvasForHTML');
}

function draw() {
  avgColor = colorAverage(colorsArray);
  //backgroundGradient(avgColor);
  background(32,29,70)

  createSelf();

  drawInSelf(codesSelf);
  drawOutSelf(codesEnv);

  displayEmotions(colorsArray);
  continuousFeedback(wordsStr); //feedback from any key

}


function mouseClicked() {
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight+300)
}