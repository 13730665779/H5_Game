function  Game() {
    //设置游戏盒子的大小
    var gameWidth = 900;
    var gameHigth = 600;

    //画布
    var myCanvas;
    //画笔
    var paint;

    //游戏地图
    var map;
    var menu;
    var that;

    var zombie;
    this.init = function () {
    	
        that=this;
        this.initGame();
        //添加游戏开始背景
        this.initMap();

        menu = new Menu();
        
        menu.init();
        
        menu.setPlantListener(map.plantListener);

        zombie = new Zombie();
        zombie.init();
    }

    //初始化游戏盒子
    this.initGame = function () {
        //获取画布
        myCanvas = document.getElementById('myCanvas');
        //创建画笔


        var width = document.body.clientWidth;
        var dis = (width - gameWidth) / 2;

        myCanvas.onclick = function (ev) {
            var x = ev.clientX - dis;
            var y = ev.clientY;
            that.onClick(x,y);
        }

        myCanvas.onmousemove = function(ev){
            var x = ev.clientX - dis;
            var y = ev.clientY;
            that.onmouseMove(x,y);
            // console.log(x,y);
        }

        paint = myCanvas.getContext("2d");
    }

    this.initMap = function(){
        map = new Map();
        map.init();
    }

    this.run = function () {
        switch (state){
            case GAME_START:
                break;
            case GAME_RUN:
            
                map.run(paint);
                menu.run(paint);
                zombie.run(paint);
                
                break;
            case GAME_OVER:
                break;
        }
    }

    var GAME_START = 0;
    var GAME_RUN = GAME_START+1;
    var GAME_OVER = GAME_RUN+1;
    var state = GAME_RUN;

    this.onClick = function (x,y) {
        switch (state) {
            case GAME_START:
                break;
            case GAME_RUN:
                menu.onClick(x,y);
                //map.onClick(x,y);
                break;
            case GAME_OVER:
                break;
        }
    }

    this.onmouseMove = function (x,y){
        switch (state) {
            case GAME_START:
                break;
            case GAME_RUN:
                menu.onmouseMove(x,y);
                break;
            case GAME_OVER:
                break;
        }
    }
}