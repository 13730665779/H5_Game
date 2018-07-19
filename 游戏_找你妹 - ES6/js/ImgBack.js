class ImgBack {

	construtor() {

		this.backimg;
	}

	init(GameW, GameH) {
		this.box = document.getElementById("box");
		//创建背景图片
		this.backimg = document.createElement('img');
		//设置背景图片的大小
		this.backimg.style.width = GameW + "px";
		this.backimg.style.height = GameH + "px";
		//设置背景图片的来源
		this.backimg.src = "./img/images/background.png";
		//设置游戏盒子的位置
		this.backimg.style.position = "absolute";
		//将背景图片添加到游戏盒子中
		this.box.appendChild(this.backimg);
	}
}