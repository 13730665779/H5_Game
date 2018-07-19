function Lawn () {
	
//	定义一个草坪变量,设置背景图为草坪
    var lawnBox;
    //设置草坪宽度
	var lawnWidth = 40;
	//定义土壤
	var sodRoll;
	//定义土壤的左偏移量
	var sodRollLeft = 170;
    //	定义土壤的宽度
	var sodRollWidth = 68;
    //	定义滚动草
	var sodRollCap;
	//定义滚动草左偏移量
	var sodRollCapleft = 167;
    //	定义滚草的大小
    var sodRollCapWidth = 73;
    var sodRollCapHeight = 71;
	
//	var zombieLeft;
	this.init = function (box,zombieLeft){
		//创建草坪盒子
		lawnBox = document.createElement("div");
		//设置草坪盒子的属性
		lawnBox.style.width = lawnWidth+"px";
		lawnBox.style.height = "117px";
		lawnBox.style.backgroundImage = "url('img/BackGround/sod1row.png')";
        lawnBox.style.position = "absolute";
        lawnBox.style.left = "140px";
        lawnBox.style.top = "290px";

        sodRoll = document.createElement("img");
	
		sodRoll.style.width = sodRollWidth+"px";
		sodRoll.style.height = "117px";
		sodRoll.src = "img/BackGround/sodRoll.png";
        sodRoll.style.position = "absolute";
        sodRoll.style.left = sodRollLeft+"px";
        sodRoll.style.top = "280px";


        sodRollCap = document.createElement("img");
		
		sodRollCap.style.width = sodRollCapWidth + "px";
		sodRollCap.style.height = sodRollCapHeight + "px";
		sodRollCap.src = "img/BackGround/sodRollCap.png";
        sodRollCap.style.position = "absolute";
        sodRollCap.style.left = sodRollCapleft + "px";
        sodRollCap.style.top = "370px";
        sodRollCap.style.transformOriginX = "right";
         sodRollCap.style.transformOriginY = "bottom";


        box.appendChild(lawnBox);
		box.appendChild(sodRoll);
		box.appendChild(sodRollCap);
		
		
		
	}
	
	
	this.run = function(buffer) {
		
		
		
		lawnWidth = lawnWidth +5;
		
		sodRollLeft = sodRollLeft +5;
		
		sodRollCapleft = sodRollCapleft + 5;
	    
		sodRollWidth = sodRollWidth - 0.3;
		
		sodRollCapWidth = sodRollCapWidth - 0.3;
		
        sodRollCapHeight = sodRollCapHeight - 0.3;
        
        lawnBox.style.width = lawnWidth+"px";
        sodRoll.style.width = sodRollWidth+"px";
        sodRoll.style.left = sodRollLeft+"px";
        sodRollCap.style.width = sodRollCapWidth + "px";
		sodRollCap.style.height = sodRollCapHeight + "px";
		sodRollCap.style.left = sodRollCapleft + "px";
		
		if(lawnWidth == 755){
			
			
			sodRoll.style.display = "none";
			sodRollCap.style.display = "none";
			
			window.clearInterval(buffer);
			
//	        this.callBack();
             //定义一个小车对象
   	        var car = new Car();
   	        //初始化小车
   	        car.init(box);
   	        //定义一个植物图标
   	        var plantImg = new Plants();
   	        
   	        plantImg.init(box);
   	        plantImg.clickMove();
   	        
   	        
            var zombie = new Zombie();
            
            zombie.init(box);
//          zombieLeft = buffer;
           //设置僵尸定时器
            setInterval(function (){zombie.run();},400);
		
		
		}
		
		
		
	}
	
//	 this.callBack;
//	 this.addLawnListener = function (call) {
//	 	
//	    this.callBack = call;
//		
//	}
	 
	
}
