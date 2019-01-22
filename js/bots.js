function Bot(game, botX, vx, vy)
    {
    console.log(game)
    this.Game=game,
    this.contador=0,
    this.counter=0,
    this.x=botX,
    this.vx=vx,
    this.vy=vy
    this.img = new Image();
    this.img.src = './img/bot1.png';
    
    }
    
    Bot.prototype.drawBot=function()
    {
        this.counter+=1

        if(this.counter>25)
        {
            this.contador=this.contador+1
            this.counter=0
        }

        if (this.contador%3==0) {this.contador=0}
    
        
        //this.Game.ctx.fillStyle="red"
        this.Game.ctx.drawImage(this.img, 75*this.contador, 0, 70, 70, 400+this.vx, 150+this.vy, 80, 70)
        
        console.log("Hi")
    }
    
    Bot.prototype.moveBot=function(expression)
    { 

        if(expression==37) this.vx-=8
        if(expression==38) this.vy-=8
        if(expression==39) this.vx+=8
        if(expression==40) this.vy+=8


        // if (expression<3)
        // {

        //     if(expression==2)
        //     {
        //     this.vy-=5
        //     }

        //     else this.vx-=5

        // }
        // else if(expression==3)
        // {
        //     this.vx+=5
        // }
        //     else
        //     {
        //         this.vy+=5
        //     }
        
     //console.log(">>>>>>>>>"+this.vx+">>>>>>>>>>>"+this.vy)
    
    }
    








// switch(expression) 
//         {
//             case 1:
//               this.vx-=5
//               break;
//             case 2:
//               this.vy-=5
//               break;
//             case 3:
//               this.vx+=5
//               break;
//             case 4:
//               this.vy+=5
//               break;
//             default:
    
//         }