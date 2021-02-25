class Bob{
constructor(x,y){
    var options={
        isStatic :  true,
        density:1,
        friction:0.8

    }
   
    this.body=Bodies.circle(x,y,25,options);
    World.add(world,this.body);

}
display(){
    var pos=this.body.position;
fill("red");
ellipseMode(RADIUS);
ellipse(pos.x,pos.y,25);
}




}