class Slingshot {
    constructor (b1,b2)  {
        var options = {
        bodyA:b1,
        bodyB:b2,
        stiffness:0.04,
        length:10
        }
      this.user=Constraint.create(options)
      World.add(world, this.user);
    }
}