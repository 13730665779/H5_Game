function Boom(){
	
	var boom;
	
	 var arrPos = [
        {left:"10px",top:"10px"},
        {left:"100px",top:"10px"},
        {left:"10px",top:"109px"},
        {left:"98px",top:"101px"},
        {left:"8px",top:"187px"},
        {left:"101px",top:"187px"}     
    ];

	
	this.init=function(game){
		
		    boom=document.createElement("img");
    		
    		boom.src="./img/tc.png";
    		
    		boom.style.position="absolute";
    		boom.style.width="20px";
    		boom.style.height="20px";
    		boom.style.backgroundColor="red";
    		boom.style.left="10px";
		    boom.style.top="10px";
		    
		    game.appendChild(boom);
	}
	
	this.run=function(){
		
		
	}
	
}
