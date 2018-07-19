function Bullet() {
    //子弹飞行的速度
    var speedY=30;
    //子弹的大小
    var width=14;
    var height=27;

    //子弹的坐标
    var bulletY;
    var bulletX;
    //子弹的图片元素
     var bullet;
     
     var index=0;
     
     this.init=function (game,x,y) {
        //创建图片元素
        bullet = document.createElement('img')
        //设置位置
        bullet.style.position="absolute";
        bulletY =y-height;
        bulletX=x-width/2;
        bullet.style.left=bulletX+"px";
        bullet.style.top=bulletY+"px";

        //设置子弹的图片
        bullet.src="./img/bullet.png";
        bullet.style.width=width+"px";
        bullet.style.height=height+"px";
        //添加到游戏盒子里面
        game.appendChild(bullet);

    }
    
//  this.hitEnemy=function(){
//  	
//  	    
//  		
//  	if(((bulletX+width)>=enemyX)&&(bulletX<(enemyX+enemyW))&&(bulletY>=enemyY)&&((bulletY+height)<=(enemyY+enemyH))){
//  		
//  		
//  		
//  	}
//  	
//  }
    
    this.run=function () {
        bulletY = bulletY-speedY;
        
        bullet.style.top=bulletY+"px";
        
//      this.hitEnemy();
    }
    
    this.isDestroy=function () {
        if(bulletY<-height){
            return true;
        }
        else{
            return false;
        }
    }
    
    this.destroy=function () {
        bullet.remove();
    }
    
}