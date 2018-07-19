function Start() {
	

	var flagMeterEmpty;
	
//	定义加载满的图片
	var flagMeterFull;
	
//	定义僵尸头像
	var flagMeterParts1;
	
//	设置进度条长度
	var flagMeterWidth = 0;
	
//	设置僵尸头像的left值
    var zombieLeft = 360;
    
    //设置加载的进度为0
    var loading = 0;
    
    var h1;
    
	this.init = function (box){
		
		
//		box.style.display = "block";
		box.style.overflow = "hidden";
//		start.style.display = "none";	
		//定义未加载的图片
		flagMeterEmpty = document.createElement("img");
		//	定义加载满的图片
		flagMeterFull = document.createElement("img");
		//	定义僵尸头像
		flagMeterParts1 = document.createElement("img");
      
        //		设置flagMeterFull属性
        flagMeterFull.src = "img/Start/FlagMeterFull.png";
        flagMeterFull.style.width = flagMeterWidth+"px";
        flagMeterFull.style.height = "21px";
        flagMeterFull.style.position = "absolute";
        flagMeterFull.style.left = "370px";       
        flagMeterFull.style.top = "290px";   
        
        //		设置flagMeterEmpty属性
        flagMeterEmpty.src = "img/Start/FlagMeterEmpty.png";
        flagMeterEmpty.style.width = "157px";
        flagMeterEmpty.style.height = "21px";
        flagMeterEmpty.style.position = "absolute";
        flagMeterEmpty.style.left = "370px";       
        flagMeterEmpty.style.top = "290px";  
        
         //		设置flagMeterParts1属性
        flagMeterParts1.src = "img/Start/FlagMeterParts1.png";
        flagMeterParts1.style.width = "35px";
        flagMeterParts1.style.height = "35px";
        flagMeterParts1.style.position = "absolute";
        flagMeterParts1.style.left = zombieLeft+"px";       
        flagMeterParts1.style.top = "280px";   
        
//      加载进度
        h1 = document.createElement("h4");
        h1.style.position = "absolute";
        h1.style.left = "540px";   
        h1.style.color="white";
        h1.style.top = "290px";  
        h1.innerHTML=loading+"/157";
        
//      将创建的节点添加到盒子中去
        box.appendChild(flagMeterEmpty);
		box.appendChild(flagMeterFull);
		box.appendChild(flagMeterParts1);
		box.appendChild(h1);
		
	}
	
	
	this.run = function (buffer) {
		
//          增加满加载图片的长度   
			flagMeterWidth = flagMeterWidth+1;
//			增加僵尸头像的left值
			zombieLeft = zombieLeft+1;
//		    增加进度显示的值
		    loading = loading+1;
//		    酱实时进度显示到界面中
		    h1.innerHTML = loading+"/157";
//		    判断,当到达尽头时将气体东西全部隐藏,开始执行主要的游戏
			if(flagMeterWidth == 157 || zombieLeft == 517){
				
				
				this.callBack();
				//将创建的节点设置隐藏
				flagMeterEmpty.style.display = "none";
			    flagMeterFull.style.display = "none";
			    h1.style.display = "none";
			    flagMeterParts1.style.display = "none";
			    
			    
			    window.clearInterval(buffer);
			    
                
              
			}
			
			flagMeterFull.style.width = flagMeterWidth+"px";
			flagMeterParts1.style.left = zombieLeft+"px";  
		
        
       }
	
	  this.callBack;
	  this.addInitGameListener = function (call){
	  this.callBack = call;
	 }
} 
	
	

