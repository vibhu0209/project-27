class Chain{
    constructor(bodyA , bodyB , offsetX , offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options ={ 
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX ,y: this.offsetY},
            stiffness: 0.05,
            length: 100
        }
        this.chain = Constraint.create(options);
        World.add(world , this.chain);
    }
    display(){

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        var anchor2x = pointB.x + this.offsetX;
        var anchor2y = pointB.y + this.offsetY;
        strokeWeight(2);
        line(pointA.x , pointA.y , 
            anchor2x ,anchor2y);
        }
}

