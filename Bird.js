class Bird{
    constructor(){
        this.y = height/2;
        this.x = width/3;
        this.gravity = .8;
        this.velocity = 0;
    }
    show(){
        fill(225);
        ellipse(this.x, this.y, 16, 16);
    }

    up(){
        this.velocity += -this.gravity*20;
    }

    update(){
        this.velocity += this.gravity;
        this.velocity *= .8;
        this.y += this.velocity;

        if(this.y > height){
            this.y = height;
            this.velocity = 0;
        }
        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
    }
}
 
