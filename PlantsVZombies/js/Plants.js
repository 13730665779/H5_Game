function Plants() {
	//定义一个植物图标对象
	var plantImg;
	
	var isClickPlant = false;
	//设置植物的固定的位置
	
	var plantPosition = [
	    {left:"158px",top:"300px"},
        {left:"238px",top:"300px"},
        {left:"318px",top:"300px"},
        {left:"398px",top:"300px"},
        {left:"478px",top:"300px"},
        {left:"558px",top:"300px"},
        {left:"638px",top:"300px"},
        {left:"718px",top:"300px"},
        {left:"798px",top:"300px"}
	
	];
	
//	设置随机位置
	var randomX;
	var randomY;
//	盒子
	var box;
	this.init = function (buffer){
		box = buffer;
		
		plantImg = document.createElement("img");
		
		plantImg.src = "img/Plant/Peashooter/Peashooter.png";
	    plantImg.style.width = "100px";
	    plantImg.style.height = "60px";
	    plantImg.style.position = "absolute";
	    plantImg.style.left = "0px";
        plantImg.style.top = "0px";

		box.appendChild(plantImg);
	}
	
	this.clickMove = function () {
		
		
		box.onmousemove = function(ev) {
//			console.log("x="randomX)
		if(isClickPlant){
				
				var x = ev.clientX;
			    var y = ev.clientY;
			    
//			    randomX = x-260;
//			    randomY = y-40;
			    
			    plantImg1.style.left = x - 260 + "px";
			    plantImg1.style.top = y - 40 + "px";
			    
			}
			
		}
		
		
		var plantImg1;
		plantImg.onclick = function(ev){
		    
		    
		   
			plantImg1 = document.createElement("img");
		    plantImg1.style.position = "absolute";
	        plantImg1.style.left = "0px";
            plantImg1.style.top = "0px";
			plantImg1.src = "img/Plant/Peashooter/Peashooter.gif";
			plantImg1.style.width = "71px";
	        plantImg1.style.height = "71px";
	        box.appendChild(plantImg1);
			
			plantImg.src = "img/Plant/Peashooter/PeashooterG.png";
		    
		    
		    
			plantImg1.onclick = function (ev){
				//当把鼠标移动到狗上面后设置isClickDog为真
				 console.log("x="+randomX+";y="+randomY);
				randomX = ev.clientX - 260;
				randomY = ev.clientY - 40;
			if(!isClickPlant){
				
				isClickPlant = true;
				
			}else {
				//判断是否是在是指定的区域
//				for( var i = 0; i < plantPosition.length; i++){
//			        if(randomX >= plantPosition[i].left && randomX <= (plantPosition[i].left+60) && randomY >= plantPosition[i].top && randomY <= (plantPosition[i].top + 100))	{
				       
//				       plantImg1.style.left = plantPosition[i].left+"px";
//                     plantImg1.style.top = plantPosition[i].top+"px";
				       isClickPlant = false;
				      
				       plantImg1.style.display = "none";
				       
				       var peaShooter = new PeaShooter();
				       
				       peaShooter.init(box,randomX,randomY);
				      setInterval(function () { peaShooter.run();},150);
			         }
//		        }
//			}
		
			}
		
		
			
		}	
		
	}
	
	
//	this.randomPosition = function (){
		//遍历随机的位置
		
		
		
//	}
	
}
