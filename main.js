var score = 2;
var scoreText;
function start(){
    var background = new WebImage("https://cdn.pixabay.com/photo/2017/10/06/11/28/square-pattern-2822790_960_720.jpg");
    background.setSize(getWidth(),480);
    background.setPosition(0,0);
    add(background);
    
    

    
    standard();
    

    
    mouseClickMethod(clickHandler);
    
    scoreText = new Text(score);
	scoreText.setPosition(0, getHeight());
	add(scoreText);
	
	rect(30,47,350,50,Color.white);
	text("How are you feeling today?",35,80,"20pt Comic Sans MS");
	
	
	happyFace();
    
    sadFace();
    //eyes(100,210,100,100,Color.black);
    
    angryFace(70,310,100,330);
    //angryFace(130,310,100,330);
    /*angryFace(130,380,100,360);
    angryFace(70,380,100,360);
    */
    
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

function happyFace(){
    mouth(100,250,100,20,Color.black);
    mouth2(100,249,100,20,Color.yellow);
    eyes(100,210,100,100,Color.black);
    /*var mouth = new Oval(100,20);
    mouth.setPosition(x,y);
    mouth.setColor(color);
    add(mouth);
    var whiteOval = new Oval(100,20);
    whiteOval.setPosition(x,y);
    whiteOval.setColor(color);
    add(whiteOval);
    */
    //mouth(100,249,100,20,Color.white);
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
    mouth(300,260,100,20,Color.black);
    mouth2(300,261,100,20,"#1E90FF");
    eyes(300,210,100,100,Color.black);
    /*var mouth = new Oval(100,20);
    mouth.setPosition(x,y);
    mouth.setColor(color);
    add(mouth);
    var whiteOval = new Oval(100,20);
    whiteOval.setPosition(x,y);
    whiteOval.setColor(color);
    add(whiteOval);
    */
    //mouth(300,261,100,20,Color.white);
}

function angryFace(a,b,c,d){
    /*
    var line = new Line(300,100,250,150);
    add(line);
    var line2 = new Line(200,100,250,150);
    add(line2);
    var line3 = new Line(200,300,250,250);
    add(line3);
    var line4 = new Line(300,300,250,250);
    add(line4);
    */
    var line = new Line(a,b,c,d);
    add(line);

    var line2 = new Line(a+60,b,c,d);
    add(line2);
    eyes(100,335,100,100,Color.black);
    
    mouth(100,378,75,35,Color.black);
    mouth2(100,381,75,35,Color.red);
}

function eyes(x,y,width,height,color){
    var leftEye = new Rectangle(10,20);
    leftEye.setColor(color);
    leftEye.setPosition(x-20,y);
    add(leftEye);
    var rightEye = new Rectangle(10,20);
    rightEye.setColor(color);
    rightEye.setPosition(x+10,y);
    add(rightEye);
}

function mouth(x,y,a,b,color){
    var mouth = new Oval(a,b);
    mouth.setPosition(x,y);
    mouth.setColor(color);
    add(mouth);
}

function mouth2(x,y,a,b,color){
    var whiteOval = new Oval(a,b);
    whiteOval.setPosition(x,y);
    whiteOval.setColor(color);
    add(whiteOval);
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
