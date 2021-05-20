class Stone 
 {
    constructor(x, y, width, height)
     {
      var options = 
      {
          'restitution':0.8,
          'friction':1.0,
          'density':12
      }
      this.body = Bodies.rectangle(x, y, 50, 100, options);
      this.width = 50;
      this.height = 100;
      
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
			stroke("pink");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }