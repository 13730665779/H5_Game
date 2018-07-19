function Icon() {
    var icon;
    var startX ;
    var startY ;

    var width;
    var heigth;

    var isClick=false;

    var icons = ['./img/plant/Peashooter01.gif','./img/plant/SunFlower1.gif','./img/plant/CherryBomb01.gif',];

    var type;

    this.init = function (index,startX_,startY_,width_,heigth_) {
        type=index;
        startX = startX_;
        startY = startY_;
        width = width_;
        heigth = heigth_;
        icon = new Image();
        icon.src = icons[type];
        return icon;

    }
    var ICON_NORMAL=0;
    var ICON_MOVE=ICON_NORMAL+1;
    var state=ICON_NORMAL;

    this.run = function (paint) {
        switch(state){
            case ICON_NORMAL:
                paint.drawImage(icon,startX,startY,width,heigth);
                break;
            case ICON_MOVE:
                //左上角的植物
                paint.drawImage(icon,startX,startY,width,heigth);
               //移动中的植物
                paint.drawImage(icon,moveX-width/2,moveY-heigth/2,width,heigth);

                //放置植物
                paint.drawImage(icon,putX,putY,width,heigth);
                console.log("run方法的 putX="+putX,"putX="+putY);
                break;
        }
    }

    var move = false;
    //鼠标点击植物
    this.onClick = function (x,y) {

        if(isClick){
            state = ICON_NORMAL;
            isClick=false;
            return type;
        }
        if(x>startX &&x<startX+width&&y>startY&&y<startY+heigth){
            move = true;
            state = ICON_MOVE;
            isClick=true;
        }

        console.log(isClick);

        return -1;
    }

    //返回move，在Menu里判断植物是否能移动
    this.isMove = function () {
        return move;
    }

    var moveX;
    var moveY;
    var isPut = false;
    //植物随鼠标移动
    this.onmouseMove = function (x,y) {
        if(state == ICON_MOVE ){
            moveX = x;
            moveY = y;
            isPut = false;
            // console.log(url);
            return isPut;
        }
        return true;
    }

    var putX;
    var putY;
    this.plantPut = function (x,y) {
            putX = x;
            putY = y;
            console.log("putX="+putX,"putX="+putY);
            //state=ICON_NORMAL;
    }


}