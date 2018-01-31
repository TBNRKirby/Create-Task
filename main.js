var score = 2;

function start(){
    var thing = new Rectangle(100,100);
    thing.setPosition(100,100);
    add(thing);
    mouseClickMethod(goal);
    
}
function text(text){
	var txt = new Text(text);
	txt.setPosition(getWidth()/2 - txt.getWidth()/2, 200);
	add(txt);
}

function goal(e){
    
    var txt = new Text(score);
	txt.setPosition(e.getX(),e.getY());
	add(txt);
    score++;
}
