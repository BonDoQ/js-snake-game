var Game = Game || {}


Game.init = function() {
	this.Board.draw();
	this.Food.generate();
	this.Snake.init();
};


jQuery(document).ready(function($) {
	Game.init();
});




