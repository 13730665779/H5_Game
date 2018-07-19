function Zombie() {
    var zombie;

    //僵尸的坐标
    var zombieX=800;
    var zombieY;
    var speedX = 5;
    //僵尸的起始位置
    positions = [{x:880,y:60},{x:880,y:157},{x:880,y:260},{x:880,y:350},{x:880,y:450}];
    //僵尸的大小
    var zombieW=115;
    var zombieH=125;
    var zombies = ['./img/Zombie/0.gif','./img/Zombie/1.gif','./img/Zombie/2.gif','./img/Zombie/3.gif'];
    var zombieBox = [];

    var index=0;

    //初始化僵尸
    this.init = function (paint) {
        zombie = new Image();
        this.setPosition();
    }

    //僵尸选择走那条道
    this.setPosition = function () {
        var random = Math.floor(Math.random()*10)
        if(random==0){
            zombieY = positions[0].y;
        }
        else if(random==1){
            zombieY = positions[1].y;
        }
        else if(random==2){
            zombieY = positions[2].y;
        }
        else if(random==3){
            zombieY = positions[3].y;
        }
        else{
            zombieY = positions[4].y;
        }
    }

    this.run = function (paint) {
        if (index>=zombies.length){
            index = 0;
        }
        zombie.src = zombies[index];
        // console.log(zombies[index]);
        index++;

        if(zombieX>=50){
            zombieX = zombieX - speedX;
            paint.drawImage(zombie, zombieX, zombieY, zombieW, zombieH);
        }else{
            paint.drawImage(zombie, zombieX, zombieY, zombieW, zombieH);
        }

    }
}