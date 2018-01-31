var score = 2;
var scoreText;
function start(){
    var background = new WebImage("http://papers.co/wallpaper/papers.co-vy12-simple-white-pattern-background-23-wallpaper.jpg");
    background.setSize(getWidth(),getHeight());
    
    background.setPosition(0,0);
    add(background);
    
    var thing = new Rectangle(100,100);
    thing.setPosition(100,100);
    add(thing);
    
    var thing2 = new Rectangle(98,98);
    thing2.setPosition(101,101);
    thing2.setColor(Color.white);
    add(thing2);
    
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
	if(elem != null && elem.getColor() == Color.white){
		score++;
	}else{
		score--;
	}
	
	if(score == 0){
		println("You Lose :(");
	}
	if(score == 20){
		println("You Win :)");
		score = 0;
	}
	
	scoreText.setText(score);
}
