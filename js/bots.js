function Bot(bot, botX, vx, vy)
    {

    this.game=bot,
    this.x=botX,
    this.vx=vx,
    this.vy=vy
    
    
    }
    
    Bot.prototype.drawBot=function()
    {
    
        
        this.game.ctx.fillStyle="red"
        this.game.ctx.fillRect(this.x+this.vx, 150+this.vy, 60, 90)
        console.log("Hi")
    }
    
    Bot.prototype.moveBot=function(expression)
    {
        switch(expression) 
        {
            case 1:
              this.vx-=10
              break;
            case 2:
              this.vy-=10
              break;
            case 3:
              this.vx+=10
              break;
            case 4:
              this.vy+=10
              break;
            default:
    
        }
     console.log(">>>>>>>>>"+this.vx+">>>>>>>>>>>"+this.vy)
    
    }
    

