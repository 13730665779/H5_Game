function Sun() {

	var sun;

	var sunX;
	var sunY;
	var sunYSpeed = 10;
    var sunWidth = 66;
    var sunHeight = 65;
    
	var SUN_NORMAL = 0;
	var SUN_RUN = SUN_NORMAL + 1;
	var state = SUN_RUN;
	var time = 0;

	this.init = function(box) {

		sun = document.createElement("img");
		sun.src = "img/Start/Sun.gif";
		sun.style.width = sunWidth+"px";
		sun.style.height = sunHeight+"px";
		sun.style.position = "absolute";
		this.random();
		sun.style.left = sunX + "px";
		sun.style.top = sunY + "px";
		sun.onclick = this.clickSun;

		box.appendChild(sun);

	}

	this.random = function() {
		sunX = Math.floor(Math.random() * 600 + 200);
		sunY = -Math.floor(Math.random() * 66 + 200);

	}

	var callBack;
	this.setSunNumListener = function(call) {
		callBack = call;

	}

	this.clickSun = function() {

//		sun.remove();
//		sun = null;
		sunY = -500;
		sun.style.top = sunY + "px";
		//重新随机生成一个随机来重置太阳的位置
		
		sunX = Math.floor(Math.random() * 600 + 200);
		sun.style.left = sunX + "px";
		//回调函数增加数量
		callBack();

	}

	this.sunMove = function() {

		sunY = sunY + sunYSpeed;
        var sunYRandom = Math.floor(Math.random()*100+434);
		if(sunY >= sunYRandom) {
			sunY = sunYRandom;
		
		}
		sun.style.top = sunY + "px";

	}

	this.run = function() {

		switch(state) {

			case SUN_NORMAL:
				break;

			case SUN_RUN:
				this.sunMove();
				break;
		}

	}

}