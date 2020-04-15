class BaseClass{
constructor(x,y,width,height){

var  option={
friction:1,
density:1


  }
  this.body=Bodies.rectangle(x,y,width,height,option);
  this.image=loadImage("sprites/base.png");
  World.add(world,this.body);

}
display(){;
push();
tranlate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
imageMode (CENTER);
image(this.image,0,0,this.body.width,this.body.height);
pop ();



}
}