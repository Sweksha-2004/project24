class Paper{
    constructor(x,y,r)
     {
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
    }
    
    this.body = Bodies.circle(x,y,radius,options);
    this.radius=this.radius;
    World.add(world, this.body);
  }
  display(){
     
    var pos = this.body.postion;

    push()
    translate(pos.x,pos.y);
    rectMode(CENTER)

     //ellipseMode(this.radius);
     fill("pink");

     //circle(this.body.position.x,this.body.position.y,this.radius);    
    pop()
  }
};



    
