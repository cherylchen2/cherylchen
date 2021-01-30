console.log("In aboutGames\n");

var imageRepo = new function() {
    console.log("Image var init\n");
    this.background = new Image();
    this.background.src = "sky-bg.jpg";
}

function Drawable() {
    this.init = function(x,y) {
        console.log("Init default draw location to "+ x +" "+ y+"\n");
        this.x = x;
        this.y = y;
    }
    this.speed = 0;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.draw = function(){};
}

function Background(){
    this.speed = 1;
    this.draw = function(w,h) {
        //console.log("Drawing, x = "+ this.x+"\n");
        this.x += this.speed;
        scale = Math.min(this.canvasWidth / imageRepo.background.width, this.canvasHeight / imageRepo.background.height);
        this.context.drawImage(imageRepo.background, this.x, this.y, imageRepo.background.width*scale,imageRepo.background.height*scale);
        this.context.drawImage(imageRepo.background, this.x-this.canvasWidth, this.y,imageRepo.background.width*scale,imageRepo.background.height*scale);
        if (this.x >= this.canvasWidth) {
            this.x=0;
        }
    };
}

Background.prototype=new Drawable();

function animate(w,h) {
    requestAnimFrame( animate );
    game.background.draw(w,h);
}

/**
 * requestAnim shim layer by Paul Irish
 * Finds the first API that works to optimize the animation loop,
 * otherwise defaults to setTimeout().
 */
window.requestAnimFrame = (function(w,h){
	return  window.requestAnimationFrame   ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
})();

function Game() {
    this.init=function(){
        console.log("Init game from Game()\n");
        this.bgCanvas=document.getElementById('aboutGame');
        if(this.bgCanvas.getContext) {
            this.bgContext = this.bgCanvas.getContext('2d');
            Background.prototype.context = this.bgContext;
            Background.prototype.canvasWidth = this.bgCanvas.width;
            Background.prototype.canvasHeight = this.bgCanvas.height;
            this.background = new Background();
            this.background.init(0,0);
            console.log("Game canvas context received\n");
            return true;
        } else {
            console.log("No context received\n");
            return false;
        }
    };

    this.start = function() {
        animate(this.bgCanvas.width, this.bgCanvas.height);
    };
}

var game = new Game();

function init(){
    if(game.init()){
        game.start();
    }
}