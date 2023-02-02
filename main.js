/**
 * 
 */

var ready = (callback) =>
{
	if(document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}

ready(() =>
{
	document.querySelector(".header").style.height = window.innerHeight + "px";
})


//pop up window
function toggleBlur(e)
{
	var blur = document.getElementById('blur');
	var popup1 = document.getElementById('popup1');
	var popup2 = document.getElementById('popup2');
	var popup3 = document.getElementById('popup3');
	var popup4 = document.getElementById('popup4');
	blur.classList.toggle('active'); //blur element
	
	if(e==1){
		popup1.classList.toggle('active');
	}
	
	if(e==2)
	{
		popup2.classList.toggle('active');
	}
	
	if(e==3)
	{
		popup3.classList.toggle('active');
	}
	
	if(e==4)
	{
		
		popup4.classList.toggle('active');
	}
}





