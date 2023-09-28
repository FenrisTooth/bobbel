class bobbel{
constuctor(x,y){
    this.pos = createVector(x,y);
   this.vel = 6;
    this.dir = createVector(1,0);
}

Update(){
this.pos.y -= this.vel
}

Show(){
    circle(this.pos.x, this.pos.y, 10)
}


}