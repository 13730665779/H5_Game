function Game() {
    var width= 480;
    var height = 700;
    //游戏盒子
    var game;
    //游戏地图
    var map;
    //创建飞机
    var player;
    //创建敌机
    var enemys=[];
    var enemy;
    this.init=function () {
        this.initGame();
        this.initMap();
        this.initPlayer();
        this.initEnemy();
    }

    this.initGame=function () {
        game = document.createElement('div');
        //设置游戏盒子的大小
        game.style.width=width+"px";
        game.style.height=height+"px";

        game.style.position="relative";
        game.style.overflow="hidden";

        game.style.backgroundColor="#111222";
        //设置居中
        game.style.margin="auto";

        document.body.appendChild(game);
    }
    this.initMap=function () {
        //创建游戏地图对象
        map = new Map();
        //初始化
        map.init(game);
    }

    this.initPlayer =function () {
        //创建飞机
        player = new Plyaer();
        //初始化
        player.init(game,width,height);
    }

    this.initEnemy =function () {
    	//创建敌机
    	
    	for(var i = 0; i< 10; i++){
    		enemy = new Enemy();
    	   //初始化
    	   
    	  enemy.init(game);
    		enemys.push(enemy);
    	}
    	
    	
    	
    }
     
    this.run=function () {
        map.run();
        player.run();
       enemys.forEach(function (enemy) {
            enemy.run();})
       
        
    }

    this.onkeypress=function (keyCode){
        player.onkeypress(keyCode);
    }
}