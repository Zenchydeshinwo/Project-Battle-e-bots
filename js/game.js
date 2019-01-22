//Cosntructor juego
window.onload=function()
{
    var Game = 
    {
        canvas:undefined,
        ctx:undefined,
        factorFrame:60,
        //counterFrame:0,
        start:function()
        {
            this.background()
            this.dirBot()
            this.canvas=document.getElementById("ring")
            this.ctx=this.canvas.getContext("2d")
            this.canvas.width=window.innerWidth
            this.canvas.height=window.innerHeight
            this.interval=setInterval(function()
                {
                this.background.draw()
                this.reDrawBot()
                }.bind(this),100/this.factorFrame)
        },
        startBot:function()
        {
            
            this.bot=new Bot(this)

        },
        dirBot:function()
        {     
            document.onkeydown = function(e)
            {                
                
                 this.bot.moveBot(e.keyCode)
                
            }.bind(this)
        },
        reDrawBot:function()
        {   
            this.bot.drawBot()
        },

        background:function()
        {
            this.background= new Background(this)
        },
        stop: function () {
            clearInterval(this.interval);
          },
    }
    Game.startBot();
    Game.start();
} 

