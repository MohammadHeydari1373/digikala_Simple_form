
 function go_left(){

	if(pos > -400){
		pos -= 100;
		gal.style.left = pos + "%";
	}
	else{
		pos = 0;
		gal.style.left = pos + "%";		
	}
}


function go_right(){

	if(pos < 0){
		pos += 100;
		gal.style.left = pos + "%";
	}
	
}
