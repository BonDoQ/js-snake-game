var Game = Game || {};

Game.Board = {
	height : Game.Config.BOARD_HEIGHT,
	width  : Game.Config.BOARD_WIDTH,
	draw : function() {
		var b = "";
		for (var i = 1; i <= this.height; i++) {
			b += '<tr>';
			for (var j = 1; j <= this.width; j++) {
				b += '<td data-point="'+ i + ',' + j +'" class="empty"></td>';
			}
			b += '</tr>';
		}
		$("table").html(b);
	}
};
