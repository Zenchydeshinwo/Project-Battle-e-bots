function Bullets(game,x,y,w,y0) {
    this.game = game;
    this.countBullets = 0;
    
    this.acel = 0.15;


    this.xBul = x+w;
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
        this.xBul,
        this.yBul,
        this.wBul,
        this.hBul
      );
      

}

Bullets.prototype.moveBullets=function(){

    this.xBul+=10
}
