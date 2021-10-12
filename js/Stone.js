class Stone{
/*  constructor(x,y,radius){
      var options={
          //isStatic:true,
          restitution: 0.8
         
      }
      this.radius = radius;
      this.body=Bodies.circle(x,y,radius);
      World.add(world,this.body);*/
      constructor(x, y, w, h) {
        let options = {
          restitution: 0.8
        };
    
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.color = color;
        World.add(world, this.body);
      }
  
  display(){
      var pos = this.body.position;
      translate(pos.x, pos.y);
      push();
     
      ellipseMode(CENTER);
    ellipse(0, 0, this.w, this.h);
     // ellipse(0,0,this.radius);
      //ellipseMode(RADIUS);
      pop();
  }
}
