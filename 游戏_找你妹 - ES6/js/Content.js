class Content {

	constructor() {

		//创建数字文本
		this.contentnumber = [];
		this.content = [];
		this.contents = ['动物', '闹钟', '服装', '杯子', '水果', '字母', '钱', '数字', '人', '植物', '盘子', '雨伞', '交通工具'];
		this.contents1 = [];
		this.contentsthree = [];
		this.top = -15;
		this.left = 150;
		this.items;

	}

	init(items1) {
		this.items = items1;
		this.createContent();
	}

	createContent() {
		this.box = document.getElementById('box');
		for(let i = 0; i < this.contents.length; i++) {
			let random = Math.floor(Math.random() * this.contents.length);
			this.contentsthree.push(this.contents[random]);
			this.contents.splice(random, 1);
		}

		for(let i = 0; i < 3; i++) {
			//创建数字文本
			this.contentnumber[i] = document.createElement("h3");
			//文本颜色
			this.contentnumber[i].style.color = "#fff";
			//文本位置
			this.contentnumber[i].style.position = "absolute";

			//创建文本
			this.content[i] = document.createElement("h3");
			//文本颜色
			this.content[i].style.color = "#464aff";
			//文本位置
			this.content[i].style.position = "absolute";
			// document.body.appendChild(content[i]);
			// document.body.appendChild(contentnumber[i]);
			this.box.appendChild(this.content[i]);
			this.box.appendChild(this.contentnumber[i]);
		}

	}
 
	run() {
		for(let i = 0; i < 3; i++) {
			this.contents1[i] = {
				content2: this.contentnumber[i]
			};
			this.contents1[i].content2.style.top = this.top + "px";
			this.contents1[i].content2.style.left = this.left + 180 * (i) - 30 + "px";
			this.contents[i] = {
				content1: this.content[i]
			};
			this.contents[i].content1.style.top = this.top + "px";
			this.contents[i].content1.style.left = this.left + 180 * (i) + "px";
			//文本内容

			if(this.contentsthree[i] == "动物") {
				this.items.state[i] = 0;
				if(this.items.animal <= 0)
					this.items.animal = 0;
				this.contents1[i].content2.innerHTML = this.items.animal;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "闹钟") {
				this.items.state[i] = 1;
				if(this.items.clock <= 0)
					this.items.clock = 0;
				this.contents1[i].content2.innerHTML = this.items.clock;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "服装") {
				this.items.state[i] = 2;
				if(this.items.clothe <= 0)
					this.items.clothe = 0;
				this.contents1[i].content2.innerHTML = this.items.clothe;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "杯子") {
				this.items.state[i] = 3;
				if(this.items.cup <= 0)
					this.items.cup = 0;
				this.contents1[i].content2.innerHTML = this.items.cup;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "水果") {
				this.items.state[i] = 4;
				if(this.items.fruit <= 0)
					this.items.fruit = 0;
				this.contents1[i].content2.innerHTML = this.items.fruit;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "字母") {
				this.items.state[i] = 5;
				if(this.items.letter <= 0)
					this.items.letter = 0;
				this.contents1[i].content2.innerHTML = this.items.letter;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "钱") {
				this.items.state[i] = 6;
				if(this.items.money <= 0)
					this.items.money = 0;
				this.contents1[i].content2.innerHTML = this.items.money;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "数字") {
				this.items.state[i] = 7;
				if(this.items.number <= 0)
					this.items.number = 0;
				this.contents1[i].content2.innerHTML = this.items.number;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "人") {
				this.items.state[i] = 8;
				if(this.items.people <= 0)
					this.items.people = 0;
				this.contents1[i].content2.innerHTML = this.items.people;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "植物") {
				this.items.state[i] = 9;
				if(this.items.plant <= 0)
					this.items.plant = 0;
				this.contents1[i].content2.innerHTML = this.items.plant;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "盘子") {
				this.items.state[i] = 10;
				if(this.items.plate <= 0)
					this.items.plate = 0;
				this.contents1[i].content2.innerHTML = this.items.plate;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "雨伞") {
				this.items.state[i] = 11;
				if(this.items.umbrella <= 0)
					this.items.umbrella = 0;
				this.contents1[i].content2.innerHTML = this.items.umbrella;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			} else if(this.contentsthree[i] == "交通工具") {
				this.items.state[i] = 12;
				if(this.items.vehicle <= 0)
					this.items.vehicle = 0;
				this.contents1[i].content2.innerHTML = this.items.vehicle;
				this.contents[i].content1.innerHTML = this.contentsthree[i];
			}
		}

	}

}