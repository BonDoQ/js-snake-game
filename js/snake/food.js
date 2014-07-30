var Game = Game || {};


Game.Food = {
	position : {},

	generate : function() {
		this.position.x = Game.Lib.rand(1, Game.Config.BOARD_WIDTH-1);
		this.position.y = Game.Lib.rand(1, Game.Config.BOARD_HEIGHT-1);
		this.validPoint() ? this.draw() : this.generate();
	},

	draw : function(){
		$(Game.Lib.dataPoint(this.position)).food();
	},

	validPoint : function () {
		if (this.position.x > Game.Config.BOARD_WIDTH || this.position.x < 1 ||
			this.position.y > Game.Config.BOARD_HEIGHT || this.position.y < 1) {
			return false;
		}

		for (var i = 0; i < Game.Snake.body.length; i++) {
			if (Game.Snake.body[i].x === this.position.x && Game.Snake.body[i].y === this.position.y)
				return false;
		}

	return true;
	}
};