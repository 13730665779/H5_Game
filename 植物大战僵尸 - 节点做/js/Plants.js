function Plants() {
    //定义一个植物图标对象
    var plantImg;

    var isClickPlant = false;
    //设置随机位置
    var randomX;
    var randomY;
    //盒子
    var box;

    var plantWidth = 100;
    var plantHeight = 60;

    var boxWidth;
    var boxHeight;

    var index = 0;
    var plantImg1;
    var plantImg2;
    var sunNum;
//	var isClick = false;
    this.init = function (buffer, buffer1, buffer2) {


        box = buffer;
        boxWidth = buffer1;
        boxHeight = buffer2;
        plantImg = document.createElement("img");

        plantImg.src = "img/Plant/Peashooter/Peashooter.png";
        plantImg.style.width = plantWidth + "px";
        plantImg.style.height = plantHeight + "px";
        plantImg.style.position = "absolute";
        plantImg.style.left = "0px";
        plantImg.style.top = "0px";
        box.onmousemove = this.plantMove;
        plantImg.onclick = this.plantClick;

        plantImg2 = document.createElement("img");
        plantImg2.src = "img/Plant/Peashooter/PeashooterG.png";
        plantImg2.style.width = plantWidth + "px";
        plantImg2.style.height = plantHeight + "px";
        plantImg2.style.position = "absolute";
        plantImg2.style.left = "0px";
        plantImg2.style.top = "0px";
        plantImg2.style.display = "none";
        box.appendChild(plantImg);
        box.appendChild(plantImg2);
    }
    //点击次数
    var clickTime = 0;


    this.plantMove = function (ev) {

        if (isClickPlant) {

            var x = ev.clientX;
            var y = ev.clientY;

            randomX = x - 260;
            randomY = y - 40;

            plantImg1.style.left = randomX + "px";

            plantImg1.style.top = randomY + "px";
        }

    }

    this.plantClick = function (ev) {

        plantImg.style.display = "none";
        if (index % 2 == 0) {
            callBack1();
        }
        plantImg1 = document.createElement("img");
        plantImg1.style.position = "absolute";
        plantImg1.style.left = "0px";
        plantImg1.style.top = "0px";
        plantImg1.src = "img/Plant/Peashooter/Peashooter.gif";
        plantImg1.style.width = "71px";
        plantImg1.style.height = "71px";
        box.appendChild(plantImg1);

        plantImg2.style.display = "block";
        plantImg1.onclick = function (ev) {

            if (!isClickPlant) {

                isClickPlant = true;

            } else {

                clickTime = clickTime + 1;

                isClickPlant = false;

                plantImg1.style.display = "none";

                callBack(randomX, randomY, clickTime);




            }

        }

    }

    this.run = function () {

        plantImg.style.display = "block";
        plantImg2.style.display = "none";
    }
    var callBack;
    this.addPeaListener = function (call) {
        callBack = call;

    }

    var callBack1;
    this.setReduceSunListener = function (call) {
        callBack1 = call;

    }

    var callBack2;
    this.setaddPeashoListener = function (call) {
        callBack2 = call;

    }

    var callBack3;
    this.setSunNumListener = function (call) {
        callBack3 = call;
    }
}