var moused = false;

$(document).ready(function(){
	$("#control_holder").hover(moveIn, moveOut);
	
})

function moveIn(e){
	console.log("in");
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
	console.log("out");
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