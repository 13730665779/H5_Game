function PeaShooter() {
	
	var  peaShooter;
	
	
	
	var randomX;
	
	var randomY;
	
	var images = ["img/Plant/Peashooter/peashooter_01.png",
	"img/Plant/Peashooter/peashooter_02.png",
	"img/Plant/Peashooter/peashooter_03.png",
	"img/Plant/Peashooter/peashooter_04.png",
	"img/Plant/Peashooter/peashooter_05.png",
	"img/Plant/Peashooter/peashooter_06.png",
	"img/Plant/Peashooter/peashooter_07.png",
	"img/Plant/Peashooter/peashooter_08.png"
	];
	
	var index = 0;
	
	var peaX;
	
	var peaWidth = 63;
    var peaHeight = 71;
	this.init = function (box,buffer1,buffer2){
		randomX = buffer1;
		randomY = buffer2;
		
		peaX = randomX + peaWidth/2;
		
		peaShooter = document.createElement("img");
		
		peaShooter.src = images[index];
		
		peaShooter.style.width = peaWidth+"px";
		peaShooter.style.height = peaHeight +"px";
		peaShooter.style.position = "absolute";
		
		peaShooter.style.left = randomX+"px";
		peaShooter.style.top = randomY+"px";
        
        
        box.appendChild(peaShooter);
        
	}
	
	
	var time = 0;
	var PEA_NORMAL = 0;
	var PEA_RUN= PEA_NORMAL + 1;
	var state = PEA_NORMAL;
	var t= 0;
//	var zombies = [];
	
	
	this.run = function () {
//		    zombies = buffer;
      
		    switch(state){
		    	case PEA_NORMAL:
		    	this.peaShooterMove();  
		    	
                
		    	break;
		    	
		    	case PEA_RUN:
		    	
		    	this.peaShooterMove();  
		    	
		    	for( var i = 0 ; i < this.peaBullets.length ; i++){
		    		
		    		this.peaBullets[i].run();
		    		
		    		if( this.peaBullets[i].isDestroy() ){
	    			
                      this.peaBullets[i].destroy();
                   
                     this.peaBullets.splice(i,1);
                  }
		    	}
		    	
		    	time++;
		        if(time %20==0){
		    	this.fire();
		        }
		        
		    	break;
	
		    }
		    
	}
	
    this.addZombieShowUpListener = function (){
     	
     	 state = PEA_RUN;
     	 
     }
	
	this.peaShooterMove = function (){
		
		if(index >=7){
			index = 0;
		     }
			
			peaShooter.src = images[index];
			
			index++;
		
	}
	
	this.peaBullets = [];
	
	this.fire = function (){
		
		var peaBullet = new PeaBullet();
		
		peaBullet.init(box,peaX,randomY);
		
	    this.peaBullets.push(peaBullet);
	}
	
	
    
	
}
