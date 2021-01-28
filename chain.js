class Chain {
    constructor(body1, body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : .03,
            length : 100
        }
        this.chain= Constraint.create(options)
        World.add(world, this.chain);
    }

    display(){
        var startxy= this.chain.bodyA.position;
        var endxy= this.chain.bodyB.position;
        line(startxy.x,startxy.y,endxy.x,endxy.y);
    }
}