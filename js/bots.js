function Bot(esto)
    {
    
    this.game=esto.game,
    this.contador=0,
    this.counter=0,
    this.vx=window.innerWidth*0.08,
    this.vy=window.innerHeight*.8,
    this.img = new Image();
    this.img.src = './img/bot1.png';
    console.log("++++++++++++"+this)

    }
    
    Bot.prototype.drawBot=function()
    {
        // this.counter+=1
        // console.log(">>>>>>>>>>>>>"+this)
        // //debugger
        // if(this.counter>25)
        // {
        //     this.contador=this.contador+1
        //     this.counter=0
        // }
        // if (this.contador%3==0) {this.contador=0}

        this.game.ctx.drawImage(this.img, 75*this.contador, 0, 70, 70, this.vx, this.vy, window.innerWidth*0.05 ,window.innerHeight*0.1)
        
    }
    
    Bot.prototype.moveBot=function(expression)
    { 

        if(expression==37) this.vx-=8
        if(expression==38) this.vy-=8
        if(expression==39) this.vx+=8
        if(expression==40) this.vy+=8


    }

    //Bot.prototype.animeBot=function(this)
    








