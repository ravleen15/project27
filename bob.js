class Bob {
    constructor(x, y,radius) {
    var options = {
        restitution:1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
  
      push() 
      
      
  
      rectMode(CENTER);
      fill("pink");
      ellipse(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };