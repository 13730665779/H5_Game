function Zombie () {
	
	var zombie;
	
	var zombieLeft = 1000;
	
	this.init = function  (box)  {
		
		zombie = document.createElement("img");
		
		zombie.src = "img/Zombies/zombie/Zombie.gif";
	    zombie.style.width = "166px";
	    zombie.style.height = "144px";
	    zombie.style.position = "absolute";
	    zombie.style.left = zombieLeft+"px";
        zombie.style.top = "240px";

		box.appendChild(zombie);
	}
	
	this.run = function (){
		zombieLeft = zombieLeft -3;
//		console.log("adfasdfasd");
		zombie.style.left = zombieLeft+"px";
	}
	
}
