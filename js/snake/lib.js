var Game = Game || {};

$.fn.food = function () {
	return this.removeClass().addClass(Game.Config.CSS_FOOD_CLASS);
};

$.fn.snake = function () {
	return this.removeClass().addClass(Game.Config.CSS_OCCUPIED_CLASS);
};

$.fn.empty = function () {
	return this.removeClass().addClass(Game.Config.CSS_EMPTY_CLASS);
};

$.fn.crash = function () {
	return this.removeClass().addClass(Game.Config.CSS_CRASH_CLASS);
};


Game.Lib = {

	/**
	 * convert board point to Jquery Selector in DOM
	 * @param  {[object]} point {x,y}
	 * @return {[string]}       DOM Selector for this point
	 */
	dataPoint : function(point) {
	 	return "td[data-point='" + point.y + "," + point.x + "']";
	},

	/**
	 * generate Random Number within Interval
	 * @param  {[Number]} min Minimum Number Allowed
	 * @param  {[Number]} max Maximum Number Allowed
	 * @return {[Number]}     Randomly Generated Number
	 */
	rand : function (min,max) {
	 	return Math.floor(Math.random()*(max-min+1)+min);
	},

}