function Life(){
	
	var life;
	
	var lifeBar;
	
	var lifeWidth = 89;
	this.init=function(game){
		life=document.createElement("img");
		
		life.src="./img/lifeBg.png";
		
		life.style.position="absolute";
		
		life.style.width="149px";
		life.style.height="20px";
		
		life.style.left="300px";
		life.style.top="20px";
		
		game.appendChild(life);
		
		lifeBar=document.createElement("img");
		
		lifeBar.src="./img/lifeBar.png";
		
		lifeBar.style.position="absolute";
		
		lifeBar.style.width=lifeWidth+"px";
		lifeBar.style.height="8px";
		
		lifeBar.style.left="356px";
		lifeBar.style.top="26px";
		
		game.appendChild(lifeBar);
		
	}
	
	
	this.run=function(){
		
		
	}
	
	
	
}
