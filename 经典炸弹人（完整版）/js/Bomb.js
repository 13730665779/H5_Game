class Bomb {
    constructor(){
        //创建炸弹
        this.bomb;
        //炸弹大小
        this.width = 30;
        this.height = 30;
        //炸弹的位置
        this.bombX;
        this.bombY;

        this.num=4;

        //爆炸数组
        this.blasts=[];


        this.BOOM_NORMAL=0;
        this.BOOM_RUN=this.BOOM_NORMAL+1;
        this.state=this.BOOM_NORMAL;

        this.time=0;

        this.index=0;

        this.blastUp=[];
        this.blastVertical=[];
        this.blastMiddle=[];
        this.blastDown=[];
        this.blastLeft=[];
        this.blastLevel=[];
        this.blastRight=[];
    }


    init(x,y) {
        this.initBoom(x,y);
        this.initblasts(x,y);
    }

    initBoom(x,y) {

        this.bombX = x - this.width / 2;
        this.bombY= y - this.height;
        // console.log(this.bombX);
        this.bomb = new Image();
        this.bomb.src = "./img/bomb_01.png";
    }

    getX() {

        return this.bombX;
    }

    getY() {
        return this.bombY;
    }


    setBoomListener(call) {
        this.callBack=call;
    }

    initblasts(x,y) {

        //最上面的图片
        for(let i=4;i>=1;i--){
            let img = new Image();
            img.src="img/Booms/up_0"+i+".png";
            this.blastUp.push(img);
        }

        //最上面到中间之间的图
        for(let i=4;i>=1;i--){
            var img = new Image();
            img.src="img/Booms/vertical_0"+i+".png";
            this.blastVertical.push(img);
        }

        //中间的图
        for(let i=4;i>=1;i--){
            var img = new Image();
            img.src="img/Booms/middle_0"+i+".png";
            this.blastMiddle.push(img);
        }

        //最下面到中间之间的图
        for(let i=4;i>=1;i--){
            var img = new Image();
            img.src="img/Booms/down_0"+i+".png";
            this.blastDown.push(img);
        }

        //最左边的图片
        for(let i=4;i>=1;i--){
            var img = new Image();
            img.src="img/Booms/left_0"+i+".png";
            this.blastLeft.push(img);
        }

        //水平的图片
        for(let i=4;i>=1;i--){
            var img = new Image();
            img.src="img/Booms/level_0"+i+".png";
            this.blastLevel.push(img);
        }

        //最右边的图片
        for(let i=4;i>=1;i--){
            var img = new Image();
            img.src="img/Booms/right_0"+i+".png";
            this.blastRight.push(img);
        }
    }



    run(paint,k) {

        switch(this.state){
            case this.BOOM_NORMAL:
                this.time++;
                if(this.time>32){
                    this.time=0;
                    this.state=this.BOOM_RUN;
                }
                paint.drawImage(this.bomb, this.bombX, this.bombY, this.width, this.height);
                break;
            case this.BOOM_RUN:
                this.index++;
                if(this.index>=4){
                    //console.log("销毁炸弹1");
                    this.callBack(k);
                    this.state=-1;
                    break;
                }


                //最上面火焰的动画
                paint.drawImage(this.blastUp[this.index],this.bombX,this.bombY-(this.num+1)*this.height,this.width,this.height);

                //最上面火焰到中心点之间竖直的火焰
                for(var i=0;i<this.num;i++){
                    paint.drawImage(this.blastVertical[this.index],this.bombX,this.bombY-(i+1)*this.height,this.width,this.height);
                }
                //中心的火焰
                paint.drawImage(this.blastMiddle[this.index],this.bombX,this.bombY,this.width,this.height);

                //中心到下面的火焰
                for(var i=0;i<this.num;i++){
                    paint.drawImage(this.blastVertical[this.index],this.bombX,this.bombY+(i+1)*this.height,this.width,this.height);
                }

                //最下面的火焰
                paint.drawImage(this.blastDown[this.index],this.bombX,this.bombY+(i+1)*this.height,this.width,this.height);


                //最左边的火焰
                paint.drawImage(this.blastLeft[this.index],this.bombX-(this.num+1)*this.width,this.bombY,this.width,this.height);
                //中心到最左边的火焰
                for(var i=0;i<this.num;i++){
                    paint.drawImage(this.blastLevel[this.index],this.bombX-(i+1)*this.width,this.bombY,this.width,this.height);
                }

                //最右边的火焰
                paint.drawImage(this.blastRight[this.index],this.bombX+(this.num+1)*this.width,this.bombY,this.width,this.height);
                //中心到最右边的火焰
                for(var i=0;i<this.num;i++){
                    paint.drawImage(this.blastLevel[this.index],this.bombX+(i+1)*this.width,this.bombY,this.width,this.height);
                }
                break;
        }


    }
}
