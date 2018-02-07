var score = 2;
var scoreText;
function start(){
    var background = new WebImage("https://cdn.pixabay.com/photo/2017/08/21/11/48/pattern-2665078_960_720.jpg");
    background.setSize(getWidth(),400);
    
    background.setPosition(0,80);
    add(background);
    

    
    standard();
    

    
    mouseClickMethod(clickHandler);
    
    scoreText = new Text(score);
	scoreText.setPosition(0, getHeight());
	add(scoreText);
	
	text("How are you feeling today?",35,80,"20pt Comic Sans MS");
	
	
	happyFace(100,250,Color.black);
    happyFace(100,249,Color.white);
}
function text(text,x,y,font){
	var txt = new Text(text, font);
	txt.setPosition(x,y);
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

    rect(20,175,160,100,Color.black);
    rect(220,175,160,100,Color.black);
    rect(20,300,160,100,Color.black);
    rect(220,300,160,100,Color.black);
    rect(21,176,158,98,"#FFFFFF");
    rect(221,176,158,98,"#FFFFFF");
    rect(21,301,158,98,"#FFFFFF");
    rect(221,301,158,98,"#FFFFFF");
}

function rect(x,y,width,height,colour){
    var box = new Rectangle(width,height);
    box.setPosition(x,y);
    box.setColor(colour);
    add(box);
}

function happyFace(x,y,color){
    var mouth = new Oval(100,20);
    mouth.setPosition(x,y);
    mouth.setColor(color);
    add(mouth);
    var whiteOval = new Oval(100,20);
    whiteOval.setPosition(x,y);
    whiteOval.setColor(color);
    add(whiteOval);
    /*
    var leftEye = new Rectangle(10,20);
    leftEye.setColor(255 - color);
    leftEye.setPosition(x-20,y+36);
    add(leftEye);
    var rightEye = new Rectangle(10,20);
    rightEye.setColor(255 - color);
    rightEye.setPosition(x+10,y+36);
    add(rightEye);
    */
}

function sadFace(){
    
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
/*    
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
*/    
