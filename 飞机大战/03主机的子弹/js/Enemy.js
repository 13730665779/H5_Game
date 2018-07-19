function Enemy(){
	//屏幕的大小
    var bgW;
    var bgH;
	
	//创建一个敌机
	var  enemy;
	//敌机的高度和宽度
	var enemyW=37;
    var enemyH=28;
    
    var enemyX;
    var enemyY;
    
    var speedX=4;
    var speedY=8;
    
    var game;
    //敌机盒子
    
    
    
    var enemyBox=["./img/enemy1.png","./img/emeny.png","./img/bigEmeny.png"];
    
   var random1;
    
    var time=0;
    
    var random;
	this.init=function(buffer,bgW1,bgH1){
		
		game=buffer;
		bgW=bgW1;
        bgH=bgH1;
        
//      enemyX=(bgW-enemyW)/2;
        enemyX=Math.floor(Math.random()*(480-enemyW));
        enemyY=-Math.floor(Math.random()*50);
        
		enemy=document.createElement("img");
		
		this.randomType();
		
		enemy.style.width=enemyW+"px";
		enemy.style.height=enemyH+"px";
		
		enemy.style.position="absolute";
		
		enemy.style.left=enemyX+"px";
		enemy.style.top=enemyY+160+"px";
		
		game.appendChild(enemy);
	}
	
	this.randomType=function(){
		random=Math.floor(Math.random()*3);
		
		if(random==0){
			enemy.src=enemyBox[0];
		}else if(random==1){
			enemy.src=enemyBox[1];
		}else{
			enemy.src=enemyBox[2];
		}
		
		
	}
	var ENEMY_DOWN=0;
	var ENEMY_UP=ENEMY_DOWN+1;
	var ENEMY_LEFT=ENEMY_UP+1;
	var ENEMY_RIGHT=ENEMY_LEFT+1;
	var state = ENEMY_LEFT;

	this.run=function(){
		enemybullets.forEach(function (bullet) {
            bullet.run();})
		
		time++;
		if(time>10)
		this.logic();
		this.move();
	
	}
	
	this.logic=function(){
		random1 = Math.floor(Math.random()*20);
		if(random1<5){
			state = ENEMY_RIGHT;
		}else if(random>=5&&random<10){
			state = ENEMY_LEFT;
		}else if(random1>=10&&random1<15){
			state = ENEMY_UP;
		}else{
			state = ENEMY_DOWN;
		}
		time=0;
	}
	
	this.move=function(){
		switch(state){
			case ENEMY_RIGHT:
			
			this.moveRight();
			this.enemyFire();
			
			if(enemyX>=480)
			state=ENEMY_LEFT;
			break;
			
			case ENEMY_LEFT:
			
			this.moveLeft();
			this.enemyFire();
			
			if(enemyX>=480)
			state=ENEMY_RIGHT;
			break;
			
			case ENEMY_UP:
			
			this.moveUp();
			this.enemyFire();
			break;
			
			case ENEMY_DOWN:
			this.moveDown();
			this.enemyFire();
			break;
			
		}
		
		
	}
	
	this.moveLeft=function(){
		enemyX = enemyX-speedX;
        enemy.style.left = enemyX + "px";
	}
	
	this.moveRight=function(){
		enemyX = enemyX+speedX;
        enemy.style.left = enemyX + "px";
		
	}
	
	this.moveUp=function(){
		enemyY = enemyY-speedY;
        enemy.style.top = enemyY + "px";
	}
	
	this.moveDown=function(){
		
		enemyY = enemyY+speedY;
        enemy.style.top = enemyY + "px";
	}
	
	 var enemybullets=[];
	 this.enemyFire=function(){
		var enemybullet = new enemyBullet();
		 enemybullet.init(game,enemyX+enemyW,enemyY);
		 enemybullet.run();
		 enemybullets.push(enemybullet);
		 
	}
}
