var open = true;

$(document).ready(function(){
	$grab = $("#grab");
	$grab.click(move);
	$grab.hover(function(){
		$(this).animate({opacity: 1})
	}, function(){
		$(this).animate({opacity: 0.8})
	});
	//$("#control_holder").hover(moveIn, moveOut);
	$("#datepicker").datepicker();
	
})

function move(){
	if(open)
		moveOut();
	else
		moveIn();
}

function moveIn(e){
	
	$("#control_overlay").animate({
		right: "0px"
	});
	$("#control").animate({
		right: "0px"
	});
	$("#grab").animate({
		right: "275px"
	}, 300);
	open = true;
	
}

function moveOut(e){
	
	$("#control_overlay").animate({
		right: "-1000px"
	});
	$("#control").animate({
		right: "-1000px"
	});
	$("#grab").animate({
		right: "10px"
	}, 200);
	open = false;
	
}