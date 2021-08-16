class Snow{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = 10;
        this.image=loadImage("snow5.webp")
        this.body = Bodies.circle(x, y, this.r, options);
        this.color =  color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
		image(this.image, 0,0,this.r)
        pop();
    }

};