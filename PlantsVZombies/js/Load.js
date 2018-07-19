function Load()  {
	
	var box;
	//得到加载的id值
	var start = document.getElementById("start");
	
	//隐藏
	//定义未加载的图片
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
    
    //创建地图对象
	var mymap;
	
	//定义状态值
	var state;
	 
	 //设置游戏的状态值
	 var GAME_START = 0;
	 var GAME_RUN = GAME_START + 1;
	 var GAME_OVER = GAME_RUN + 1;
	 state = GAME_START;
     
     //定义一个时间对象
     var timer;
     
     //初始化整个项目
     var timer1;
     
     var timer2;
//   定义一个草坪
     var lawn;
//   定义一辆车
     var car;     
     
//   var zomLeft;
     this.init =function (buffer) {
    	//将timer的值传到初始化的对象中
    	timer = buffer;
//  	选择状态
    	switch(state) {
    		    //开始部分
	    		case GAME_START:
//	    		初始化整个项目
	    		this.initStartGame();
	    		break;
	    		
	    		case GAME_RUN:
	    		 //初始化地图
	    		this.initMap();
	    		//取消加载的定时动画
	    		clearInterval(timer);
               
	    		
	    		//地图定时器加载完毕后，此时用监听事件来，执行草坪滚动的动画
	    		mymap.addFinishlistener(this.initLawn);
	    		
	    		//监听草坪滚动的动画，滚动完之后生成小车
//	    		lawn.addLawnListener(this.initCar);

	    		break;
	    		
	    		case GAME_OVER:
	    		break;
	    		
	    	}
    }
     
    
     
     
// 定义小车函数
// this.initCar = function () {
   	  //定义一个小车对象
// 	  car = new Car();
   	  //初始化小车
// 	  car.init(box);
// }
// 定义草坪函数
    this.initLawn = function (){
    	
    	lawn = new Lawn();
    	
    	lawn.init(box);
    	
//  	zomLeft = buffer;
         //设置定时作用
        timer2 = setInterval(function(){lawn.run(timer2);},10);  
    }
    
    this.initMap = function(){
		//创建地图对象
		
		mymap = new Map();
		//初始化地图
		
		mymap.init(box);
		 //定时器设置地图的移动加载
		timer1 = setInterval(function(){mymap.run(timer1);},10);
		
	 }
    
    this.initStartGame = function(){
		//初始化加载动画
//		box = buffer;
		box = document.getElementById("box");
		box.style.display = "block";
		box.style.overflow = "hidden";
		start.style.display = "none";	
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
        var h1 = document.createElement("h4");
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
		
//		开始动画
		setInterval(function(){
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
				
				//将创建的节点设置隐藏
				flagMeterEmpty.style.display = "none";
			    flagMeterFull.style.display = "none";
			    h1.style.display = "none";
			    flagMeterParts1.style.display = "none";
			    
//              将state的状态值设置为游戏运行
                state = GAME_RUN;
              
			}
			
			flagMeterFull.style.width = flagMeterWidth+"px";
			flagMeterParts1.style.left = zombieLeft+"px";  
		},1);
        
       }
        
       

}
