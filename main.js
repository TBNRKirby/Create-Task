
function start(){
    background();
    
    

    
    standard();
    rect(21,176,158,98,"#FFFF00");
    rect(221,176,158,98,"#1E90FF");
    rect(21,301,158,98,"#FF0000");
    rect(221,301,158,98,"#FFFFFE");
    
    recta(250,330,100,10,"#100000",0);
    recta(312,315,40,10,"#100000",45);
    recta(312,345,40,10,"#100000",135);
    text("more",250,390,"28pt Comic Sans MS",Color.black);
    
    mouseClickMethod(clickHandler);
    
	
	rect(30,47,350,50,Color.white);
	text("How are you feeling today?",35,80,"20pt Comic Sans MS",Color.black);
	
	
	happyFace();
    
    sadFace();
    //eyes(100,210,100,100,Color.black);
    
    angryFace();
    //angryFace(130,310,100,330);
    /*angryFace(130,380,100,360);
    angryFace(70,380,100,360);
    */
    
}
function background(){
    var background = new WebImage("https://cdn.pixabay.com/photo/2017/10/06/11/28/square-pattern-2822790_960_720.jpg");
    background.setSize(getWidth(),480);
    background.setPosition(0,0);
    add(background);
}
function text(text,x,y,font,colour){
	var txt = new Text(text, font);
	txt.setPosition(x,y);
	txt.setColor(colour);
	add(txt);
}
function recta(x,y,width,height,colour,rotation){
    var box = new Rectangle(width,height);
    box.setPosition(x,y);
    box.setColor(colour);
    box.setRotation(rotation);
    add(box);
}

function clickHandler(e){
	var click = getElementAt(e.getX(), e.getY());
	if(click != null && click.getColor() == Color.yellow){
		happy();
	}else if(click != null && click.getColor() == "#1E90FF"){
	    sad();
	}else if(click != null && click.getColor() == Color.red){
	    angry();
	}else if(click != null && click.getColor() == "#FFFFFE" || click != null && click.getColor() == "#100000"){
	    more();
	}
}

function clickHandler2(e){
	var click = getElementAt(e.getX(), e.getY());
	if(click != null && click.getColor() == "#00FF00"){
		excited();
	}else if(click != null && click.getColor() == "#00CED1"){
	    stressed();
	}else if(click != null && click.getColor() == "#FFE066"){
	    hungry();
	}else if(click != null && click.getColor() == "#191970" || click != null && click.getColor() == "#100000"){
	    sleepy();
	}
}    

function box(){
    rect(21,176,158,98,"#DDDDDE");
    rect(221,176,158,98,"#DDDEDD");
    rect(21,301,158,98,"#DEDDDD");
    rect(221,301,158,98,"#DDDDDD");
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

function angryFace(){
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
    
    /*
    70,310,100,330
    var line = new Line(a,b,c,d);
    add(line);
    var line2 = new Line(a+60,b,c,d);
    add(line2);
    */
    line(70,310,100,330);
    line(130,310,100,330);
    
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

function arc(x,y,radius,start,end,color){
    var arc = new Arc(radius,start,end,0);
    arc.setPosition(x,y);
    arc.setColor(color);
    add(arc);
}

function circle(x,y,radius,color){
    var circle = new Circle(radius);
    circle.setPosition(x,y);
    circle.setColor(color);
    add(circle);
}

function line(a,b,c,d){
    var line = new Line(a,b,c,d);
    add(line);

}

function happy(){
    background();
    standard();
    box();
    
    mouseClickMethod(clickHandlerHappy);
    
}
function clickHandlerHappy(b){
    var click = getElementAt(b.getX(), b.getY());
	if(click != null && click.getColor() == "#DDDDDE"){
		background();
	}else if(click != null && click.getColor() == "#DDDEDD"){
	    background();
	}else if(click != null && click.getColor() == "#DEDDDD"){
	    background();
	}else if(click != null && click.getColor() == "#DDDDDD"){
	    background();
	}
    
}
function sad(){
    background();
    standard();
    box();
    
    text("Want a Hug?",30,230,"18pt Comic Sans MS",Color.black);
    
    text("Let's Smile!",233,230,"18pt Comic Sans MS",Color.black);
    
    text("Let's have",30,340,"18pt Comic Sans MS",Color.black);
    text("some fun!",30,375,"18pt Comic Sans MS",Color.black);
    
    text("Need",233,340,"18pt Comic Sans MS",Color.black);
    text("Support?",233,375,"18pt Comic Sans MS",Color.black);
    
    mouseClickMethod(clickHandlerSad);
}
function clickHandlerSad(b){
    var click = getElementAt(b.getX(), b.getY());
	if(click != null && click.getColor() == "#DDDDDE"){
		background();
	}else if(click != null && click.getColor() == "#DDDEDD"){
	    background();
	}else if(click != null && click.getColor() == "#DEDDDD"){
	    background();
	}else if(click != null && click.getColor() == "#DDDDDD"){
	    background();
	}
    
}
function angry(){
    background();
    standard();
    box();
    
    mouseClickMethod(clickHandlerAngery);
}
function clickHandlerAngery(b){
    var click = getElementAt(b.getX(), b.getY());
	if(click != null && click.getColor() == "#DDDDDE"){
		background();
	}else if(click != null && click.getColor() == "#DDDEDD"){
	    background();
	}else if(click != null && click.getColor() == "#DEDDDD"){
	    background();
	}else if(click != null && click.getColor() == "#DDDDDD"){
	    background();
	}
    
    
}
function excited(){
    background();
    standard();
    box();
    
    mouseClickMethod(clickHandlerExcited);
    
}
function clickHandlerExcited(b){
    var click = getElementAt(b.getX(), b.getY());
	if(click != null && click.getColor() == "#DDDDDE"){
		background();
	}else if(click != null && click.getColor() == "#DDDEDD"){
	    background();
	}else if(click != null && click.getColor() == "#DEDDDD"){
	    background();
	}else if(click != null && click.getColor() == "#DDDDDD"){
	    background();
	}
    
}
function stressed(){
    background();
    standard();
    box();
    
    mouseClickMethod(clickHandlerStressed);
}
function clickHandlerStressed(b){
    var click = getElementAt(b.getX(), b.getY());
	if(click != null && click.getColor() == "#DDDDDE"){
		background();
	}else if(click != null && click.getColor() == "#DDDEDD"){
	    background();
	}else if(click != null && click.getColor() == "#DEDDDD"){
	    background();
	}else if(click != null && click.getColor() == "#DDDDDD"){
	    background();
	}
    
}
function hungry(){
    background();
    standard();
    box();
    
    mouseClickMethod(clickHandlerHungry);
}
function clickHandlerHungry(b){
    var click = getElementAt(b.getX(), b.getY());
	if(click != null && click.getColor() == "#DDDDDE"){
		background();
	}else if(click != null && click.getColor() == "#DDDEDD"){
	    background();
	}else if(click != null && click.getColor() == "#DEDDDD"){
	    background();
	}else if(click != null && click.getColor() == "#DDDDDD"){
	    background();
	}
    
}
function sleepy(){
    background();
    standard();
    box();
    
    mouseClickMethod(clickHandlerSleepy);
    
}
function clickHandlerSleepy(b){
    var click = getElementAt(b.getX(), b.getY());
	if(click != null && click.getColor() == "#DDDDDE"){
		background();
	}else if(click != null && click.getColor() == "#DDDEDD"){
	    background();
	}else if(click != null && click.getColor() == "#DEDDDD"){
	    background();
	}else if(click != null && click.getColor() == "#DDDDDD"){
	    background();
	}
    
}


function more(){
    background();
    standard();
    
    mouseClickMethod(clickHandler2);
    
    rect(30,47,350,50,Color.white);
	text("How are you feeling today?",35,80,"20pt Comic Sans MS",Color.black);
	
    rect(21,176,158,98,"#00FF00");
    rect(221,176,158,98,"#00CED1");
    rect(21,301,158,98,"#FFE066");
    rect(221,301,158,98,"#191970");
    
    //Excited Face
    eyes(100,190,100,100,Color.black);
    arc(100,230,40,180,360,Color.white);
    
    //Stressed Face
    recta(260,180,3,40,Color.black,50);
    recta(340,180,3,40,Color.black,-50);
    eyes(300,208,100,100,Color.black);
    mouth(300,254,75,35,Color.black);
    mouth2(300,256,75,35,"#00CED1");

    //Hungry Face
    eyes(100,315,100,100,Color.black);
    circle(135,380,15,"#FFB6C1");
    recta(105,355,30,30,"#FFB6C1",34);
    arc(100,345,40,180,360,Color.black);
    arc(100,343,40,180,360,"#FFE066");
    
    //Sleepy Face
    recta(250,320,5,25,Color.white,90);
    recta(310,320,5,25,Color.white,90);
    circle(284,370,10,Color.white);
    text("Z",315,320,"20Pt Arial Black","#484848");
    text("Z",335,315,"30Pt Arial Black","#484848");
    text("Z",360,335,"40Pt Arial Black","#484848");
    
    /*
    mouth(100,250,100,20,Color.black);
    mouth2(100,249,100,20,Color.yellow);
    eyes(100,210,100,100,Color.black);
    */
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
