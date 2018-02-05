var flag=0;

function test(){
	var top = document.getElementById("top");
	if(flag == 0){
		top.innerHTML = "<video id='myVideo' width='1350' height='500' autoplay loop><source src='image/100.mp4' type='video/mp4'></video>";
		var video = document.getElementById("myVideo");
		video.style.display="block";
		video.style.cursor="pointer";
		flag=1;
	}
	if(flag==2){
		var video = document.getElementById("myVideo");
		video.play();
		video.style.display="block";
		video.style.cursor="pointer";
		flag=1;
	}
}

function mouseOut(){
	
	if(flag==1){
		var video = document.getElementById("myVideo");
		video.pause();
		video.style.display="none";
		flag=2;
	}
}