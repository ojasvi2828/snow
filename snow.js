class Snow{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 2 ,
            isStatic:false
        }
        this.r = 25;
        this.image=loadImage("snow5.webp")
        this.body = Bodies.circle(x, y, this.r/2, options);
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
		image(this.image, 0,0,this.r,this.r);
        pop();
    }

};