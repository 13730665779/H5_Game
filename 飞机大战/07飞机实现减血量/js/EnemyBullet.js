function EnemyBullet(){
	
	this.width = 11;
	this.height = 11;
	
	this.bulletX;
	this.bulletY;
	
	var bullet;
	
	this.init = function(game,x,y){
		bullet = document.createElement("img");
		
		bullet.style.position = "absolute";
		
		this.bulletY = y+this.height;
		this.bulletX = x-this.width/2;
		
		bullet.style.left=this.bulletX+"px";
		bullet.style.top=this.bulletY+"px";
		
		bullet.src="./img/enemyBullet.png";
		bullet.style.width=this.width+"px";
		bullet.style.height=this.height+"px";
		
		game.appendChild(bullet);
		
	}
	
	this.run=function(){
		this.bulletY=this.bulletY+10;
		
		bullet.style.top=this.bulletY+"px";
	}
	
	this.isDestroy=function(){
		if(this.bulletY<-this.height){
			return true;
		}else{
			return false;
		}
	}
	
	this.destroy=function(){
		bullet.remove();
		bullet=null;
	}
}
