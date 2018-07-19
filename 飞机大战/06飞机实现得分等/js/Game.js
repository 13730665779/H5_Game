function Game() {
	//盒子的高度和宽度
    var width= 480;
    var height = 650;
    //游戏盒子
    var game;
    //游戏地图
    var map;
    //创建飞机
    var player;
    //创建血量条
    var life;
    //击溃敌机数量
    var kill;
    //设置敌机数量
    var emenyNum=5;
    //设置数组来存放敌机
    var emenys=[];
    //生命标志
	var lifeLogo;
	//初始化
	var kill;
	//击溃敌机数量
	var killNum=0;
    this.init=function () {
    	//初始化游戏盒子
        this.initGame();
        //初始化地图
        this.initMap();
        //初始化主机
        this.initPlayer();
        //初始化敌机
        this.initEmeny();
        //初始化血量
        this.initLife();
        //初始化击溃敌机
        this.initKill();
        
    }

    this.initGame=function () {
    	//创建一个游戏盒子
        game = document.createElement('div');
        //设置游戏盒子的大小
        game.style.width=width+"px";
        game.style.height=height+"px";
        //设置游戏盒子的定位
        game.style.position="relative";
        //设置隐藏
        game.style.overflow="hidden";
        //设置盒子的背景颜色
        game.style.backgroundColor="#111222";
        //设置居中
        game.style.margin="auto";
        //将盒子放到body当中去
        document.body.appendChild(game);
    }
    
    //初始化地图对象函数
    this.initMap=function () {
        //创建游戏地图对象
        map = new Map();
        //初始化
        map.init(game);
    }
 
 
    this.initKill=function(){
		
		lifeLogo=document.createElement("img");
		
		lifeLogo.src="./img/lifeLogo.png";
		
		lifeLogo.style.position="absolute";
		
		lifeLogo.style.width="40px";
		lifeLogo.style.height="40px";
		
		lifeLogo.style.left="20px";
		lifeLogo.style.top="10px";
		
		game.appendChild(lifeLogo);
		
		kill=document.createElement("h2");
		
		kill.innerHTML=killNum;
		kill.style.color="white";
		kill.style.margin="0px";
		kill.style.position="absolute";
		
		kill.style.opacity="0.6";
		kill.style.left="80px";
		kill.style.top="14px";
		
		game.appendChild(kill);
		
	} 
 



    //初始化主机对象函数
    this.initPlayer =function () {
        //创建飞机
        player = new Plyaer();
        //初始化
        player.init(game,width,height);
    }
    
    //初始化敌机对象函数
    this.initEmeny=function () {
        //遍历创建enemyNum个敌机数量
        for(var i=0;i<emenyNum;i++){
            // 创建敌机
           var emeny = new Emeny();
            //初始化
            emeny.init(game);
            //将敌机放到敌机盒子中去
            emeny.addScoreListener(this.setScore);
            emenys.push(emeny);
        }

    }
   
    this.setScore=function (type) {
        if(type==0){
            killNum =killNum+5;
        }else{
            killNum =killNum+10;
        }
        kill.innerHTML=killNum;
    }
    
   this.initLife=function(){
   	
   	    life = new Life();
   	    
   	    life.init(game);
   	
   }
   
    this.run=function () {
        
        //运行动态背景图
        map.run();
        //运行主机
        
        player.run();
        
        
        
        //遍历敌机盒子
        emenys.forEach(function (emeny) {
        	//实现敌机的飞动
        	player.playercollision(emeny.enemybullets);
        		
            
            emeny.run();
            //敌机碰撞到子弹
            if(emeny.collision(player.bullets)){
                emeny.setBoom();
            }
        })

    }
    
    //键盘事件控制主机的上下左右移动
    this.onkeypress=function (keyCode){
        player.onkeypress(keyCode);
    }
}