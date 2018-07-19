function  Map() {
    //地图
    var map;
    var cell;

    //地图的大小
    var mapW = 1400;
    var mapH = 600;
    //地图的坐标
    var mapX=0;
    var mapY=0;

    var positionX=0;
    var positionY=0;
    //水平移动速度
    var speedX = 20;

    var icon;
    var menu;

    //初始化地图
    this.init = function () {
        map = new Image();
        map.src = "./img/bg/background1.jpg";
        cell = new Image();
        cell.src = "./img/bg/SodRollCap.png";
    }

    var startX=125;
    var startY=80;

    var lawnWidth=73;
    var lawnHeight=71;
    this.run = function (paint) {
        paint.drawImage(map, positionX - 120, positionY, 1400, 600);

        // for (var i = 0; i < 5; i++) {
        //     for (var j = 0; j < 9; j++) {
        //         paint.drawImage(cell, startX + j * (lawnWidth + 10), mapY + startY + i * (lawnHeight + 30), lawnWidth, lawnHeight);
        //     }
        // }

        for(var i=0;i<plants.length;i++){
            plants[i].run(paint);
        }
    }


    this.onClick = function (x,y) {
        // menu = new Menu();
        // menu.init();
        // menu.setPlantListener(this.plantListener);
        // menu.plantPut(x,y);
    }

    var plants=[];
    this.plantListener=function (type,x,y) {

        var plantX= Math.floor((x-startX)/(lawnWidth + 10))*(lawnWidth + 10)+startX;

        var plantY=Math.floor((y-startY)/(lawnHeight+30))*(lawnHeight + 30)+startY;

        var plant= new Plant();
        plant.init(type,plantX,plantY);

        plants.push(plant);

    }
}