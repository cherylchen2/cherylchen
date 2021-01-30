console.log("In aboutGames\n");

KEY_CODES = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
  }
  
  KEY_STATUS = {};
  for (code in KEY_CODES) {
    KEY_STATUS[ KEY_CODES[ code ]] = false;
  }
  
  document.onkeydown = function(e) {
    // Firefox and opera use charCode instead of keyCode to
    // return which key was pressed.
    var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
    if (KEY_CODES[keyCode]) {
      e.preventDefault();
      KEY_STATUS[KEY_CODES[keyCode]] = true;
    }
  }
  
  document.onkeyup = function(e) {
    var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
    if (KEY_CODES[keyCode]) {
      e.preventDefault();
      KEY_STATUS[KEY_CODES[keyCode]] = false;
    }
  }

var imageRepo = new function() {
    console.log("Image var init\n");
    this.background = new Image();
    this.character = new Image();
    this.town = new Image();

    imagesNo = 3;
    loadCount = 0;
    function imageLoaded() {
        loadCount++;
        if (loadCount == imagesNo) window.init();
    }
    this.background.onload = function() {imageLoaded();}
    this.character.onload = function() {imageLoaded();}
    this.town.onload = function() {imageLoaded();}

    this.background.src = "sky-bg.jpg";
    this.character.src = "character.png";
    this.town.src = "info-bar.png";
}

function Drawable() {
    this.init = function(x,y, width, height) {
        console.log("Init default draw location to "+ x +" "+ y+"\n");
        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;
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

function Town() {
    console.log("Town drawing\n");
    this.speed = 3;
    this.draw = function() {
        this.context.drawImage(imageRepo.town, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
    };
    this.move = function() {
        if (KEY_STATUS.left || KEY_STATUS.right || KEY_STATUS.a || KEY_STATUS.d) {
            this.context.clearRect(this.x, this.y, this.width, this.height);
        }
        if (KEY_STATUS.left || KEY_STATUS.a) {
            this.x = this.x - this.speed;
            if (this.x<=0) this.x=0;
        } else {
            this.x = this.x + this.speed;
            if (this.x > imageRepo.town.width-this.width) this.x-=this.speed;
        }
        this.draw();
    };
}

Town.prototype=new Drawable();

function animate(w,h) {
    requestAnimFrame( animate );
    game.background.draw(w,h);
    game.town.move();
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
        this.bgCanvas=document.getElementById('background');
        this.townCanvas=document.getElementById('character');
        if(this.bgCanvas.getContext) {
            this.bgContext = this.bgCanvas.getContext('2d');
            this.townCanvas = this.bgCanvas.getContext('2d');
            Background.prototype.context = this.bgContext;
            Background.prototype.canvasWidth = this.bgCanvas.width;
            Background.prototype.canvasHeight = this.bgCanvas.height;
            Town.prototype.context=this.bgContext;
            Town.prototype.canvasWidth = this.bgCanvas.width;
            Town.prototype.canvasHeight = this.bgCanvas.height;
            this.background = new Background();
            this.background.init(0,0);
            this.town = new Town();
            this.town.init(0, 0);
            console.log("Game canvas context received\n");
            return true;
        } else {
            console.log("No context received\n");
            return false;
        }
    };

    this.start = function() {
        this.town.draw();
        animate();
    };
    //this.start = function() {
     //   animate(this.bgCanvas.width, this.bgCanvas.height);
    //};
}

var game = new Game();

function init(){
    if(game.init()){
        game.start();
    }
}