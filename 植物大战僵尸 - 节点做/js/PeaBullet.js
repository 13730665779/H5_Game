function PeaBullet () {
	
	var peaBullet;
	
	this.width = 24;
	this.height = 24;
	
	this.bulletX;
	this.bulletY;
	
	this.init = function (box,randomX,randomY){
        
        this.bulletX = randomX+this.width;
        this.bulletY = randomY;
        
        peaBullet = document.createElement("img");
        peaBullet.style.width = this.width+"px";
		peaBullet.style.height = this.height +"px";
		peaBullet.style.position = "absolute";
		
		peaBullet.style.left = this.bulletX +"px";
		peaBullet.style.top = this.bulletY+"px";
        peaBullet.src = "img/Plant/Peashooter/PB00.gif";
        
        box.appendChild(peaBullet);
	}
	
	this.run = function (){
		
		this.bulletX = this.bulletX +20;
		
	    peaBullet.style.left = this.bulletX +"px";
			
		
	}
	
	this.isDestroy = function () {
        if(this.bulletX < (-this.width)){
            return true;
        }else{
            return false;
        }
    }
    
    this.destroy=function () {
    	
        peaBullet.remove();
        
        peaBullet = null;
    }
    
    
}
