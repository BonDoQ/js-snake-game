var Game = Game || {};

/**
 * Snake Object
 * @type {Object}
 */
 Game.Snake = {
	/**
	 * Snake Points
	 * @type {Array}
	 */
	 body : Game.Config.SNAKE_START,

	/**
	 * Snake Move Direction
	 * @type {String}
	 */
	 direction : Game.Config.DIR_RIGHT,

	/**
	 * draw the snake in Board
	 * @return {[none]}
	 */
	 draw  : function() {
		// draw snake
		for (var i = 1; i < this.body.length; i++) {
			$(Game.Lib.dataPoint(this.body[i])).snake();
		}

		//remove last Point
		$(Game.Lib.dataPoint(this.body[0])).empty();

	},

	/**
	 * validate the new Point with the Board boundaries
	 * @param  {[object]} point {x,y}
	 * @return {[object]} point {x,y}
	 */
	 validatePoint : function(point) {
	 	if (point.x > Game.Config.BOARD_WIDTH) point.x = 1;
	 	if (point.y > Game.Config.BOARD_HEIGHT) point.y = 1;

	 	if (point.x < 1) point.x = Game.Config.BOARD_WIDTH;
	 	if (point.y < 1) point.y = Game.Config.BOARD_HEIGHT;

	 	return point;
	 },

	/**
	 * validate the direction of snake (opposite moves s not allowed)
	 * @param  {[string]} direction [left,right,up,down]
	 * @return {[string]} direction [left,right,up,down]
	 */
	 validateDirection : function(direction) {
	 	if (direction === Game.Config.DIR_RIGHT && this.direction === Game.Config.DIR_LEFT)
	 		return Game.Config.DIR_LEFT;
	 	if (direction === Game.Config.DIR_LEFT && this.direction === Game.Config.DIR_RIGHT)
	 		return Game.Config.DIR_RIGHT;
	 	if (direction === Game.Config.DIR_UP && this.direction === Game.Config.DIR_DOWN)
	 		return Game.Config.DIR_DOWN;
	 	if (direction === Game.Config.DIR_DOWN && this.direction === Game.Config.DIR_UP)
	 		return Game.Config.DIR_UP;

	 	return direction;

	 },

	/**
	 * moves the snake in the board
	 * @param  {[string]} direction direction of movement
	 * @return {[none]}
	 */
	 move : function(direction) {
	 	var last = { x :  this.body[this.body.length-1].x, y : this.body[this.body.length-1].y};
	 	this.direction = this.validateDirection(direction);
	 	switch(this.direction) {
	 		case Game.Config.DIR_RIGHT:
	 		last.x += 1;
	 		break;
	 		case Game.Config.DIR_LEFT:
	 		last.x -= 1;
	 		break;
	 		case Game.Config.DIR_UP:
	 		last.y -= 1;
	 		break;
	 		case Game.Config.DIR_DOWN:
	 		last.y += 1;
	 		break;
	 	}

		// add the new point
		this.body.push(this.validatePoint(last));

		// Check Collision with food
		if (this.eat() === false)
			this.body.shift()

		//draw snake
		this.draw();

		//Check Collision with Itself
		var result = this.collides();
		if (result !== false) {
			
			console.log($(Game.Lib.dataPoint(result)).crash());
			this.stop();
		}
	},

	/**
	 * Check if the Snake Collied with Food Object
	 * @return {[Boolean]} Collision Status
	 */
	eat : function() {
		var last = { x :  this.body[this.body.length-1].x, y : this.body[this.body.length-1].y};
		var food = { x :  Game.Food.position.x, y : Game.Food.position.y};

		if (food.x === last.x && food.y === last.y) {
			this.draw();
			Game.Food.generate();
			return true;
		}
		return false;
	},

	/**
	 * check if the Snake Collides
	 * @return {[object]} false if no Collision OR Point of Collision
	 */
	collides : function () {
		for (var i = 0; i < this.body.length - 1 ; i++) {
			for (var j = i + 1; j < this.body.length; j++) {
				if (this.body[i].x === this.body[j].x && this.body[i].y === this.body[j].y){
					return this.body[i];
				}
			}
		}
		return false;
	},

	/**
	 * Snake Initalization
	 * @return {void}
	 */
	init : function() {
		this.draw();
		this.start();
	},

	/**
	 * Start Snake movement
	 * @return {void}
	 */
	start : function () {
		this.interval = setInterval(function () { Game.Snake.move(Game.Snake.direction);  }, Game.Config.SNAKE_SPEED);
		window.document.addEventListener('keydown', this.directionListener);
	},

	/**
	 * Stop Snake movement
	 * @return {[type]} [description]
	 */
	stop : function () {
		clearInterval(this.interval);
		window.document.removeEventListener('keydown', this.directionListener);
	},

	/**
	 * Key Down Event Lisnter for direction
	 * @param  {Object} e window.event
	 * @return {void}
	 */
	directionListener : function (e) {
			e = e || window.event;
			var dir = "";
			switch(e.keyCode) {
			case Game.Config.KEY_LEFT:
			dir =  Game.Config.DIR_LEFT;
			break;

			case Game.Config.KEY_UP:
			dir =  Game.Config.DIR_UP;
			break;

			case Game.Config.KEY_RIGHT:
			dir =  Game.Config.DIR_RIGHT;
			break;


			case Game.Config.KEY_DOWN:
			dir =  Game.Config.DIR_DOWN;
			break;
		}
		Game.Snake.move(dir);
	}
};