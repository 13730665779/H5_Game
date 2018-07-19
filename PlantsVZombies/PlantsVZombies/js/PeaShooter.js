function PeaShooter() {
	
	var  peaShooter;
	
	var peaBullet;
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
	this.init = function (box,buffer1,buffer2){
		randomX = buffer1;
		randomY = buffer2;
		peaX = randomX + 35;
		peaShooter = document.createElement("img");
		
		peaShooter.src = images[index];
		
		peaShooter.style.width = "63px";
		peaShooter.style.height = "71px";
		peaShooter.style.position = "absolute";
		peaShooter.style.top = randomY+"px";
		peaShooter.style.left = randomX+"px";
        		
        		
//      构建豌豆的子弹
        peaBullet = document.createElement("img");
        peaBullet.style.width = "56px";
		peaBullet.style.height = "34px";
		peaBullet.style.position = "absolute";
		peaBullet.style.top = randomY+"px";
		peaBullet.style.left = peaX +"px";
        peaBullet.src = "img/Plant/Peashooter/PB00.gif";
        
        box.appendChild(peaBullet);
        
        box.appendChild(peaShooter);
	}
	
	this.run = function () {
		
		
		
			peaX = peaX +15;
			if( peaX >900){
				peaX = randomX +35;
			}
			peaBullet.style.left = peaX +"px";
			if(index >=7){
			index = 0;
		     }
			
			
			
			peaShooter.src = images[index];
			index++;
		
		
	}

	
}
