//Cosntructor juego
window.onload=function()
{
    

    var Game = 
    {

        canvas:undefined,
        ctx:undefined,
        
        start:function()
        {

            //this.moveBot()
            this.canvas=document.getElementById("ring")
            this.ctx=this.canvas.getContext("2d")

            this.interval =setInterval(function(){

                //console.log(this)
                this.ctx.clearRect(0,0,1200,1000)
                this.reDrawBot()

            }.bind(this),1000/60)


            

        },
        startBot:function()
        {
            
            //var x=function() {return Math.floor(Math.random()*800)+100}
            
            this.bot=new Bot(this,600,10,25)
            //this.bot2 = new Bot(this, 200,25,60)
            
            
        },

        reDrawBot:function()
        {   
            this.bot.moveBot(37)
            this.bot.drawBot()
            //this.bot2.drawBot()
        }

        
        
    }

    

Game.start();
Game.startBot();

} 
