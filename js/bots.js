function Bot(game)
    {
    
    this.game=game,
    this.contador=0,
    this.counter=0,
    this.vx=window.innerWidth*0.08,
    this.vy=window.innerHeight*.8,
    this.img = new Image();
    this.img.src = './img/bot1.png';

    }
    
    Bot.prototype.drawBot=function()
    {
        

        this.game.ctx.drawImage(this.img, 75*this.animeBot(), 0, 70, 70, this.vx, this.vy, window.innerWidth*0.05 ,window.innerHeight*0.1)
        
    }
    
    Bot.prototype.moveBot=function(expression)
    { 

        if(expression==37) this.vx-=8
        if(expression==38) this.vy-=8
        if(expression==39) this.vx+=8
        if(expression==40) this.vy+=8


    }

    Bot.prototype.animeBot=function(param)
    {
        if (param%35==0){
            this.counter++
        }
        if (this.counter==3) {this.counter=0}
        return this.counter
    }
    








