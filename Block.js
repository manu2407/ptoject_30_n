class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.block_img= loadImage("block.png");
      World.add(world, this.body);
      World.add(world,this.block_img);
    }
    display(){
      var pos= this.body.position;
       image(this.block_img,pos.x, pos.y, this.width, this.height);  
     // rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
     
    }
}