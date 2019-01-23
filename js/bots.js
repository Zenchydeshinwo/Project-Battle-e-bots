function Bot(game) {
  this.game = game;
  this.contador = 0;
  this.counter = 0;
  this.vx = 0;
  this.vy = 0;
  this.acel = 0.15;
  this.x = game.canvas.width * 0.08;
  this.y = game.canvas.height * 0.3;
  this.y0 = game.canvas.height * 0.8;
  this.img = new Image();
  this.img.src = "./img/bot1.png";
}

Bot.prototype.drawBot = function() {
  this.game.ctx.drawImage(
    this.img,
    75 * this.animeBot(),
    0,
    70,
    70,
    this.x,
    this.y,
    this.game.canvas.width * 0.05,
    this.game.canvas.height * 0.1
  );
};

Bot.prototype.animeBot = function() {
  if (this.game.counterFrame % 35 == 0) {
    this.counter++;
  }
  if (this.counter == 3) {
    this.counter = 0;
  }
  return this.counter;
};

Bot.prototype.jumpBot = function(param) {
  if (param == 1) {
    this.vy += 10;
    return (this.y -= this.vy);
  } else return (this.vy = 1);
};

Bot.prototype.displaceBot = function(expression) {
  if (expression == 37) this.x -= 10;
  if (expression == 39) this.x += 10;
  if (expression == 40) this.y += 10;
  if (expression == 38) {
    this.y -= 5;
    this.vy = -7;
  }
};
Bot.prototype.jump = function() {
  if (this.y >= this.y0) {
    this.y = this.y0;
    this.vy = 0;
  } else {
    this.vy += this.acel;
    this.y += this.vy;
  }
};
