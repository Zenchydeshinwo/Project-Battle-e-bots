function Bullets(game,x,y,w,h,y0) {
    this.game = game;
    this.countBullets = 0;
    
    this.acel = 0.15;


    this.xBul = x+90;
    this.yBul = y;
    this.y0 = y0;

    this.wBul=w;
    this.hBul=h;
    
    this.img = new Image();
    this.img.src = "./img/escenariobasico.jpg";

}

Bullets.prototype.drawBullets=function(){

    

    this.game.ctx.drawImage(
        this.img,
        40,40,
        this.wBul/2,
        this.hBul/2,
        this.xBul+90,
        this.yBul,
        this.wBul,
        this.hBul
      );

}

Bullets.prototype.clearBullets=function(){

//Funcion para borrar los elementos del array bullets

}