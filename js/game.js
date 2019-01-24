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
            this.bot=new Bot(this,1);
            this.bot2=new Bot(this,2);

        },
        dirBot:function()
        {     
            document.onkeydown = function(e)
            {                

                 if (e.keyCode==32){debugger;this.bot.shoot()}

                 if (e.keyCode==81){debugger;this.bot2.shoot()}


                 if (e.keyCode==80){this.stop()}
                
       
            //BOT UNO
            if (e.keyCode == 37) this.bot.x -= 10;
            if (e.keyCode == 39) this.bot.x += 10;
            if (e.keyCode == 40) this.bot.y += 10;
            if (e.keyCode == 38) 
            {
              this.bot.y -= 5;
              this.bot.vy = -7;
            }
            //BOT DOS
            if (e.keyCode == 86) this.bot2.x -= 10;
            if (e.keyCode == 77) this.bot2.x += 10;
            if (e.keyCode == 66||e.keyCode == 78) this.bot2.y += 10;
            if (e.keyCode == 72) 
            {
              this.bot2.y -= 5;
              this.bot2.vy = -7;
            }
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
                this.bot2.drawBot()

                this.bot.animeBot()
                this.bot2.animeBot()


                this.bot.jump()
                this.bot2.jump()


                for (var k=0; k<this.bot.arrBullets.length;k++){
                    this.bot.arrBullets[k].drawBullets()
                    console.log(this.bot.arrBullets[k], this.bot.arrBullets.length)
                    this.bot.arrBullets[k].moveBullets(k)
                    this.bot.clearBullets(k)
                }
                    //+++++++++++++
                for (var kj=0; kj<this.bot2.arrBullets.length;kj++){
                    this.bot2.arrBullets[kj].drawBullets()
                    console.log(this.bot2.arrBullets[kj], this.bot2.arrBullets.length)
                    this.bot2.arrBullets[kj].moveBullets(kj)
                    this.bot2.clearBullets(kj)
                    //++++++++++

                }
                if(this.counterFrame>5000){this.counterFrame=0}
                }.bind(this),1000/this.factorFrame)
        },
        reset:function(){
            this.counterFrame=0
        }
    }
    Game.start("ring");
} 

