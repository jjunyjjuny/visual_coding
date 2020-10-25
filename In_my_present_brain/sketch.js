let inputPositive, degreeInputPositive, buttonPositive, 
    inputNegative, degreeInputNegative, buttonNegative,
    greeting
function setup() {
  // create canvas
  createCanvas(850, 850);

  inputPositive = createInput('Positive');
  inputPositive.mouseClicked(clicked);
  inputPositive.position(20, 65);

  countInputPositive = createInput('Degree(1~100)');
  countInputPositive.mouseClicked(clicked);
  countInputPositive.size(100, 15);
  countInputPositive.position(inputPositive.x+inputPositive.width, inputPositive.y)
  
  buttonPositive = createButton('submit');
  buttonPositive.position(countInputPositive.x + countInputPositive.width, 65);
  buttonPositive.mousePressed(submitPositive);

  
  inputNegative = createInput('Negative');
  inputNegative.mouseClicked(clicked);
  inputNegative.position(500, 65);
  
  countInputNegative = createInput('Degree(1~100)');
  countInputNegative.mouseClicked(clicked);
  countInputNegative.size(100,15);
  countInputNegative.position(inputNegative.x+inputNegative.width, inputNegative.y);
  
  buttonNegative = createButton('submit');
  buttonNegative.position(countInputNegative.x+countInputNegative.width, countInputNegative.y);
  buttonNegative.mousePressed(submitNegative);
  
  
  greeting = createElement('h2', 'what`s on your mind? How much?');
  greeting.position(20, 5);
  

}

function clicked() {
	this.value('');
}
function submitPositive() {
	const positive = inputPositive.value();
  
  if(positive){
  for(let i=0; i<countInputPositive.value(); i++){
    let gb = random(40,220)
    push()
    fill(255,gb,gb);
    translate(random(850), 250+random(600));
    rotate(random(2 * PI));
  	textSize(random(10,50));
    textStyle(BOLD);
    text(positive, 0, 0);
    pop();
  }
    inputPositive.value('Positive');
countInputPositive.value('Degree(1~100)');
  }
}

function submitNegative() {
    const negative = inputNegative.value();
  
 if(negative){
  for(let i=0; i<countInputNegative.value(); i++){
    let gb = random(40,220)
    push()
    fill(gb,gb,255);
    translate(random(850), 250+random(600));
    rotate(random(2 * PI));
  	textSize(random(10,50));
    textStyle(BOLD);
    text(negative, 0, 0);
    pop();
   }
    inputNegative.value('Negative');
countInputNegative.value('Degree(1~100)');
  }
}