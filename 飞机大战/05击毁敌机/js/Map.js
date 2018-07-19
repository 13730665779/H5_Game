function Map() {

    //设置每张图片的大小
    var imgW = 480;
    var imgH = 100;
    //图片的坐标
    var imags = ['./img/bg__01.png','./img/bg__02.png','./img/bg__03.png','./img/bg__04.png','./img/bg__05.png','./img/bg__06.png','./img/bg__07.png','./img/bg__08.png'];
    
    //设置一个存放图片的盒子
    var maps = [];
    //函数初始化
    this.init = function (game) {
        //得到图片数组的长度为length 
        var length = imags.length;
        //遍历图片数组
        for(var i = 0 ; i < length ; i++) {
            //创建图片元素
            var buffer = document.createElement('img');
            //设置图片宽高
            buffer.style.width=imgW+"px";
            buffer.style.height=imgH+"px";
            //设置图片的来源
            buffer.src=imags[i];
            
            //把图片原始放到另外一个数组
            maps[i]={img:buffer,imgX:0,imgY:(i-1)*100};
            //设置位置
            maps[i].img.style.position="absolute";
            
            //maps[i].img.style.left=maps[i].imgX+"px";
            maps[i].img.style.top=maps[i].imgY+"px";
            //将新的图片数组里面的对象添加到game对象中区
            game.appendChild(maps[i].img);
        }
    }
    
    //地图的运行
    this.run=function () {
    	//遍历刚刚放进maps组里面的图片
        maps.forEach(function (map) {
        	//图片对象top值逐渐增加
            map.imgY=map.imgY+1;
            //当图片的top值大于700时，此时将最外面的那张图片放到最上面
            if(map.imgY>=700)
                map.imgY=-100;
            //执行
            map.img.style.top=map.imgY+"px";
        });
    }
}