var Game = Game || {};

Game.Config = {
	BOARD_HEIGHT 	   : 18,
	BOARD_WIDTH  	   : 40,
	DIR_LEFT	 	   : 'left',
	DIR_UP		 	   : 'up',
	DIR_RIGHT    	   : 'right',
	DIR_DOWN	 	   : 'down',
	KEY_LEFT	 	   : 37,
	KEY_UP	   		   : 38,
	KEY_RIGHT	   	   : 39,
	KEY_DOWN		   : 40,
	SNAKE_START  	   : [{ x : 21, y: 7}, { x : 22, y: 7}, { x : 23, y: 7}, { x : 24, y: 7}, { x : 25, y: 7}, { x : 26, y: 7}],
	SNAKE_SPEED		   : 150,
	CSS_EMPTY_CLASS	   : 'empty',
	CSS_OCCUPIED_CLASS : 'occupied',
	CSS_FOOD_CLASS	   : 'food',
	CSS_CRASH_CLASS    : 'crash',
}
