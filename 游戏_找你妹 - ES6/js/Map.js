class Map {

	constructor() {

		//设置地图的大小
		this.MapW = 302;
		this.MapH = 510;
		this.MapTop = 0;

		this.imgs = ['./img/images/BG_1.jpg', './img/images/BG_2.jpg', './img/images/BG_3.jpg', './img/images/BG_4.jpg'];

		this.maps = [];
        
	}

	init() {
		//创建图片元素
		//		this.map = document.createElement("img");
//		alert(this.imgs.length);
		for(let i = 0; i < this.imgs.length; i++) {

			this.map = new Image();
			this.map.src = this.imgs[i];
			this.maps[i] = {
				img: this.map,
				imgX: i * 300
			};
		}
	}

	run(paint) {
		let that = this;
		this.maps.forEach(function(map) {
			map.imgX = map.imgX + 2;
			if(map.imgX >= 900) {
				map.imgX = -300;
			}

			paint.drawImage(map.img, map.imgX, that.MapTop, that.MapW, that.MapH);
		})
	}
}