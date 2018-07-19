function Car (){
	//定义一个小车对象
	var car;
	
	this.init = function (box){
		//给car赋值
		car =document.createElement("img");
		//设置小车的属性
	    car.src = "img/Start/LawnMower.gif";
	    car.style.width = "71px";
	    car.style.height = "57px";
	    car.style.position = "absolute";
	    car.style.left = "76px";
        car.style.top = "332px";
//	    car.style.display = "none";
	    
	    box.appendChild(car);
	   		
	}
	

	
	this.run =function () {
		
		
	}
	
}
