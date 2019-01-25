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
  this.y = (game.canvas.height * 0.3);
  
  this.acel = 0.15;


  this.arrBullets=[];


  if (number_player==1){

  this.img = new Image();
  this.img.src = "./img/bot1.png";

}else{
    this.img = new Image();
    this.img.src = "./img/vigilant.png"

}

}

Bot.prototype.drawBot = function() { 

    
  this.game.ctx.drawImage(
    this.img,
    75 * this.animeBot(),
    0,
    70+10*((this.player-1)/this.player),
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

    var bullet=new Bullets(this.game, this.x, this.y,this.w, this.y0,this.player)
    this.arrBullets.push(bullet)

}

Bot.prototype.clearBullets=function(indice){

    if (this.arrBullets[indice].xBul>1500||this.arrBullets[indice].xBul<-100){
        this.arrBullets.splice(indice,1) 
    }   
}

Bot.prototype.deathVictory=function(indice){

    console.log(`YOU'RE DEATH PLAYER ${indice}!!!!!!!`)
    this.game.ctx.fillText(`YOU'RE DEATH PLAYER ${indice}!!!!!!!`, 500, 400)
    //alert(`YOU'RE DEATH PLAYER ${indice}!!!!!!!`)
    clearInterval(this.game.interval)
    
}

