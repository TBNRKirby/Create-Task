var score = 2;
var scoreText;
function start(){
    var background = new WebImage("https://cdn.pixabay.com/photo/2017/08/21/11/48/circle-2665079_960_720.jpg");
    background.setSize(getWidth(),getHeight());
    
    background.setPosition(0,0);
    add(background);
    

    
    standard();
    

    
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
function standard(){
    var box1 = new Rectangle(160,100);
    var box2 = new Rectangle(160,100);
    var box3 = new Rectangle(160,100);
    var box4 = new Rectangle(160,100);
    box1.setPosition(20,175);
    box2.setPosition(220,175);
    box3.setPosition(20,300);
    box4.setPosition(220,300);
    add(box1);
    add(box2);
    add(box3);
    add(box4);
    var box8 = new Rectangle(158,98);
    var box5 = new Rectangle(158,98);
    var box6 = new Rectangle(158,98);
    var box7 = new Rectangle(158,98);
    box5.setPosition(21,176);
    box6.setPosition(221,176);
    box7.setPosition(21,301);
    box8.setPosition(221,301);
    box5.setColor("#FFFFFF");
    box6.setColor("#FFFFFF");
    box7.setColor("#FFFFFF");
    box8.setColor("#FFFFFF");
    add(box5);
    add(box6);
    add(box7);
    add(box8);
}
/*
var x = 20;
var y = 175;
function isEven(number){
    if(number % 2 == 0){
        return true;
    }else{
        return false;
    }
}
var box = [];
for(var i = 0;i<4;i++){
    var box = new Rectangle(160,100);
    var even = ifEven(i);
    if (even == false){
        box.setPosition(x,y);
        if(i>2){
            box.setPosition(x,y+125);
        }
    }else{
        
    }
}
*/
