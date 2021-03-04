


var bird;
var pipes = [];
let score = 0;


function setup(){
    createCanvas(1890,900);
    bird = new Bird();
    pipes.push(new Pipe());

}
function draw(){
    background(0);
    
    for ( var i = pipes.length-1; i>= 0; i--) {
        pipes[i].show();
        pipes[i].update();
        
        if(pipes[i].hits(bird)){
            console.log('hit!');
            reset();
        }

        if (pipes[i].outOfScreen()) {
            pipes.splice(i, 1);
        } 
      }
      
    if(frameCount % 8 == 0) {
        pipes.push(new Pipe());
    }

    if(frameCount%40 == 0){
        score = score + 5;
    }

    bird.show();
    bird.update();

    showScores();
    showComments();
    
}
function keyPressed() {
    if (key == ' ') {
        bird.up();
        console.log(bird.velocity); 
    }
}

function touchStarted() {
    console.log('touched');
    bird.up();

}

function showScores(){
    textSize(32);
    textAlign(CENTER);
    text(score, width/2, height/2); 
    console.log('text');
}

function reset(){
    score = 0;
}

function showComments(){
    if(score>0 && score<=50){
    textSize(32);
    textAlign(CENTER);
    text('can you go 300? huh!', width/2, 500); 
    }
    if(score>50 && score<=100){
    textSize(32);
    textAlign(CENTER);
    text('such noob', width/2, 500); 
    }
    if(score>100 && score<=150){
    textSize(32);
    textAlign(CENTER);
    text('wow so pro', width/2, 500); 
    }
    if(score>150 && score<=200){
    textSize(32);
    textAlign(CENTER);
    text('ladies must like you a lot', width/2, 500); 
    }
    if(score>200 && score<=250){
    textSize(32);
    textAlign(CENTER);
    text('u are so chad', width/2, 500); 
    }
}