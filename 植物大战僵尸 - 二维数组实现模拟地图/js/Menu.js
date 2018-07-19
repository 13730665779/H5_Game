function Menu() {
    var menus = ['./img/plant/Peashooter01.gif','./img/plant/SunFlower1.gif','./img/plant/CherryBomb01.gif',];
    var positions = [{width:65,height:70},{width:65,height:70},{width:75,height:70}];

    var startX =0;
    var startY =0;

    var icons = [];

    var icon;
    this.init = function () {
        for (var i=0;i<3;i++){
            type=i;
            icon = new Icon();
            icon.init(i,startX+70*i,startY,positions[i].width,positions[i].height);
            icons.push(icon);
            // console.log(icons);
        }
    }

    this.run = function (paint) {
        icons.forEach(function (icon) {
            icon.run(paint);
        })
    }

    var num = 0;
    //点击菜单中的植物
    this.onClick = function (x,y) {
        num++;
        //if (num<=1){
            icons.forEach(function (icon) {
                var type=icon.onClick(x,y);
                if(type!=-1){
                    callBack(type,x,y);
                };
            })
      //  }
    }

    this.onmouseMove = function (x,y) {
        icons.forEach(function (icon) {
            if(icon.isMove()){
                icon.onmouseMove(x,y);
                // console.log(x,y);
            }
        })
    }

    //放植物
    this.plantPut = function (x,y) {
        icons.forEach(function (icon) {
            //if(!icon.isPut){
                icon.plantPut(x,y);
                console.log("菜单x："+x,"菜单y："+y);
          //  }
        })
    }

    var callBack;
    this.setPlantListener=function (call) {

        callBack=call;
    }
}