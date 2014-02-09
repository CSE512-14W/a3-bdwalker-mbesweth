var moused = false;

$(document).ready(function(){
	$("#control_holder").hover(moveIn, moveOut);
	$("#datepicker").datepicker();
	
})

function moveIn(e){
	if(!moused){
		$("#control_overlay").animate({
			right: "0px"
		});
		$("#control").animate({
			right: "0px"
		});
		$("#grab").animate({
			right: "275px"
		});
		moused = true;
	}
}

function moveOut(e){
	if(moused){
		$("#control_overlay").animate({
			right: "-1000px"
		});
		$("#control").animate({
			right: "-1000px"
		});
		$("#grab").animate({
			right: "10px"
		});
		moused = false;
	}
}