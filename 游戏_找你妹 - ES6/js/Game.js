class Game {

	constructor() {
		this.initArguments();
		//初始化游戏盒子
		this.initGame();

		//初始化地图图片
		this.initMap();

		//初始化背景图片
		this.initImgBack();

		//初始化图片
		this.initItems();

		//初始化文本
		this.initContent();

		//初始化时间
		this.initTimeView();

		//初始化按钮
		this.initButton();

		//设置监听
		this.timeView.addTimeListener(this.timeListener);
	}

	initArguments() {
		TimeView.that = this;
		//设置游戏盒子大小
		this.GameW = 1200;
		this.GameH = 600;

		//画笔
		this.paint;
		this.GAME_START = 0;
		this.GAME_RUN = this.GAME_START + 1;
		this.GAME_OVER = this.GAME_RUN + 1;
		this.state = this.GAME_START;

	}

	initButton() {
		let that = this;
		this.button = document.createElement('button');
		//设置按钮的大小
		this.button.style.width = this.GameW / 3 + "px";
		this.button.style.height = this.GameH / 6 + "px";
		//设置按钮的内容
		this.button.innerHTML = "开始游戏";
		//设置位置
		this.button.style.position = "absolute";
		this.button.style.left = (this.GameW - this.GameW / 3) / 2 + "px";
		this.button.style.top = (this.GameH - this.GameH / 6) / 2 + "px";
		this.button.style.borderWidth = "0px";
		this.button.style.borderRadius = "10px";
		this.button.style.zIndex = "2";
		//设置点击事件

		that.button.onclick = function() {

			//			console.log(that.button);
			that.button.style.display = "none";

			that.state = that.GAME_RUN;
			//重新初始化时间
			TimeView.that.timeView.resetTimeView();

		}

		document.body.appendChild(this.button);
	}

	run() {
		this.content.run();
		switch(this.state) {
			case this.GAME_START:
				break;

			case this.GAME_RUN:
				this.timeView.run(this.items);
				this.map.run(this.paint);
				this.items.run(this.paint);
				break;

			case this.GAME_OVER:
				break;
		}

	}

	timeListener() {
		this.button1 = this.button;
		//更改游戏的状态
		this.state = this.GAME_OVER;
		//展示游戏的下一关按钮
		this.button.innerHTML = "继续";
		this.button.style.display = "";
		this.button1.onclick = function() {
			this.button1.style.display = "none";
			window.location.href = "./index.html";
		}
	}

	initGame() {
		//获得游戏画布
		this.myCanvas = document.getElementById('myCanvas');

		//创建一个画布
		this.paint = this.myCanvas.getContext("2d");

	}

	initMap() {
		this.map = new Map();
		//数据初始化
		this.map.init();
	}

	initImgBack() {
		this.imgback = new ImgBack();
		this.imgback.init(this.GameW, this.GameH);
	}

	initItems() {
		this.items = new Items();
		this.items.init();
	}

	initContent() {
		this.content = new Content();
		this.content.init(this.items);
	}

	initTimeView() {
		this.timeView = new TimeView();
		this.timeView.init();
	}
}