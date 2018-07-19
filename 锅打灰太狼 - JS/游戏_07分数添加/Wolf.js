function Wolf() {
    //灰太狼图片元素节点
    var wolf;
    //灰太狼的位置坐标
    var arrPos = [
        {left:"170px",top:"220px"},
        {left:"50px",top:"290px"},
        {left:"45px",top:"380px"},
        {left:"70px",top:"490px"},
        {left:"200px",top:"460px"},
        {left:"330px",top:"490px"},
        {left:"320px",top:"366px"},
        {left:"305px",top:"260px"},
        {left:"200px",top:"460px"}
    ];

    //大灰太狼图片
    var wolfHImages=['../img/wolf/h0.png','../img/wolf/h1.png','../img/wolf/h2.png','../img/wolf/h3.png','../img/wolf/h4.png','../img/wolf/h5.png','../img/wolf/h6.png','../img/wolf/h7.png','../img/wolf/h8.png','../img/wolf/h9.png'];
    //小灰太狼图片
    var wolfXImages=['../img/wolf/x0.png','../img/wolf/x1.png','../img/wolf/x2.png','../img/wolf/x3.png','../img/wolf/x4.png','../img/wolf/x5.png','../img/wolf/x6.png','../img/wolf/x7.png','../img/wolf/x8.png','../img/wolf/x9.png'];

    //灰太狼图片缓存
    var wolfImages;

    //图片的下标
    var index=0;
    //图片的数量
    var length =6;
    var lengthHit = wolfHImages.length;
    //初始化
    this.init=function (game) {
        //创建图片元素
        wolf =document.createElement('img');
        //设置图片来源
        this.randomType();
        wolf.src=wolfImages[index];
        //设置位置
        wolf.style.position="absolute";
        //重置位置
        this.rePosition();
        //设置狼被点击事件
        wolf.onclick= this.hitWolf;//狼被点击，被打
        //酱狼对象添加到游戏盒子里面去
        game.appendChild(wolf);
    }

   //狼被打
    this.hitWolf=function () {
        if(state==WOLF_NORMAL){     //设置只有正常状态下被击打才能转化为被击打的状态
            state = WOLF_HIT;//转为被击打状态
            index = 5;//设置动画的起始位置为5，从第五章图片开始执行
            //添加分数

            callBack(type);//回调函数，执行分数的增加
        }
    }
    //狼的类型
    var type;
    
    this.randomType=function () {
         type = Math.floor(Math.random()*2);//随机一个0和1
        if(type==0){//是0就是大狼
            wolfImages = wolfHImages;
        }else{//是1就是小狼
            wolfImages = wolfXImages;
        }
    }

    var callBack;//定义一个回调函数
    this.addScoreListener=function (call) {
        callBack = call;//将game中的函数传到wolf里面来
    }


    var WOLF_NORMAL=0;//设置正常状态的值
    var WOLF_HIT=WOLF_NORMAL+1;//设置被打状态

    var state=WOLF_NORMAL;
    this.run=function () {
    	
        switch(state){
            case WOLF_NORMAL://正常状态下执行动画
                index++;
                if(index>=length){
                    index=0;
                    //重写给狼的位置赋值
                    this.rePosition();
                    this.randomType();
                }
                //设置图片来源
                wolf.src=wolfImages[index];
                break;
            case WOLF_HIT://被击打状态下执行动画
                index++;
                if(index>=lengthHit)
                {
                    index=0;
                    state = WOLF_NORMAL;

                    //重写给狼的位置赋值
                    this.rePosition();
                    //重新随机狼胡类型
                    this.randomType();

                }
                //设置图片来源
                wolf.src=wolfImages[index];
                break;
        }

    }
    
    
    //重置位置函数
    this.rePosition=function () {
        var random =Math.floor(Math.random()*9);
        wolf.style.left=arrPos[random].left;
        wolf.style.top=arrPos[random].top;
    }
}