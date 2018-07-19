function Emeny() {

    //爆炸的动画
    var booms=['./img/boom_01.png','./img/boom_02.gif','./img/boom_03.gif','./img/boom_04.gif','./img/boom_05.gif','./img/boom_06.png'];
    //爆炸的图片数量
    var boomNum=booms.length;
    //爆炸图片的下标
    var index=-1;

    //敌机的位置
    var emenyX;
    var emenyY;
    //敌机飞行的速度
    var speedX = 2;
    var speedY = 5;
    //敌机的宽度和高度
    var emenyW=37 ;
    var emenyH=28 ;
    //敌机的类型
    var type;
    //图片元素
    var emeny;
    var game;
    
    this.init = function (buffer) {
        game=buffer;
        //创建敌机
        emeny = document.createElement('img');
        //设置位置
        emeny.style.position = "absolute";
        this.setPosition();
        //把敌机加到游戏盒子
        game.appendChild(emeny);

    }

    this.setPosition = function () {
        //随机位置
        emenyX = Math.floor(Math.random() * (480 - emenyW));
        emenyY = -Math.floor(Math.random() * 400);
        emeny.style.left = emenyX + "px";
        emeny.style.top = emenyY + "px";
        //随机敌机的类型
        type = Math.floor(Math.random() * 2);

        if (type == 0) {
            emeny.src = "./img/enemy1.png";
        } else {
            emeny.src = "./img/enemy2.png";
        }
        
        
        emenyW = 37 + Math.floor(Math.random() * 20);
        emenyH = 28 + Math.floor(Math.random() * 10);
        
        emeny.style.width = emenyW + "px";
        emeny.style.height = emenyH + "px";
        //敌机水平方向
        if (Math.floor(Math.random() * 2) == 0) {
            speedX = speedX + Math.floor(Math.random() * 5);
            speedX = -speedX;
        }
    }

    var EMENY_NORMAL=0;
    var EMENY_BOOM=EMENY_NORMAL+1;
    var state=EMENY_NORMAL;
    var time=0;
    this.run = function () {

        switch (state){
            case EMENY_NORMAL:
                this.fly();
                
                for(var i = 0; i < this.enemybullets.length; i++){
                	
                	this.enemybullets[i].run();
                	
                	if( this.enemybullets[i].isDestroy()){
                		//把敌机的子弹销毁
                		this.enemybullets[i].destroy();
                		//销毁子弹数组里面的敌机子弹
                		this.enemybullets.splice(i,1);
                	}
                }
                time++;
                if(time%7==0){
                this.fire();
                }
                break;
            case EMENY_BOOM:
                this.explosion();
                break;
        }

    }
    this.enemybullets=[];
    
    this.fire=function(){
    	
    	var bullet=new EnemyBullet();
    	
    	bullet.init(game,emenyX+emenyW/2,emenyY+emenyH);
    	
    	this.enemybullets.push(bullet);
    	
    }
    
    //处理敌机飞行
    this.fly=function () {
        //运动
        emenyY = emenyY + speedY;
        if (emenyY > 800) {
            this.setPosition();
        }
        emenyX = emenyX + speedX;
        if (emenyX < 0) {
            emenyX = 0;
            speedX = -speedX;
        }
        if (emenyX > 480 - emenyW) {
            emenyX = 480 - emenyW;
            speedX = -speedX;
        }
        emeny.style.left = emenyX + "px";
        emeny.style.top = emenyY + "px";
    }

    this.explosion=function () {
        index++;
        if(index>=boomNum){
            state=EMENY_NORMAL;
            index=-1;
            this.setPosition();
        }else{
            emeny.src=booms[index];
            
        }

    }
    
    var callBack;//定义一个回调函数
    this.addScoreListener=function(call){
    	callBack=call;
    }
    
    this.setBoom=function () {
         state=EMENY_BOOM;
         callBack(type);
    }
    
    var buffer=false;
    this.collision = function (bullets) {

        bullets.forEach(function (bullet) {
            if (emenyX < (bullet.bulletX + bullet.width) && (emenyX + emenyW) > bullet.bulletX && bullet.bulletY < (emenyY + emenyH)) {
                //销毁子弹
                bullet.bulletY = -bullet.height-1;
                
                buffer = true;
                
                return;
            }
        })
        return buffer;
    }
}