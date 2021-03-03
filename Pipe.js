class Pipe{
    constructor(){
        this.top = random(height/2);
        this.bottom = random(height/2);
        this.x = width;
        this.w = 20;
        this.speed = 5;
        this.hitted = false;
    }

        show(){
            fill(225);
            if(this.hitted){
                fill(225, 225 ,0);
            }
            //this.hitted = false;
            rect(this.x, 0, this.w, this.top);
            rect(this.x, height - this.bottom, this.w, this.bottom);
            //console.log('pera nai chill');
        }
        update(){
            this.x -= this.speed;
        }

        outOfScreen(){
            if (this.x < -this.w){
                return true;
            }else{
                return false;
            }
        }

        hits( Bird ){
            if(Bird.y < this.top || Bird.y > height - this.bottom) {
                if(Bird.x > this.x && Bird.x < this.x+this.w){
                this.hitted = true;
                return true;
                }
            } else {
                return false;
            }
        }
    
}