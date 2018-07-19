class Items {

	constructor() {

		Items.that = this;

		this.state = [];

		//存储图片数组
		this.items = [];
		this.itemsall = [];
		//存储图片种类的数量
		this.animal = 0;
		this.clock = 0;
		this.clothe = 0;
		this.cup = 0;
		this.fruit = 0;
		this.letter = 0;
		this.money = 0;
		this.number = 0;
		this.people = 0;
		this.plant = 0;
		this.plate = 0;
		this.umbrella = 0;
		this.vehicle = 0;

		this.timeW = 0;
		this.lengthrandom;
		this.lengthrandom2;

		//设置图片的大小
		this.width;
		this.heigth;

		//创建图片元素
		this.img;
		//图片的位置
		this.left;
		this.top;

		this.length2;

		this.itemsPos;
		this.all;
		this.itemsXY = [];
		this.length;

		this.animals = ['./img/animal/animal.png', './img/animal/animal1.png', './img/animal/animal2.png', './img/animal/animal3.png', './img/animal/animal4.png', './img/animal/animal5.png', './img/animal/animal6.png', './img/animal/animal7.png', './img/animal/animal8.png', './img/animal/animal9.png'];

		this.clocks = ['./img/clock/clock.png', './img/clock/clock1.png', './img/clock/clock2.png', './img/clock/clock3.png', './img/clock/clock4.png', './img/clock/clock5.png', './img/clock/clock6.png', './img/clock/clock7.png', './img/clock/clock8.png', './img/clock/clock9.png'];
		this.clothes = ['./img/clothe/clothe.png', './img/clothe/clothe1.png', './img/clothe/clothe2.png', './img/clothe/clothe3.png', './img/clothe/clothe4.png', './img/clothe/clothe5.png', './img/clothe/clothe6.png', './img/clothe/clothe7.png', './img/clothe/clothe8.png', './img/clothe/clothe9.png'];
		this.cups = ['./img/cup/cup.png', './img/cup/cup1.png', './img/cup/cup2.png', './img/cup/cup3.png', './img/cup/cup4.png', './img/cup/cup5.png', './img/cup/cup6.png', './img/cup/cup7.png', './img/cup/cup8.png', './img/cup/cup9.png'];
		this.fruits = ['./img/fruit/fruit.png', './img/fruit/fruit1.png', './img/fruit/fruit2.png', './img/fruit/fruit3.png', './img/fruit/fruit4.png', './img/fruit/fruit5.png', './img/fruit/fruit6.png', './img/fruit/fruit7.png', './img/fruit/fruit8.png', './img/fruit/fruit9.png'];
		this.letters = ['./img/letter/letter.png', './img/letter/letter1.png', './img/letter/letter2.png', './img/letter/letter3.png', './img/letter/letter4.png', './img/letter/letter5.png', './img/letter/letter6.png', './img/letter/letter7.png', './img/letter/letter8.png', './img/letter/letter9.png'];
		this.moneys = ['./img/money/money.png', './img/money/money1.png', './img/money/money2.png', './img/money/money3.png', './img/money/money4.png', './img/money/money5.png', './img/money/money6.png', './img/money/money7.png', './img/money/money8.png', './img/money/money9.png'];
		this.numbers = ['./img/number/number.png', './img/number/number1.png', './img/number/number2.png', './img/number/number3.png', './img/number/number4.png', './img/number/number5.png', './img/number/number6.png', './img/number/number7.png', './img/number/number8.png', './img/number/number9.png'];
		this.peoples = ['./img/people/people.png', './img/people/people1.png', './img/people/people2.png', './img/people/people3.png', './img/people/people4.png', './img/people/people5.png', './img/people/people6.png', './img/people/people7.png', './img/people/people8.png', './img/people/people9.png'];
		this.plants = ['./img/plant/plant.png', './img/plant/plant1.png', './img/plant/plant2.png', './img/plant/plant3.png', './img/plant/plant4.png', './img/plant/plant5.png', './img/plant/plant6.png', './img/plant/plant7.png', './img/plant/plant8.png', './img/plant/plant9.png'];
		this.plates = ['./img/plate/plate.png', './img/plate/plate1.png', './img/plate/plate2.png', './img/plate/plate3.png', './img/plate/plate4.png', './img/plate/plate5.png', './img/plate/plate6.png', './img/plate/plate7.png', './img/plate/plate8.png', './img/plate/plate9.png'];
		this.umbrellas = ['./img/umbrella/umbrella.png', './img/umbrella/umbrella1.png', './img/umbrella/umbrella2.png', './img/umbrella/umbrella3.png', './img/umbrella/umbrella4.png', './img/umbrella/umbrella5.png', './img/umbrella/umbrella6.png', './img/umbrella/umbrella7.png', './img/umbrella/umbrella8.png', './img/umbrella/umbrella9.png'];
		this.vehicles = ['./img/vehicle/vehicle.png', './img/vehicle/vehicle1.png', './img/vehicle/vehicle2.png', './img/vehicle/vehicle3.png', './img/vehicle/vehicle4.png', './img/vehicle/vehicle5.png', './img/vehicle/vehicle6.png', './img/vehicle/vehicle7.png', './img/vehicle/vehicle8.png', './img/vehicle/vehicle9.png'];
		this.itemsX;
		this.itemsY;

	}

	init() {

		//创建图片元素
		this.CreateImg();
		document.onclick = this.onClick;
	}

	randomPicture() {
		//随机图片来源的下标
		this.lengthrandom = Math.floor(Math.random() * this.length);
		this.lengthrandom2 = Math.floor(Math.random() * this.length2);

		//创建图片元素
		this.img = new Image();
		//设置图片的来源
		this.img.src = this.all[this.lengthrandom][this.lengthrandom2];

		//设置图片的位置坐标
		this.itemsX = Math.floor(Math.random() * 11);
		this.itemsY = Math.floor(Math.random() * 7);

		switch(this.itemsXY[this.itemsX][this.itemsY]) {
			case 0:
				if(this.lengthrandom == 0) {
					this.animal++;
				} else if(this.lengthrandom == 1) {
					this.clock++;
				} else if(this.lengthrandom == 2) {
					this.clothe++;
				} else if(this.lengthrandom == 3) {
					this.cup++;
				} else if(this.lengthrandom == 4) {
					this.fruit++;
				} else if(this.lengthrandom == 5) {
					this.letter++;
				} else if(this.lengthrandom == 6) {
					this.money++;
				} else if(this.lengthrandom == 7) {
					this.number++;
				} else if(this.lengthrandom == 8) {
					this.people++;
				} else if(this.lengthrandom == 9) {
					this.plant++;
				} else if(this.lengthrandom == 10) {
					this.plate++;
				} else if(this.lengthrandom == 11) {
					this.umbrella++;
				} else if(this.lengthrandom == 12) {
					this.vehicle++;
				}
				this.itemsXY[this.itemsX][this.itemsY] = 1;
				//随机图片的大小
				this.width = 40 + Math.floor(Math.random() * 20);
				this.heigth = this.width;
				//设置图片坐标
				this.left = this.itemsPos[0].left + 80 * this.itemsX;
				this.top = this.itemsPos[0].top + 70 * this.itemsY;
				this.items = {
					img1: this.img,
					itemsX1: this.left,
					itemsY1: this.top,
					Width: this.width,
					Heigth: this.heigth
				};
				this.itemsall.push(this.items);
				break;
			case 1:
				break;
		}

	}

	CreateImg() {
		//图片位置
		this.itemsPos = [{
			left: 10,
			top: 10 + Math.floor(Math.random() * 20)
		}];

		//将不同种类的图片放到数组，构成二维数组
		this.all = [this.animals, this.clocks, this.clothes, this.cups, this.fruits, this.letters, this.moneys, this.numbers, this.peoples, this.plants, this.plates, this.umbrellas, this.vehicles];

		//创建二维数组，存储图片

		for(let i = 0; i < 11; i++) {
			this.itemsXY[i] = [];
		}

		for(let i = 0; i < 11; i++) {
			for(let j = 0; j < 7; j++) {
				this.itemsXY[i][j] = 0;
			}
		}

		//获得图片二维数组的长度
		this.length = this.all.length;

		for(let i = 0; i < this.length; i++) {
			this.arrayData = this.all[i];
			//3,获得每个数组的长度
			this.length2 = this.arrayData.length;
		}
		//随机图片的下标

		for(let i = 0; i < 77; i++) {
			this.randomPicture();
		}
	}

	onClick(ev) {
		let W = document.body.clientWidth;
		let W1 = (W - 900) / 2;

		let X = ev.clientX - W1 + 40.5;
		let Y = ev.clientY - 40;
		Items.that.itemsall.forEach(function(item) {
			Items.that.lengthrandom = Math.floor(Math.random() * Items.that.length);
			Items.that.lengthrandom2 = Math.floor(Math.random() * Items.that.length2);
			if(item.itemsX1 < X && (item.itemsX1 + Items.that.width) > X && Y > item.itemsY1 && Y < (item.itemsY1 + Items.that.heigth)) {
				for(let j = 0; j < 3; j++) {
					switch(Items.that.state[j]) {
						case 0:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.animals[i])) {
									Items.that.animal--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;

								}
							}
							break;
						case 1:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.clocks[i])) {
									Items.that.clock--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
						case 2:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.clothes[i])) {
									Items.that.clothe--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
						case 3:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.cups[i])) {
									Items.that.cup--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
						case 4:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.fruits[i])) {
									Items.that.fruit--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
						case 5:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.letters[i])) {
									Items.that.letter--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
						case 6:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.moneys[i])) {
									Items.that.money--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
						case 7:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.numbers[i])) {
									Items.that.number--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
						case 8:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.peoples[i])) {
									Items.that.people--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
						case 9:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.plants[i])) {
									Items.that.plant--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
						case 10:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.plates[i])) {
									Items.that.plate--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
						case 11:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.umbrellas[i])) {
									Items.that.umbrella--;
									item.img1.src = Items.that.ll[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
						case 12:
							for(let i = 0; i < Items.that.length2; i++) {
								if(item.img1.src.match(Items.that.vehicles[i])) {
									Items.that.vehicle--;
									item.img1.src = Items.that.all[Items.that.lengthrandom][Items.that.lengthrandom2];
									Items.that.timeW = 2;
								}
							}
							break;
					}
				}
			}
		})
	}

	run(paint) {
		this.itemsall.forEach(function(item) {
			paint.drawImage(item.img1, item.itemsX1, item.itemsY1, item.Width, item.Heigth);
		})
	}
}