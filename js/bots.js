function Bot(bot, botX, vx, vy){

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
        case 37:
          this.vx-=1
          break;
        case 38:
          this.vy-=1
          break;
        case 39:
          this.vx+=1
          break;
        case 40:
          this.vy+=1
          break;
        default:
          
    }
 console.log(">>>>>>>>>"+this.vx+">>>>>>>>>>>"+this.vy)

}

