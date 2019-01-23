//Cosntructor juego
window.onload=function()
{
    var Game = 
    {
        canvas:undefined,
        ctx:undefined,
        factorFrame:60,
        fractionFrame:100,
        // counterFrame:0,
        start:function()
        {
            this.reset()
            this.canvas=document.getElementById("ring")
            this.ctx=this.canvas.getContext("2d")
            this.canvas.width=window.innerWidth
            this.canvas.height=window.innerHeight
            this.chrono()
            this.background()
            this.dirBot()
        },
        startBot:function()
        {
            
            this.bot=new Bot(window)

        },
        dirBot:function()
        {     
            document.onkeydown = function(e)
            {                
                
                 this.bot.moveBot(e.keyCode)
                 if (e.keyCode==80){this.stop()}
                
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

        chrono:function()
        {
            this.interval=setInterval(function()
                {
                this.counterFrame++
                if (this.fractionFrame==this.counterFrame){this.counterFrame=0}
                this.background.draw()
                this.reDrawBot()
                
                }.bind(this),this.fractionFrame/this.factorFrame)
        },
        reset:function(){
            this.counterFrame=0
        }
    }
    Game.startBot();
    Game.start();
    console.log("========D"+this)
} 

