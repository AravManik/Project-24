class Paper
{
    constructor(x, y, radius )
    {
        var options =
        {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.width = 2*radius;
        this.height = 2*radius;
        World.add(world, this.body);
    }

    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}