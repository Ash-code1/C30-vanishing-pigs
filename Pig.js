class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

    // 0-255 - visiblity range(0- min visible and 255 - max visible)
    this.visibility = 255;
  }

  display(){

    // agar speed < 2.5 to pig dikhega nahi to remove hoga

    if(this.body.speed<2.5){
    
    super.display();
    }
    else{
      World.remove(world, this.body)

      // 255 - 5 = 250; everytime visibility is reduced by 5 till it fades
      this.visibility = this.visibility - 5;

      push ();

      // tint() - 255 - max visibility, current visibility jisse wo gayab ho raha hai(least value)
      tint (255, this.visibility);

      // image pr apply hoga with current x and y pos after the hit, width, height
      image (this.image, this.body.position.x, this.body.position.y, 50, 50);

      pop ();



    console.log(this.body.speed);
  }

}

};