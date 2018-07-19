class TimeView {

	constructor() {
		this.box = document.getElementById('box');
		//时间背景图片节点
		this.lifebg;
		this.lifebgTop = 5;
		this.lifebgLeft = 825;

		//时间图片节点
		this.lifebar;
		this.lifebarTop = 9;
		this.lifebarLeft = 879;
		this.lifebarW = 95;
		this.lifebarH = 12;

		//是否结束
		this.isOver = false;
		this.callBack;
	}

	init() {
		//设置时间背景图片
		this.CreateLifeBg();
		//设置时间图片
		this.CreateLifeBar();

	}

	CreateLifeBg() {

		this.lifebg = document.createElement('img');
		//设置时间背景来源
		this.lifebg.src = "./img/images/lifeBg.png";
		//设置图片的位置
		this.lifebg.style.position = "absolute";
		this.lifebg.style.top = this.lifebgTop + "px";
		this.lifebg.style.left = this.lifebgLeft + "px";
		this.box.appendChild(this.lifebg);
	}

	CreateLifeBar() {
		
		this.lifebar = document.createElement('img');
		//设置时间背景来源
		this.lifebar.src = "./img/images/lifeBar.png";
		//设置图片的位置
		this.lifebar.style.position = "absolute";
		this.lifebar.style.top = this.lifebarTop + "px";
		this.lifebar.style.left = this.lifebarLeft + "px";
		//设置图片大小
		this.lifebar.style.width = this.lifebarW + "px";
		this.lifebar.style.height = this.lifebarH + "px";
		this.box.appendChild(this.lifebar);
	}

	addTimeListener(call) {
		this.callBack = call;
	}

	run(items) {
		if(this.isOver)
			return;
		this.lifebarW = this.lifebarW - 1 + items.timeW;
		items.timeW = 0;
		if(this.lifebarW >= 95) {
			this.lifebarW = 95;
		}
		if((this.lifebarW <= 0)) {
			this.isOver = true;
			this.callBack();
			this.lifebar.style.display = "none";
		} else
			this.lifebar.style.width = this.lifebarW + "px";
	}

	resetTimeView() {
		this.lifebar.style.display = "";
		this.lifebarW = 95;
		this.isOver = false;
	}
}