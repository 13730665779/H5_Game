function Zombie () {
	
	var zombie;
	
	var zombieLeft = Math.floor(Math.random()*300+900);
	
	
	
	var zombieWidth = 85;
	var zombieHeight = 120;
	var zombieTop = 230;
	var peaShooters=[];
	this.init = function  (box,buffer)  {
		peaShooters = buffer;
		zombie = document.createElement("img");
		
		zombie.src = "img/Zombies/zombie/Zombie.gif";
	    zombie.style.width = zombieWidth+"px";
	    zombie.style.height = zombieHeight+"px";
	    zombie.style.position = "absolute";
	    
	    zombie.style.left = zombieLeft+"px";
        zombie.style.top = zombieTop+"px";
        
		box.appendChild(zombie);
	}
	//回调函数
	this.callBack;
	this.setZombieShowUpListener = function (call){
		
		this.callBack = call;
		
	}
	
	this.run = function (){
		
	    zombieLeft = zombieLeft -2;
	   
	   //当僵尸出现在盒子内部的时候发射子 弹   并且当没有种植植物时，没有回调函数机制
	   if(zombieLeft < 900 && peaShooters.length >= 1)
         
         this.callBack();
       
		 zombie.style.left = zombieLeft+"px";
        
	}
	
	var buffer=false;

	this.collision = function (peaBullets) {

        peaBullets.forEach(function (bullet) {

            if ((bullet.bulletX+bullet.width) > zombieLeft && (zombieLeft + zombieWidth) > bullet.bulletX&&  (zombieTop + zombieHeight) > bullet.bulletY &&  zombieTop < (bullet.bulletY + bullet.height)) {

                bullet.src = "img/Plant/Peashooter/PeaBulletHit.gif";
                
                bullet.bulletX = -bullet.width-100;
                
                buffer = true;
                return;
            }
        })
        
        
        // 
        return buffer;
   
	 
	 
	 }
	

}
