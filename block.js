class Block {
    constructor(x, y){
        var options={
            isStatic : false
        }
        this.body = Bodies.rectangle(x, y, 25, 35);
        this.width = 25;
        this.height = 35;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        push();
        var Pos = this.body.position;
        translate(Pos.x, Pos.y);
        rect(0, 0, this.width, this.height);
        pop();
    }
}