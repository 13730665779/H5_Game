function Scores(){
	var score;
	//初始化分数
	
	this.init=function(game){
		//1 创建一个分数并设置属性
		score=document.createElement("div");
		score.style.height="30px";
		score.style.width="50px"
		score.style.textAlign="center";
		score.style.lineHeight="30px";
		score.style.backgroundColor="white";
		score.style.opacity="0.5";
		score.innerHTML=0;
		score.style.position="absolute";
		score.style.left="90px";
		score.style.top="20px";
		score.style.radius="5px";
		
		game.appendChild(score);
	}
	
	
}
