//Cosntructor juego
window.onload=function()
{
    

    var Game = 
    {
        sign:0,
        canvas:undefined,
        ctx:undefined,

        start:function()
        {

            this.dirBot()
            this.canvas=document.getElementById("ring")
            this.ctx=this.canvas.getContext("2d")

            this.interval=setInterval(function(){

                
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

        dirBot:function()
        {
            document.onkeydown = function(e) {
                
                switch (e.keyCode) {
                    
                  case 38: this.bot.moveBot(2); break;
                  case 40: this.bot.moveBot(4); break;
                  case 37: this.bot.moveBot(1); break;
                  case 39: this.bot.moveBot(3); break;
                  console.log(">>>>>>>>>>>>>>>"+this.sign)
                  

                }
            }.bind(Game)
        },

        reDrawBot:function()
        {   
            
            this.bot.drawBot()
            //this.bot2.drawBot()
        }



    }

    Game.startBot();
    Game.start();



} 