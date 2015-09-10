$(document).ready(function(){
	populateGrid(16,950);
	$('#size').click(function(){
		var rows = prompt("Enter # of rows","");
		var width = prompt("Enter width of grid","");
		populateGrid(rows, width);
	});
	
	$(document).click(function(){
		$('.sketchBox').hover(function(){
			$(this).css("background-color","blue");
		});		
	});
	
	$('#clear').click(function(){
		$('.sketchBox').css("background-color","black");
	});
});

function populateGrid(numBoxes, gridWidth){
	$('#grid').width(gridWidth);	
	for(x=1;x<=numBoxes;x++){
		for(i=1;i<=numBoxes;i++){
			$('#grid').append('<div class="sketchBox"></div>');
		};
	};
	var boxWidth = gridWidth/(parseInt(numBoxes)+parseInt(1));
	$('.sketchBox').css('width',boxWidth);
	$('.sketchBox').css('height',boxWidth);
};