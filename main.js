var score = 2;
var scoreText;
function start(){
    var thing = new Rectangle(100,100);
    thing.setPosition(100,100);
    add(thing);
    mouseClickMethod(clickHandler);
    
    scoreText = new Text(score);
	scoreText.setPosition(0, getHeight());
	add(scoreText);
}
function text(text){
	var txt = new Text(text);
	txt.setPosition(getWidth()/2 - txt.getWidth()/2, 200);
	add(txt);
}


function clickHandler(e){
	var elem = getElementAt(e.getX(), e.getY());
	if(elem != null && elem.getColor() == Color.black){
		score++;
	}else{
		score--;
	}
	
	if(score == 0){
		displayMessage("You Lose :(");
	}
	if(score == 20){
		displayMessage("You Win :)");
	}
	
	scoreText.setText(score);
}
