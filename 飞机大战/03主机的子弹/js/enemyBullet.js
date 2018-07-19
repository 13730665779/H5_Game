function enemyBullet(){
	//子弹飞行的速度
    var speedY=25;
    //子弹的大小
    var width=11;
    var height=11;

    //子弹的坐标
    var bulletY=0;
    //子弹的图片元素
	var bullet;
	
	this.init=function(game,x,y){
		bullet=document.createElement("img");
		
		//设置位置
		bullet.style.position="absolute";
		bullet.style.left=x-width/2+"px";
		bullet.style.top=bulletY+"px";
		
		bullet.src="./img/enemyBullet.png";
		bullet.style.width=width+"px";
        bullet.style.height=height+"px";
		
		game.appendChild(bullet);
	}
	
	this.run=function(){
		bulletY=bulletY+speedY;
		bullet.style.top=bulletY+"px";
		
	}
}
