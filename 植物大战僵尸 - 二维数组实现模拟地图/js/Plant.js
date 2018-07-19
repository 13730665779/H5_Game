function Plant() {
    var menus = ['./img/plant/Peashooter01.gif','./img/plant/SunFlower1.gif','./img/plant/CherryBomb01.gif',];
    var positions = [{width:65,height:70},{width:65,height:70},{width:75,height:70}];
    //坐标
    var plantX;
    var plantY;

    //大小
    var width;
    var height;
    //图标
    var plant;

    this.init=function (type,x,y) {
        plantX=x;
        plantY=y;

        width=positions[type].width;
        height=positions[type].height;

        plant = new Image();
        plant.src=menus[type];
    }
    
    this.run=function (paint) {
        console.log("x="+plantX+";y="+plantY);
        console.log("width="+width+";height="+height);
        paint.drawImage(plant,plantX,plantY,width,height)
    }
}