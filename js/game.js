//Cosntructor juego
window.onload=function()
{
    var Game = 
    {
        canvas:undefined,
        ctx:undefined,
        factorFrame:60,
        counterFrame:0,

        start:function(id)
        {
            this.reset()
            this.canvas=document.getElementById(id)
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
            this.bot=new Bot(this);
           // this.bot2=new Bot(this);

        },
        dirBot:function()
        {     
            document.onkeydown = function(e)
            {                

                 this.bot.displaceBot(e.keyCode)
                 if (e.keyCode==32){this.bot.shoot()}

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
            this.interval=setInterval(function(){
                this.counterFrame++
                this.background.draw()
                this.bot.drawBot()
                this.bot.animeBot()
                this.bot.jump()

                for (var k=0; k<this.bot.arrBullets.length;k++){
                    this.bot.arrBullets[k].drawBullets( )
                    console.log(this.bot.arrBullets[k], this.bot.arrBullets.length)

                }
                if(this.counterFrame>500){this.counterFrame=0}
                }.bind(this),1000/this.factorFrame)
        },
        reset:function(){
            this.counterFrame=0
        }
    }
    Game.start("ring");
} 

