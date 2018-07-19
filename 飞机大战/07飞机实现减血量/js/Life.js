function Life(){
	
	var life;
	
    
	this.init=function(game){
		life=document.createElement("img");
		
		life.src="./img/lifeBg.png";
		
		life.style.position="absolute";
		
		life.style.width="149px";
		life.style.height="20px";
		
		life.style.left="300px";
		life.style.top="20px";
		
		game.appendChild(life);	
		
		
		
	    
	}
	
	
	
	 
	
}
