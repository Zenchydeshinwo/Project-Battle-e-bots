function Bot(game,number_player) {

  this.game = game;
  this.player=number_player

  this.contador = 0;
  this.counter = 0;

  this.vida=100;

  this.vx = 0;
  this.vy = 0;

  this.w=this.game.canvas.width * 0.05;
  this.h=this.game.canvas.height * 0.1;

  this.y0 = game.canvas.height * 0.8;


  this.x = game.canvas.width * 0.08*(Math.pow(number_player,3));
  this.y = game.canvas.height * 0.3;
  
  this.acel = 0.15;


  this.arrBullets=[];

  this.img = new Image();
  this.img.src = "./img/bot1.png";

}

Bot.prototype.drawBot = function() {
  this.game.ctx.drawImage(
    this.img,
    75 * this.animeBot(),
    0,
    70,
    70,
    this.x,
    this.y,
    this.w,
    this.h
  );
};

Bot.prototype.animeBot = function() {
  if (this.game.counterFrame % 35 == 0) {
    this.counter++;
  }
  if (this.counter == 3) {
    this.counter = 0;
  }
  return this.counter;
};

Bot.prototype.jumpBot = function(param) {
  if (param == 1) {
    this.vy += 10;
    return (this.y -= this.vy);
  } else return (this.vy = 1);
};

Bot.prototype.displaceBot = function(expression) {
  if (expression == 37) this.x -= 10;
  if (expression == 39) this.x += 10;
  if (expression == 40) this.y += 10;
  if (expression == 38) 
  {
    this.y -= 5;
    this.vy = -7;
  }
  
};
Bot.prototype.jump = function() {
  if (this.y >= this.y0) {
    this.y = this.y0;
    this.vy = 0;
  } else {
    this.vy += this.acel;
    this.y += this.vy;
  }
};

Bot.prototype.shoot=function(){

    var bullet=new Bullets(this.game, this.x, this.y,this.w, this.y0)
    //console.log(bullet)
    this.arrBullets.push(bullet)

}

Bot.prototype.clearBullets=function(indice){

    if (this.arrBullets[indice].xBul>1500){
        this.arrBullets.splice(indice,1) 
    }   
}

