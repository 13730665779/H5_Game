function Game() {
    //设置游戏盒子的大小
    var gameWidth=480;
    var gameHeight=750;

    //游戏盒子
    var game;

    //时间元素
    var timeView;

    //灰太狼
    var wolf;

    //分数元素节点
    var scoreH1;
    var score=0;
    this.init=function () {
        //1，初始化游戏盒子
        this.initGame();
        //2，添加游戏地图
        var map = new Map(gameWidth,gameHeight);
        //数据初始化
        map.init(game);
        //3，添加时间图片
        timeView = new TimeView();
        //数据初始化
        timeView.init(game);
        //设置监听
        timeView.addTimeListener(this.timeListener);
        
        //4，添加游戏按钮
        this.initButton();

        //5，创建灰太狼
        wolf = new Wolf();
        //数据初始化
        wolf.init(game);
        //设置分数的监听
        wolf.addScoreListener(this.setScore);

        //6,分数的显示
        scoreH1 = document.createElement('h2');
        //设置颜色
        scoreH1.style.color="#ffffff";
        //初始化
        scoreH1.innerHTML=score+"分";
        //设置分数的位置
        scoreH1.style.position="absolute";
        scoreH1.style.left="100px"
        scoreH1.style.top="0px"
        game.appendChild(scoreH1);

    }
    
    this.setScore=function (type) {
        if(type==0){
            score =score+5;
        }else{
            score =score+10;
        }
        scoreH1.innerHTML=score+"分";
    }
    
    var button;
    this.initButton=function () {
        button = document.createElement('button');
        //设置按钮的大小
        button.style.width=gameWidth/3+"px";
        button.style.height=gameWidth/6+"px";
        //设置按钮的内容
        button.innerHTML="开始游戏"
        //设置位置
        button.style.position="absolute";
        button.style.left=(gameWidth-gameWidth/3)/2+"px";
        button.style.top=(gameHeight-gameWidth/6)/2+"px";
        button.style.borderWidth="0px";
        button.style.borderRadius="10px";
        //设置点击事件
        button.onclick=function () {
            button.style.display="none";
            state=GAME_RUN;
            //重新初始化时间视图
            timeView.resetTimeView();
        }
        game.appendChild(button);
    }
    
    this.timeListener=function () {
        state=GAME_OVER;
        //展示下一关的按钮
        button.innerHTML="下一关";
        
        button.style.display="block";
    }
    
    this.initGame=function () {
        //1,创建游戏的盒子
         game = document.createElement('div');
        //2,设置游戏盒子的大小
        game.style.width=gameWidth+"px";
        game.style.height=gameHeight+"px";
        //3,设置居中
        game.style.margin="auto";
        //4，设置背景颜色
        game.style.backgroundColor="darkolivegreen";
        //5,设置游戏的位置
        game.style.position="relative";

        document.body.appendChild(game);
    }

    var GAME_START=0;
    var GAME_RUN=GAME_START+1;
    var GAME_OVER=GAME_RUN+1;
    var state=GAME_START;
    
    this.run=function () {
        switch(state){
            case GAME_START:
                break;
            case GAME_RUN:
                timeView.run();
                wolf.run();
                break;
            case GAME_OVER: 
                
                break;
        }

    }
}