//Cosntructor juego
window.onload=function()
{
    var Game = 
    {
        canvas:undefined,
        ctx:undefined,
        factorFrame:60,
        counterFrame:0,
        start:function()
        {
            this.reset()
            this.canvas=document.getElementById("ring")
            this.ctx=this.canvas.getContext("2d")
            this.canvas.width=window.innerWidth
            this.canvas.height=window.innerHeight
            this.startBot()
            this.chrono()
            this.background()
            this.dirBot()
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
                 if (e.keyCode==80){this.stop()}
                
            }.bind(this)
        },
        

        background:function()
        {
            this.background= new Background(this)
        },
        stop: function () {
            clearInterval(this.interval);
        },

        chrono:function()
        {
            this.interval=setInterval(function()
                {
                this.counterFrame++
                this.background.draw()
                this.bot.drawBot()
                this.bot.animeBot()
                if(this.counterFrame>500){this.counterFrame=0}
                }.bind(this),100/this.factorFrame)
        },
        reset:function(){
            this.counterFrame=0
        }
    }
    // Game.startBot();
    Game.start();
} 

