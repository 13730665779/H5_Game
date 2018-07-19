 document.write("<script src='Scores.js'></script>");
function Wolf() {
    //灰太狼图片元素节点
    var wolf;
    
    var score=new Scores();
    
    //灰太狼的位置坐标
    var arrPos = [
        {left:"170px",top:"220px"},
        {left:"50px",top:"290px"},
        {left:"45px",top:"380px"},
        {left:"70px",top:"490px"},
        {left:"200px",top:"460px"},
        {left:"330px",top:"490px"},
        {left:"320px",top:"366px"},
        {left:"305px",top:"260px"},
        {left:"200px",top:"460px"}
    ];
    var clickscores=0;
    
    //图片数组
    var wolfHImages=['../img/wolf/h0.png','../img/wolf/h1.png','../img/wolf/h2.png','../img/wolf/h3.png','../img/wolf/h4.png','../img/wolf/h5.png','../img/wolf/h6.png','../img/wolf/h7.png','../img/wolf/h8.png','../img/wolf/h9.png'];
    //小狼图片
    var wolfXImages=['../img/wolf/x0.png','../img/wolf/x1.png','../img/wolf/x2.png','../img/wolf/x3.png','../img/wolf/x4.png','../img/wolf/x5.png','../img/wolf/x6.png','../img/wolf/x7.png','../img/wolf/x8.png','../img/wolf/x9.png'];
    //图片的下标
//  var wolfHBeated=['../img/wolf/h6.png','../img/wolf/h7.png','../img/wolf/h8.png','../img/wolf/h9.png'];
//  var wolfXBeated=['../img/wolf/x6.png','../img/wolf/x7.png','../img/wolf/x8.png','../img/wolf/x9.png'];
    //图片顺序的索引
    var index=0;
    
    //定义缓存大狼或者小狼的缓存区
    var wolfImages;
    //图片的数量
    //设置状态
    var WOLF_NORMAL=0;
    var WOLF_BEATED=WOLF_BEATED+1;
    //定义初始状态为狼的正常状态
    var state=WOLF_NORMAL;
    
    var length =wolfHImages.length;
     
    this.init=function (game) {
        //创建图片元素
        wolf =document.createElement('img');
          //设置图片来源
        this.randomType();
         
        wolf.src=wolfImages[index];
          //设置位置
                  
         wolf.style.position="absolute";
          //重置位置
         this.rePosition();
         //将狼对象添加到游戏盒子里面去
                  
         game.appendChild(wolf);
         
         
    }
    var l=length-4;
    
    this.run=function () {   	
        
        index++;
        
        wolf.onclick=function(){
        	//敲击时直接将index的设置到6，执行后面的动画
        	index=6;
        	//执行动画图片的长度
        	l=length;
            
//          this.addScores(l);
            if(l==10){
//  		  clickscores=clickscores+10;
//  	      score.innerHTML=clickscores;	
//           console.log("2222");
    	}
            
        }
        
        if(index>=l){       	           
            index=0;                        
            //重写给狼的位置赋值
            this.rePosition();
            
            this.randomType(); 
            //重置l的值
             l=6;
        }
        //设置图片来源           
       wolf.src=wolfImages[index];
      
    }
  
      
    this.rePosition=function () {
        var random =Math.floor(Math.random()*9);
  
        wolf.style.left=arrPos[random].left;
        wolf.style.top=arrPos[random].top;
    }


    
   this.randomType=function(){
   	
   	 var random1=Math.floor(Math.random()*2);
         
         if(random1==0){
         	wolfImages=wolfHImages;
         }else {
         wolfImages=wolfXImages;	
         }

   }
   
}
