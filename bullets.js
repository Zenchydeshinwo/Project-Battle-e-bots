function Bullets(game,x,y,w,y0,player) {
    this.game = game;
    this.countBullets = 0;
    
    this.acel = 0.15;
    this.player=player;

    this.xBul = x+w-(2.5*w)*(player-1);

    this.yBul = y;
    this.y0 = y0;

    this.wBul=50;
    this.hBul=50;
    
    this.img = new Image();
    this.img.src = "./img/BALA.png";

}

Bullets.prototype.drawBullets=function(){



    this.game.ctx.drawImage(
        this.img,
        0,0,
        310,
        294,
        this.xBul,//-250*((this.player-1)/this.player),
        this.yBul,
        this.wBul,
        this.hBul
      );
      


}

Bullets.prototype.moveBullets=function(bot){
    console.log (bot)
    //this.xBul-=10
    this.xBul=this.xBul+10*(Math.pow(-1,(1+bot)))
   // debugger
   // this.xBul=this.xBul+10*(Math.pow(-1,(1+bot)))
  //  debugger
    console.log(this.xBul,">>>>>><",Math.pow(-1,(1+bot)))
    this.collision()

}

Bullets.prototype.collision=function(k){
    

    if (this.xBul+this.wBul>this.game.bot2.x && this.xBul<this.game.bot2.x+this.game.bot2.w 
        && this.yBul+this.hBul>this.game.bot2.y && this.yBul<this.game.bot2.y+this.game.bot2.h ){
        
        this.game.bot2.vida-=10
        this.xBul=2000
        if (this.game.bot2.vida<=0||this.game.bot.vida<=0) this.game.bot2.deathVictory()


        console.log("Me comes los cojones ++++",this.game.bot2.vida)
    }


    


}

