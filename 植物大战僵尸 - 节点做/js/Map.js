function Map(){

	var mymap;
    //	设置图片的长度
	var bgWidth = 1400;
	
	var bgPositionX = -110;
	
	this.init = function(box){
//		box.style.overflow = "hidden"
		//得到地图节点
		mymap = document.createElement("div");
		//设置地图来源
		mymap.style.backgroundImage= 'URL("img/BackGround/background1unsodded_1.jpg")';
		
		mymap.style.backgroundPositionX = bgPositionX +"px";
		mymap.style.backgroundPositionY = "0px";	
		
		mymap.style.width = bgWidth + "px";
		mymap.style.height = "600px";
		//将地图对象添加到box盒子里面去
		
		
		
		box.appendChild(mymap);
		
	}
	
	
    this.run = function(buffer) {
		
		bgPositionX = bgPositionX -2;
		
		mymap.style.backgroundPositionX = bgPositionX +"px";
		
//		console.log("bgPositionX = "+bgPositionX);
		
		if(bgPositionX <=-500){	
			
			
			
			
			bgPositionX = -110;
            mymap.style.backgroundPositionX = bgPositionX +"px";
            
            window.clearInterval(buffer); 
            
            this.callBack();
            
           
		}
		
		
	}
	
	 this.callBack;
	 
	 this.addFinishlistener = function (call) {
	 	
	 this.callBack = call;
	 
		
	}
	
	
}
