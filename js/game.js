//Cosntructor juego
window.onload=function()
{
    

    var Game = 
    {
        
        canvas:undefined,
        ctx:undefined,
        factorFrame:60,
        start:function()
        {
            this.background()
            //debugger
            this.dirBot()
            this.canvas=document.getElementById("ring")
            this.ctx=this.canvas.getContext("2d")
            this.canvas.width=window.innerWidth
            this.canvas.height=window.innerHeight

            this.interval=setInterval(function(){

              //  this.dirBot()

                // console.log(this)
                //this.ctx.clearRect(0,0,1200,1000)
                this.background.draw()
                this.reDrawBot()

            }.bind(this),100/this.factorFrame)




        },
        startBot:function()
        {

            //var x=function() {return Math.floor(Math.random()*800)+100}
            console.log(this)
            this.bot=new Bot(this,600,10,25)
            //this.bot2 = new Bot(this, 200,25,60)
            console.log(this.bot)

        },

        dirBot:function()
        {     
            document.onkeydown = function(e)
            {                
                // switch (e.keyCode)
                //  {
                //   case 38: this.bot.moveBot(2); break;
                //   case 40: this.bot.moveBot(4); break;
                //   case 37: this.bot.moveBot(1); break;
                //   case 39: this.bot.moveBot(3); break;                         
                //  }
                 this.bot.moveBot(e.keyCode)
                // if(e.keyCode==38) this.bot.moveBot(2)
                // if(e.keyCode==39) this.bot.moveBot(3)
                // if(e.keyCode==40) this.bot.moveBot(4)


            }.bind(this)
        },

        reDrawBot:function()
        {   
            
            this.bot.drawBot()
            //this.bot2.drawBot()
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

