var ball;
var db, position, dbref;

function setup(){

    db = firebase.database();
    dbref = db.ref("ball/position");
    dbref.on("value", readxy, showerr);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){

    db.ref("ball/position").set({
        'x': position.x +x,
        'y': position.y +y
    })
}

function readxy(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function showerr(){
    console.log("shoow if any errors");
}
