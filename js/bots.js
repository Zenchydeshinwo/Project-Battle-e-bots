function Bot(game, botX, vx, vy)
    {
    console.log(game)
    this.Game=game,
    this.contador=0,
    this.x=botX,
    this.vx=vx,
    this.vy=vy
    this.img = new Image();
    this.img.src = './img/bot1.png';
    
    }
    
    Bot.prototype.drawBot=function()
    {

        this.contador=this.contador+1


        if (this.contador%3==0) {this.contador=0}
    
        
        //this.Game.ctx.fillStyle="red"
        this.Game.ctx.drawImage(this.img, 75*this.contador, 0, 70, 70, 400+this.vx, 150+this.vy, 80, 70)
        
        console.log("Hi")
    }
    
    Bot.prototype.moveBot=function(expression)
    { 
        switch(expression) 
        {
            case 1:
              this.vx-=5
              break;
            case 2:
              this.vy-=5
              break;
            case 3:
              this.vx+=5
              break;
            case 4:
              this.vy+=5
              break;
            default:
    
        }
     console.log(">>>>>>>>>"+this.vx+">>>>>>>>>>>"+this.vy)
    
    }
    

