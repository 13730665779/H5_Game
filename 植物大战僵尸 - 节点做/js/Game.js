function Game() {

	var box = document.getElementById("box");
	box.style.overflow = "hidden";
	var box2 = document.getElementById("box2");

	var star;
	//隐藏

	//创建地图对象
	var mymap;

	//定义状态值
	//	var state;
	//设置游戏的状态值
	//	 var GAME_START = 0;
	//	 var GAME_RUN = GAME_START + 1;
	//	 var GAME_OVER = GAME_RUN + 1;
	//	 state = GAME_START;

	var boxWidth = box.style.width;
	var boxHeight = box.style.height;
	//初始化整个项目
	var timer1;

	var timer2;
	var timer3;
	//   定义一个草坪
	var lawn;
	//   定义一辆车
	var car;
	var plants;

	var zombieLeft;

	var zombie;

	var zombies = [];

	var zombieNum = 1;
	var sunBack;
	var sunScore;
	var sunNum = 175;
	var sun;
	var peaShooters = [];

	var GAME_NORMAL = 0;
	var GAME_RUN = GAME_NORMAL + 1;
	var state = GAME_RUN;
	var time = 0;
	
	this.init = function() {

		this.initMap();

		this.initSunBack();

		this.initSunNum();

		this.initSun();
		//监听

		sun.setSunNumListener(this.addSunListener);

		this.initCar();

		this.initPlants();

		plants.addPeaListener(this.initPeaShooter);
		plants.setReduceSunListener(this.reduceSunListener);
		plants.setSunNumListener(this.getSunNumListener);  
		this.initZombie();

	}

	this.addSunListener = function() {

		sunNum += 25;
		sunScore.innerHTML = sunNum;

	}

	this.reduceSunListener = function() {

		sunNum -= 100;
		sunScore.innerHTML = sunNum;
        
	}
    
	this.initSunBack = function() {

		sunBack = document.createElement("img");
		sunBack.style.width = "123px";
		sunBack.style.height = "34px";
		sunBack.src = "img/Start/SunBack.png";
		sunBack.style.position = "absolute";
		sunBack.style.left = "110px";
		sunBack.style.top = "0px";

		box.appendChild(sunBack);

	}
    
	this.initSunNum = function() {

		sunScore = document.createElement("h2");
		sunScore.style.position = "absolute";
		sunScore.style.left = "170px";
		sunScore.style.top = "3px";
		sunScore.style.color = "black";
		sunScore.innerHTML = sunNum;
   
		box.appendChild(sunScore);
	}

	this.initSun = function() {

		sun = new Sun();

		sun.init(box);

	}

	this.initZombie = function() {

		for(var i = 0; i < zombieNum; i++) {

			var zombie = new Zombie();

			zombie.init(box, peaShooters);
			zombies.push(zombie);

		}

	}

	this.initPeaShooter = function(randomX, randomY, clickTime) {

		for(var i = 0; i < clickTime; i++) {

			var peaShooter = new PeaShooter();

			peaShooter.init(box, randomX, randomY);

			peaShooters.push(peaShooter);
		}

	}

	this.initCar = function() {

		car = new Car();

		car.init(box);
	}

	this.initPlants = function() {

		plants = new Plants();

		plants.init(box, boxWidth, boxHeight);

	}

	this.initMap = function() {
		//创建地图对象
		box2.style.display = "none";
		mymap = new Map();
		//初始化地图
		mymap.init(box);
	}


	this.run = function() {
		switch(state) {
            case GAME_NORMAL: 
            break;
            
			case GAME_RUN:
				time++;
				//豌豆的运动
				peaShooters.forEach(function(peaShooter) {

					peaShooter.run();

				})
                //僵尸的行走
				zombies.forEach(function(zombie) {

					zombie.run();

					peaShooters.forEach(function(peaShooter) {

						zombie.setZombieShowUpListener(peaShooter.addZombieShowUpListener);

						zombie.collision(peaShooter.peaBullets);

					})

				})
                //太阳的掉落
				sun.run();

                if(sunNum>=100){
                    plants.run();
                }
				break;
				
				case GAME_OVER:
				break;

		}

	}
}