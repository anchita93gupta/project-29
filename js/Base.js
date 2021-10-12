class Base {
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
       /* push();
        rectMode(CENTER);
        fill("yellow");
        rect (pos.x,pos.y,this.w,this.h);
        pop();*/

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.w, this.h);
        pop();
    }
}