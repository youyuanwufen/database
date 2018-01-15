/**
 * Created by Administrator on 2017/9/13.
 */
var game = document.getElementById("game");
var gameover= document.getElementById("gameover");
var spanpoint = document.getElementById("spanpoint");
var sure = document.getElementById("sure");
var boom = document.getElementById("boom");
var exp = document.getElementById("exp");
var clock = document.getElementById("clock");
var time2 = document.getElementById("time2");
var time4 = document.getElementById("time4");
var time5 = document.getElementById("time5");

var gameWidth = parseInt(game.offsetWidth);    //游戏界面的宽度
var arrDragon = [];              //存放龙
var arrDragonZidan = [];        //存放龙子弹
var arrEnemybird = [];          //存放敌方小鸟
var arrEnemyplane = [];         //存放敌方飞机
var arrEnemyghost = [];         //存放敌方蝙蝠
var arrEnemyboss = [];          //存放敌方boss
var arrbossZidan = [];         //存放boss子弹
var arrClock = ["image/num/0.gif","image/num/1.gif","image/num/2.gif","image/num/3.gif",
    "image/num/4.gif","image/num/5.gif","image/num/6.gif","image/num/7.gif","image/num/8.gif",
    "image/num/9.gif"];
var point = 0;                  //开始积分为0
var dazhaochance = 3;
var big = document.createElement("img");         //设置放大招
var keyTop, keyLeft, keyRight, keyDown,Dragonopenmouse,dazhao;


    var moveDragonZidanTimer = setInterval(moveDragonZidan, 100);    //龙子弹移动计时器
    var DragonopenmouseTimer = setInterval(dragonopenmouse, 100);    //为了让龙打子弹是嘴动作张开设置计时器
    var DragonclosemouseTimer = setInterval(dragonclosemouse, 1000);
    var createEnemybirdTimer = setInterval(createEnemybird, 3500);      //创造敌方小鸟出现计时器
    var moveEnemybirdTimer = setInterval(moveEnemybird, 600);           //敌方小鸟移动计时器
    var createEnemyplaneTimer = setInterval(createEnemyplane, 4000);    //创造敌方飞机出现计时器
    var moveEnemyplaneTimer = setInterval(moveEnemyplane, 600);         //敌方飞机移动计时器
    var createEnemyghostTimer = setInterval(createEnemyghost, 8000);    //创造敌方蝙蝠出现计时器
    var moveEnemyghostTimer = setInterval(moveEnemyghost, 700);         //敌方蝙蝠移动计时器
    var createEnemybossTimer = setInterval(createEnemyboss, 12000);     //创造敌方boss出现计时器
    var moveEnemybossTimer = setInterval(moveEnemyboss, 500);           //敌方boss移动计时器
    var movebossshotTimer = setInterval(movebossshot, 2000);           //敌方boss发射子弹计时器
    var movebossZidanTimer = setInterval(movebossZidan, 300);          //移动boss子弹计时器
    var bossattackstartTimer = setInterval(bossattackstart, 2000);    //boss子弹的发射动作时间差计时器
    var bossattackendTimer = setInterval(bossattackend, 3000);
    var pointinitTimer = setInterval(pointinit, 200);    //玩家积分计数器
    var middledragonopenmouseTimer = setInterval(middledragonopenmouse, 100);
    var middledragonclosemouseTimer = setInterval(middledragonclosemouse, 1000);
    var bigdragonopenmouseTimer = setInterval(bigdragonopenmouse, 100);
    var bigdragonclosemouseTimer = setInterval(bigdragonclosemouse, 1000);
    var largedragonopenmouseTimer = setInterval(largedragonopenmouse, 100);
    var largedragonclosemouseTimer = setInterval(largedragonclosemouse, 1000);
    var finaldragonopenmouseTimer = setInterval(finaldragonopenmouse, 100);
    var finaldragonclosemouseTimer = setInterval(finaldragonclosemouse, 1000);
    var dragonzidanpengTimer = setInterval(dragonzidanpeng, 100);
    var bosszidanpengTimer = setInterval(bosszidanpeng, 100);
    var birdshousi1Timer = setInterval(birdshousi1, 800);
    var birdshousi2Timer = setInterval(birdshousi2, 8500);
    var planeshousi1Timer = setInterval(planeshousi1, 900);
    var planeshousi2Timer = setInterval(planeshousi2, 1500);
    var ghostshousi1Timer = setInterval(ghostshousi1, 900);
    var ghostshousi2Timer = setInterval(ghostshousi2, 1500);
    var bossshousi1Timer = setInterval(bossshousi1, 500);
    var bossshousi2Timer = setInterval(bossshousi2, 1500);
    var dragonshousi1Timer = setInterval(dragonshousi1, 500);
    var dragonshousi2Timer = setInterval(dragonshousi2, 1400);
    var baoxiangTimer = setInterval(baoxiang, 300);
    var dragongrowTimer = setInterval(dragongrow, 200);    //龙能量条处理
    var fangdazhaoTimer = setInterval(fangdazhao, 100);
    var endfangdazhaoTimer = setInterval(endfangdazhao, 4000);    //大招消失处理
    var time5Timer = setInterval(time5a,1000);
    var time4Timer = setInterval(time4a,100);
    var time2Timer = setInterval(time2a,100);
    var dazhaoimgchangeTimer = setInterval(dazhaoimgchange,100);

function pointinit() {
    pointnum.innerHTML = point +" 分";
}
function  dragongrow(){
    if((point>=0)&&(point<=5)) {
        exp.style.backgroundImage = 'url("image/ui/exp0.png")';
    }
    if((point>=6)&&(point<25)){
        exp.style.backgroundImage = 'url("image/ui/expFull.gif")';
    }
    if((point>=25)&&(point<30)){
        exp.style.backgroundImage = 'url("image/ui/exp0.png")';
    }
    if((point>=30)&&(point<40)){
        exp.style.backgroundImage = 'url("image/ui/expFull.gif")';
    }
    if((point>=40)&&(point<50)){
        exp.style.backgroundImage = 'url("image/ui/exp0.png")';
    }
    if((point>=50)&&(point<80)){
        exp.style.backgroundImage = 'url("image/ui/expMax.gif")';
    }
    if((point>=80)&&(point<90)){
        exp.style.backgroundImage = 'url("image/ui/exp0.png")';
    }
    if(point>=90){
        exp.style.backgroundImage = 'url("image/ui/expMax.gif")';
    }
}
createDragon();                                 //调用龙
function createDragon() {                       //创建龙
    var x = 0 ;
    var y = parseInt(Math.random() * 700);
    var Dragon = new MyDragonphoto(x, y, "image/dragon/small/move.gif", "image/ui/HPMAX.png",1);
    Dragon.init();
    arrDragon.push( Dragon);
    setInterval(arrDragon[0].movedragon, 60);     //移动龙
}
document.onkeydown = function () {   //设置监听键盘按下和松开的事件使用可以使玩家同时按多个键
    var ev = arguments[0] || window.event;
    if (ev.keyCode == 37) {
        keyLeft = true;
    } else if (ev.keyCode == 38) {
        keyTop = true;
    } else if (ev.keyCode == 39) {
        keyRight = true;
    } else if (ev.keyCode == 40) {
        keyDown = true;
    } else if (ev.keyCode == 32) {
        arrDragon[0].shot();
        Dragonopenmouse = true;
    }else if (ev.keyCode == 13) {
        dazhao = true;
    }
}         //创建键盘监听按键
document.onkeyup = function () {
    var ev = arguments[0] || window.event;
    if (ev.keyCode == 37) {
        keyLeft = false;
    } else if (ev.keyCode == 38) {
        keyTop = false;
    } else if (ev.keyCode == 39) {
        keyRight = false;
    } else if (ev.keyCode == 40) {
        keyDown = false;
    }else if(ev.keyCode == 32){
        Dragonopenmouse = false;
    }else if(ev.keyCode == 13){
        dazhao = false;
    }
}
function MyDragonphoto(x, y, src,src2,bleed) {             //龙属性和方法
    this.x = x;
    this.y = y;
    this.src = src;
    this.src2 = src2;
    this.imgNode = document.createElement("img");
    this.imgNode2 = document.createElement("img");
    this.bleed = bleed;
    this.isDeed = false;
    this.init = function () {
        this.imgNode.src = this.src;
        this.imgNode.style.left = x + "px";
        this.imgNode.style.top = y + "px";
        game.appendChild(this.imgNode);
        this.imgNode2.src = this.src2;
        this.imgNode2.style.left = parseInt(x+this.imgNode2.width/2) + "px";
        this.imgNode2.style.top = parseInt(y-20) + "px";
        game.appendChild(this.imgNode2);
    }
    this.movedragon = function () {
        if (arrDragon[0] == undefined) {
            return;
        }
        if (keyLeft) {
            arrDragon[0].moveleft();
        }
        if (keyTop) {
            arrDragon[0].moveup();
        }
        if (keyRight) {
            arrDragon[0].moveright();
        }
        if (keyDown) {
            arrDragon[0].movedown();
        }
    }            //移动龙方法
    this.moveleft = function () {             //龙向左移动
        var Dragonleft =  arrDragon[0].imgNode.offsetLeft;
        var left1 = (parseInt(arrDragon[0].imgNode.style.left) - 20);
        arrDragon[0].imgNode.style.left = left1 + "px";
        arrDragon[0].imgNode2.style.left = parseInt(left1+arrDragon[0].imgNode.width/2) + "px";
        arrDragon[0].imgNode.style.transition = "all 0.06s linear";
        arrDragon[0].imgNode2.style.transition = "all 0.06s linear";
        if (Dragonleft <= 0) {
            arrDragon[0].imgNode.style.left = 0 + "px";
        }
    }
    this.moveup = function () {                         //龙向上移动
        var Dragontop = arrDragon[0].imgNode.offsetTop;
        var top1 = (parseInt(arrDragon[0].imgNode.style.top) - 20);
        arrDragon[0].imgNode.style.top = top1 + "px";
        arrDragon[0].imgNode2.style.top = top1-30 + "px";
        arrDragon[0].imgNode.style.transition = "all 0.06s linear";
        arrDragon[0].imgNode2.style.transition = "all 0.06s linear";
        if (Dragontop <= 0) {
            arrDragon[0].imgNode.style.top = 0 + "px";
        }
    }
    this.moveright = function () {                    //龙向右移动
        var Dragonleft = arrDragon[0].imgNode.offsetLeft;
        var right1 = (parseInt(arrDragon[0].imgNode.style.left) + 20);
        arrDragon[0].imgNode.style.left = right1 + "px";
        arrDragon[0].imgNode2.style.left = parseInt(right1+arrDragon[0].imgNode.width/2) + "px";
        arrDragon[0].imgNode.style.transition = "all 0.06s linear";
        arrDragon[0].imgNode2.style.transition = "all 0.06s linear";
        if ( Dragonleft >= (gameWidth -135)) {
            arrDragon[0].imgNode.style.left = (gameWidth-135) + "px";
        }
    }
    this.movedown = function () {               //龙向下移动
        var Dragontop = arrDragon[0].imgNode.offsetTop;
        var top2 = (parseInt(arrDragon[0].imgNode.style.top) + 20);
        arrDragon[0].imgNode.style.top = top2 + "px";
        arrDragon[0].imgNode2.style.top = top2-20 + "px";
        arrDragon[0].imgNode.style.transition = "all 0.06s linear";
        arrDragon[0].imgNode2.style.transition = "all 0.06s linear";
        if (Dragontop >= 600) {
            arrDragon[0].imgNode.style.top = 600 + "px";
        }
    }
    this.shot = function () {                     //龙发射子弹
        var width = this.imgNode.width;
        var top = parseInt(this.imgNode.style.top);
        var left = parseInt(this.imgNode.style.left);
        var x = left + width;
        var y = top +20;
        if(point>=0&&point<=5) {
            var Zidan = new DragonZidan(x, y, "image/dragon/small/att.gif", 45);
        }
        if(point>5&&point<=30){
            Zidan = new DragonZidan(x, y, "image/dragon/middle/att.gif", 45);
        }
        if(point>30&&point<=50){
            Zidan = new DragonZidan(x, y, "image/dragon/big/att.gif", 45);
        }
        if(point>50&&point<=90){
            Zidan = new DragonZidan(x, y, "image/dragon/large/att.gif", 45);
        }
        if(point>90){
            Zidan = new DragonZidan(x, y, "image/dragon/final/att.gif", 45);
        }
        Zidan.init();
        arrDragonZidan.push(Zidan);
    }
}
function dazhaoimgchange(){
    if( dazhaochance==4){
        boom.style.backgroundImage =  'url("image/ui/boom/boom4.png")';
    }
    if( dazhaochance==3){
        boom.style.backgroundImage =  'url("image/ui/boom/boom3.png")';
    }
    if( dazhaochance==2){
        boom.style.backgroundImage =  'url("image/ui/boom/boom2.png")';
    }
    if( dazhaochance==1){
        boom.style.backgroundImage =  'url("image/ui/boom/boom1.png")';
    }
    if( dazhaochance==0){
        boom.style.backgroundImage =  'url("image/ui/boom/boom0.png")';
    }
}
function fangdazhao(){
    if(dazhao&&(dazhaochance>0)&&(!arrDragon[0].isDeed)){
        big.src = "image/skill.gif";
        big.style.width = "100%";
        big.style.height = "660px";
        big.style.position = "absolute";
        big.style.zIndex = "1";
        game.style.backgroundImage = "none";
        game.appendChild(big);
        dazhaochance--;
        for (var i = 0; i < arrEnemybird.length; i++) {
            game.removeChild(arrEnemybird[i].imgNode);
            arrEnemybird.splice(i, 1);
            i--;
            point++;
        }
        for (var j = 0; j < arrEnemyplane.length; j++) {
            game.removeChild(arrEnemyplane[j].imgNode);
            arrEnemyplane.splice(j, 1);
            j--;
            point++;
        }
        for (var k = 0; k < arrEnemyghost.length; k++) {
            game.removeChild(arrEnemyghost[k].imgNode);
            arrEnemyghost.splice(k, 1);
            k--;
            point+=2;
        }
        for (var m = 0; m < arrEnemyboss.length; m++) {
            game.removeChild(arrEnemyboss[m].imgNode);
            arrEnemyboss.splice(m, 1);
            m--;
            point+=8;
        }
    }
}
function endfangdazhao(){
    if(dazhao==false){
        game.removeChild(big);
        game.style.backgroundImage = 'url("image/bg.jpg")';
    }
}
function dragonopenmouse() {       //small龙张嘴动作设置的函数，形成时间差让龙张嘴动作尽量形成
          if ((Dragonopenmouse==true)&&(point>=0&&point<=5)) {
              arrDragon[0].imgNode.src = "image/dragon/small/magicmissile.gif";
          }
        }
function dragonclosemouse() {
          if ((Dragonopenmouse==false)&&(point>=0&&point<=5)) {
              arrDragon[0].imgNode.src = "image/dragon/small/move.gif";
          }
    }
function middledragonopenmouse() {        //middle龙张嘴动作设置的函数，形成时间差让龙张嘴动作尽量形成
    if ((Dragonopenmouse == true)&&(point>5&&point<=30)) {
        arrDragon[0].imgNode.src = "image/dragon/middle/magicmissile.gif";
    }
}
function middledragonclosemouse() {
    if ((Dragonopenmouse == false)&&(point>5&&point<=30)) {
        arrDragon[0].imgNode.src = "image/dragon/middle/move.gif";
    }
}
function bigdragonopenmouse() {        //big龙张嘴动作设置的函数，形成时间差让龙张嘴动作尽量形成
    if ((Dragonopenmouse == true)&&(point>30&&point<=50)) {
        arrDragon[0].imgNode.src = "image/dragon/big/magicmissile.gif";
    }
}
function bigdragonclosemouse() {
    if ( (Dragonopenmouse == false)&&(point>30&&point<=50)) {
        arrDragon[0].imgNode.src = "image/dragon/big/move.gif";
    }
}
function largedragonopenmouse() {        //large龙张嘴动作设置的函数，形成时间差让龙张嘴动作尽量形成
    if ((Dragonopenmouse == true)&&(point>50&&point<=90)) {
        arrDragon[0].imgNode.src = "image/dragon/large/magicmissile.gif";
    }
}
function largedragonclosemouse() {
    if ( (Dragonopenmouse == false)&&(point>50&&point<=90)) {
        arrDragon[0].imgNode.src = "image/dragon/large/move.gif";
    }
}
function finaldragonopenmouse() {        //final龙张嘴动作设置的函数，形成时间差让龙张嘴动作尽量形成
    if ((Dragonopenmouse == true)&&(point>90)) {
        arrDragon[0].imgNode.src = "image/dragon/final/magicmissile.gif";
    }
}
function finaldragonclosemouse() {
    if ((Dragonopenmouse == false) && (point > 90)) {
        arrDragon[0].imgNode.src = "image/dragon/final/move.gif";
    }
}
function DragonZidan(x, y, src, speed) {             //龙子弹的属性和方法
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgNode = document.createElement("img");
    this.init = function () {
        this.imgNode.src = this.src;
        this.imgNode.style.left = x + "px";
        this.imgNode.style.top = y + "px";
        game.appendChild(this.imgNode);
    }
    this.move = function () {                   //龙子弹每次移动的距离
        var left = (parseInt(this.imgNode.style.left) + this.speed);
        if (left <= gameWidth - 40) {
            this.imgNode.style.left = left + "px";
        } else {
            this.imgNode.style.left = "gameWidth - 30"+"px";
        }
    }
}
function moveDragonZidan() {                     //移动龙子弹
    for (var i = 0; i < arrDragonZidan.length; i++) {
        var left = parseInt(arrDragonZidan[i].imgNode.style.left);
        if (left >= gameWidth - 90) {
            game.removeChild(arrDragonZidan[i].imgNode);
            arrDragonZidan.splice(i, 1);
            i--;
        } else {
            arrDragonZidan[i].move();
        }
    }
}
function createEnemybird() {                   //创建的敌方小鸟
    var x = gameWidth - 80;
    var y = parseInt(Math.random() * 660);
    var Enemybird = new EnemybirdPhoto(x, y, "image/enemy/bird/move.gif", 25, 1);
    Enemybird.init();
    arrEnemybird.push(Enemybird);
}
function EnemybirdPhoto(x, y, src, speed, bleed) {         //敌方小鸟属性和方法
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgNode = document.createElement("img");
    this.bleed = bleed;
    this.isDeed = false;
    this.init = function () {                    //敌方小鸟放入游戏地图中
        this.imgNode.src = this.src;
        game.appendChild(this.imgNode);
        this.imgNode.style.left = x + "px";
        this.imgNode.style.top = y + "px";
    }
    this.move = function () {
        var left1 = (parseInt(this.imgNode.style.left) - this.speed);
        this.imgNode.style.left = left1 + "px";
        this.imgNode.style.transition = "all 0.6s linear";
    }
}
function moveEnemybird(){                              //移动敌方小鸟
    for (var i = 0; i <arrEnemybird.length; i++) {
        var left = parseInt(arrEnemybird[i].imgNode.style.left);
        if (left <= 0) {
            game.removeChild(arrEnemybird[i].imgNode);
            arrEnemybird.splice(i, 1);                //删除敌方小鸟
            i--;
        }
        else {
            arrEnemybird[i].move();
        }
    }
}
function createEnemyplane() {                   //创建的敌方飞机
    var x = gameWidth - 80;
    var y = parseInt(Math.random() * 660);
    var Enemyplane = new EnemyplanePhoto(x, y, "image/enemy/plane/move.gif", 20, 2);
    Enemyplane.init();
    arrEnemyplane.push(Enemyplane);
}
function EnemyplanePhoto(x, y, src, speed, bleed) {         //敌方飞机属性和方法
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgNode = document.createElement("img");
    this.bleed = bleed;
    this.isDeed = false;
    this.init = function () {                            //敌方飞机放入地图中
        this.imgNode.src = this.src;
        game.appendChild(this.imgNode);
        this.imgNode.style.left = x + "px";
        this.imgNode.style.top = y + "px";
    }
    this.move = function () {
        var left1 = (parseInt(this.imgNode.style.left) - this.speed);
        this.imgNode.style.left = left1 + "px";
        this.imgNode.style.transition = "all 0.6s linear";
    }
}
function moveEnemyplane() {                              //敌方飞机移动
    for (var i = 0; i < arrEnemyplane.length; i++) {
        var left = parseInt(arrEnemyplane[i].imgNode.style.left);
        if (left <= 0) {
            game.removeChild(arrEnemyplane[i].imgNode);
            arrEnemyplane.splice(i, 1);                //删除敌方飞机
            i--;
        }
        else {
            arrEnemyplane[i].move();
        }
    }
}
function createEnemyghost() {                   //创建的敌方蝙蝠
    var x = gameWidth - 140;
    var y = parseInt(Math.random() * 660);
    var Enemyghost = new EnemytghosPhoto(x, y, "image/enemy/ghost/move.gif", 40, 2);
    Enemyghost.init();
    arrEnemyghost.push(Enemyghost);
}
function EnemytghosPhoto(x, y, src, speedX, bleed) {         //敌方蝙蝠属性和方法
    this.x = x;
    this.y = y;
    this.src = src;
    this.speedX = speedX;
    this.imgNode = document.createElement("img");
    this.bleed = bleed;
    this.isDeed = false;
    this.init = function () {                            //敌方蝙蝠放入地图中
        this.imgNode.src = this.src;
        game.appendChild(this.imgNode);
        this.imgNode.style.left = x + "px";
        this.imgNode.style.top = y + "px";
    }
    this.move = function () {
        var left1 = (parseInt(this.imgNode.style.left) - this.speedX);
        var speedY = parseInt(Math.random()*31)*(parseInt(Math.random()*11)>=3?1:-1);
        var top1 = (parseInt(this.imgNode.style.top) - speedY);
        this.imgNode.style.left = left1 + "px";
        this.imgNode.style.top = top1 + "px";
        this.imgNode.style.transition = "all 0.7s linear";
    }
}
function moveEnemyghost() {                              //敌方蝙蝠移动
        for (var i = 0; i < arrEnemyghost.length; i++) {
            var left = parseInt(arrEnemyghost[i].imgNode.style.left);
            var top = parseInt(arrEnemyghost[i].imgNode.style.top);
            if (left<= 0) {
                game.removeChild(arrEnemyghost[i].imgNode);
                arrEnemyghost.splice(i, 1);                //删除敌方蝙蝠
                i--;
            }
            if (top<=0) {
                arrEnemyghost[i].imgNode.style.top = 0;
            }
            if (top>=600) {
                arrEnemyghost[i].imgNode.style.top = 600;
            }
               else
            {
                arrEnemyghost[i].move();
            }
        }
    }
function createEnemyboss() {                                 //创建的敌方boss
    var x = gameWidth - 220;
    var y = parseInt(Math.random() * 600);
    var Enemyboss = new EnemybossPhoto(x, y, "image/enemy/boss/move.gif",30,4);
    Enemyboss.init();
    arrEnemyboss.push(Enemyboss);
}
function EnemybossPhoto(x, y, src, speedX, bleed) {          //敌方boss属性和方法
    this.x = x;
    this.y = y;
    this.src = src;
    this.speedX = speedX;
    this.imgNode = document.createElement("img");
    this.bleed = bleed;
    this.isDeed = false;
    this.init = function () {                                //敌方boss放入地图中
        this.imgNode.src = this.src;
        game.appendChild(this.imgNode);
        this.imgNode.style.left = x + "px";
        this.imgNode.style.top = y + "px";
    }
    this.move = function () {
        var left1 = (parseInt(this.imgNode.style.left) - this.speedX);
        var speedY = parseInt(Math.random()*31)*(parseInt(Math.random()*11)>=3?1:-1);
        var top1 = (parseInt(this.imgNode.style.top) - speedY);
        this.imgNode.style.left = left1 + "px";
        this.imgNode.style.top = top1 + "px";
        this.imgNode.style.transition = "all 0.5s linear";
    }
    this.shot = function () {                     //boss发射子弹
        var width = this.imgNode.width;
        var top = parseInt(this.imgNode.style.top);
        var left = parseInt(this.imgNode.style.left);
        var x = left - 20;
        var y = top +30;
        var bossZidan = new bossZidanphoto(x, y, "image/enemy/boss/attackBall.gif", 60);
        bossZidan.init();
        arrbossZidan.push(bossZidan);
    }
}
function moveEnemyboss(){                              //敌方boss移动
    for (var i = 0; i <arrEnemyboss.length; i++) {
        var left = parseInt(arrEnemyboss[i].imgNode.style.left);
        var top = parseInt(arrEnemyboss[i].imgNode.style.top);
        if (left <= 0) {
            game.removeChild(arrEnemyboss[i].imgNode);
            arrEnemyboss.splice(i, 1);                //删除敌方boss
            i--;
        }if (top <= 0) {
            arrEnemyboss[i].imgNode.style.top = 0;
        }if (top >= 600) {
            arrEnemyboss[i].imgNode.style.top = 600;
        } else
        {
            arrEnemyboss[i].move();
        }
    }
}
function bossattackstart() {       //boss攻击动作设置的函数，形成时间差让boss攻击动作形成
      for (var i = 0; i < arrEnemyboss.length; i++) {
          arrEnemyboss[i].imgNode.src = "image/enemy/boss/attack.gif";
      }
}
function bossattackend() {
    for (var i = 0; i < arrEnemyboss.length; i++) {
        arrEnemyboss[i].imgNode.src = "image/enemy/boss/move.gif";
    }
}
function bossZidanphoto(x, y, src, speed) {             //boss子弹的属性和方法
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgNode = document.createElement("img");
    this.init = function () {
        this.imgNode.src = this.src;
        this.imgNode.style.left = x + "px";
        this.imgNode.style.top = y + "px";
        game.appendChild(this.imgNode);
    }
    this.move = function () {                   //boss子弹每次移动的距离
        var left = (parseInt(this.imgNode.style.left) - this.speed);
        this.imgNode.style.left = left + "px";
        this.imgNode.style.transition = "all 0.3s linear";
    }
}
function movebossZidan() {                     //移动龙子弹以及子弹清除
    for (var i = 0; i < arrbossZidan.length; i++) {
        var left = parseInt( arrbossZidan[i].imgNode.style.left);
        if (left <= 0) {
            game.removeChild( arrbossZidan[i].imgNode);
            arrbossZidan.splice(i, 1);
            i--;
        } else {
            arrbossZidan[i].move();
        }
    }
}
function  movebossshot() {                     //boss发射子弹
    for (var i = 0; i < arrEnemyboss.length; i++) {
        var left = parseInt(arrEnemyboss[i].imgNode.style.left);
        if (left >= 0) {
            arrEnemyboss[i].shot();
        }
    }
}
function dragonzidanpeng() {                            //龙子弹与敌人发生碰撞
    for (var i = 0; i < arrDragonZidan.length; i++) {             //子弹打中敌方血量变化和状态
        var Zidanleft = parseInt(arrDragonZidan[i].imgNode.style.left);
        var Zidantop = parseInt(arrDragonZidan[i].imgNode.style.top);
        var Zidanheight = arrDragonZidan[i].imgNode.height;
        var Zidanwidth = arrDragonZidan[i].imgNode.width;
        for (var j = 0; j < arrEnemybird.length; j++) {
            var Enemybirdleft = parseInt(arrEnemybird[j].imgNode.style.left);
            var Enemybirdtop = parseInt(arrEnemybird[j].imgNode.style.top);
            var Enemybirdwidth = arrEnemybird[j].imgNode.width;
            var Enemybirdheight = arrEnemybird[j].imgNode.height;
            if ((Zidanleft > Enemybirdleft - Zidanwidth && Zidanleft < Enemybirdleft + Enemybirdwidth) && (Zidantop > Enemybirdtop - Zidanheight
                && Zidantop < Enemybirdtop + Enemybirdheight)) {
                //龙子弹与当前敌方发生了碰撞
                arrEnemybird[j].bleed--;
                if (arrEnemybird[j].bleed == 0) {
                    //敌方小鸟图片变为死亡状态的图片
                    arrEnemybird[j].imgNode.src = "image/enemy/bird/hit.gif";
                    arrEnemybird[j].isDeed = true;
                }
                //子弹消失
                game.removeChild(arrDragonZidan[i].imgNode);
                arrDragonZidan.splice(i, 1);
                i--;
                break;
            }
        }
    }
    for (var i = 0; i < arrDragonZidan.length; i++) {
        var Zidanleft = parseInt(arrDragonZidan[i].imgNode.style.left);
        var Zidantop = parseInt(arrDragonZidan[i].imgNode.style.top);
        var Zidanheight = arrDragonZidan[i].imgNode.height;
        var Zidanwidth = arrDragonZidan[i].imgNode.width;
        for (var j = 0; j < arrEnemyplane.length; j++) {
            var Enemyplaneleft = parseInt(arrEnemyplane[j].imgNode.style.left);
            var Enemyplanetop = parseInt(arrEnemyplane[j].imgNode.style.top);
            var Enemyplanewidth = arrEnemyplane[j].imgNode.width;
            var Enemyplaneheight = arrEnemyplane[j].imgNode.height;
            if ((Zidanleft > Enemyplaneleft - Zidanwidth && Zidanleft < Enemyplaneleft +  Enemyplanewidth) && (Zidantop >  Enemyplanetop - Zidanheight
                && Zidantop <  Enemyplanetop +  Enemyplaneheight)) {
                //龙子弹与当前敌方发生了碰撞
                arrEnemyplane[j].bleed--;
                if (arrEnemyplane[j].bleed == 0) {
                    //敌方飞机图片变为死亡状态的图片
                    arrEnemyplane[j].imgNode.src = "image/enemy/plane/hit.gif";
                    arrEnemyplane[j].isDeed = true;
                }
                //子弹消失
                game.removeChild(arrDragonZidan[i].imgNode);
                arrDragonZidan.splice(i, 1);
                i--;
                break;
            }
        }
    }
    for (var i = 0; i < arrDragonZidan.length; i++) {
        var Zidanleft = parseInt(arrDragonZidan[i].imgNode.style.left);
        var Zidantop = parseInt(arrDragonZidan[i].imgNode.style.top);
        var Zidanheight = arrDragonZidan[i].imgNode.height;
        var Zidanwidth = arrDragonZidan[i].imgNode.width;
        for (var j = 0; j < arrEnemyghost.length; j++) {
            var Enemyghostleft = parseInt(arrEnemyghost[j].imgNode.style.left);
            var Enemyghosttop = parseInt(arrEnemyghost[j].imgNode.style.top);
            var Enemyghostwidth = arrEnemyghost[j].imgNode.width;
            var Enemyghostheight = arrEnemyghost[j].imgNode.height;
            if ((Zidanleft > Enemyghostleft - Zidanwidth && Zidanleft < Enemyghostleft + Enemyghostwidth) && (Zidantop > Enemyghosttop - Zidanheight
                && Zidantop < Enemyghosttop + Enemyghostheight)) {
                //龙子弹与当前敌方发生了碰撞

                arrEnemyghost[j].bleed--;
                if (arrEnemyghost[j].bleed == 0) {
                    //敌方蝙蝠图片变为死亡状态的图片
                    arrEnemyghost[j].imgNode.src = "image/enemy/ghost/hit.gif";
                    arrEnemyghost[j].isDeed = true;
                }
                //子弹消失
                game.removeChild(arrDragonZidan[i].imgNode);
                arrDragonZidan.splice(i, 1);
                i--;
                break;
            }
        }
    }
    for (var i = 0; i < arrDragonZidan.length; i++) {
        var Zidanleft = parseInt(arrDragonZidan[i].imgNode.style.left);
        var Zidantop = parseInt(arrDragonZidan[i].imgNode.style.top);
        var Zidanheight = arrDragonZidan[i].imgNode.height;
        var Zidanwidth = arrDragonZidan[i].imgNode.width;
        for (var j = 0; j < arrEnemyboss.length; j++) {
            var Enemybossleft = parseInt(arrEnemyboss[j].imgNode.style.left);
            var Enemybosstop = parseInt(arrEnemyboss[j].imgNode.style.top);
            var Enemybosswidth = arrEnemyboss[j].imgNode.width;
            var Enemybossheight = arrEnemyboss[j].imgNode.height;
            if ((Zidanleft > Enemybossleft - Zidanwidth && Zidanleft < Enemybossleft + Enemybosswidth) && (Zidantop > Enemybosstop - Zidanheight
                && Zidantop < Enemybosstop + Enemybossheight)) {
                //龙子弹与当前敌方发生了碰撞
                arrEnemyboss[j].bleed--;
                if (arrEnemyboss[j].bleed == 0) {
                    //敌方蝙蝠图片变为死亡状态的图片
                    arrEnemyboss[j].imgNode.src = "image/enemy/boss/hit.gif";
                    arrEnemyboss[j].isDeed = true;
                }
                //子弹消失
                game.removeChild(arrDragonZidan[i].imgNode);
                arrDragonZidan.splice(i, 1);
                i--;
                break;
            }
        }
    }
}
function bosszidanpeng() {               //boss子弹与龙发生碰撞
    var dragonleft = parseInt(arrDragon[0].imgNode.style.left);
    var dragontop = parseInt(arrDragon[0].imgNode.style.top);
    var dragonwidth = arrDragon[0].imgNode.width;
    var dragonheight = arrDragon[0].imgNode.height;
    for (var i = 0; i < arrbossZidan.length; i++) {
        var bossZidanleft = parseInt(arrbossZidan[i].imgNode.style.left);
        var bossZidantop = parseInt(arrbossZidan[i].imgNode.style.top);
        var bossZidanwidth = arrbossZidan[i].imgNode.width;
        var bossZidanheight = arrbossZidan[i].imgNode.height;
        if ((bossZidanleft > dragonleft - bossZidanwidth &&
            bossZidanleft <dragonleft + dragonwidth)
            && (bossZidantop > dragontop - bossZidanheight
            && bossZidantop <dragontop + dragonheight)) {
            //子弹与当前飞机发生了碰撞
            arrDragon[0].bleed--;
            if (arrDragon[0].bleed == 0) {
                //飞机爆炸
                arrDragon[0].imgNode.src = "image/dragon/dead/die.gif";
                arrDragon[0].isDeed = true;
            }
            //子弹消失
            game.removeChild(arrbossZidan[i].imgNode);
            arrbossZidan.splice(i, 1);
            i--;
            break;
        }
    }
}
function birdshousi1() {        //敌方小鸟被打中后die图片状态
    for (var i = 0; i < arrEnemybird.length; i++) {
        if (arrEnemybird[i].isDeed) {
            arrEnemybird[i].imgNode.src = "image/enemy/thing.gif";
        }
    }
}
function baoxiang() {
    for (var i = 0; i < arrEnemybird.length; i++) {
        if (arrEnemybird[i].isDeed) {
                var  Dragonleft = parseInt(arrDragon[0].imgNode.style.left);
                var  Dragontop = parseInt(arrDragon[0].imgNode.style.top);
                var  Dragonheight = arrDragon[0].imgNode.height;
                var  Dragonwidth = arrDragon[0].imgNode.width;
                for (var j = 0; j < arrEnemybird.length; j++) {
                    var Enemybirdleft = parseInt(arrEnemybird[j].imgNode.style.left);
                    var Enemybirdtop = parseInt(arrEnemybird[j].imgNode.style.top);
                    var Enemybirdwidth = arrEnemybird[j].imgNode.width;
                    var Enemybirdheight = arrEnemybird[j].imgNode.height;
                    if (( Dragonleft > Enemybirdleft - Dragonwidth &&  Dragonleft < Enemybirdleft + Enemybirdwidth) && ( Dragontop > Enemybirdtop -  Dragonheight
                        &&  Dragontop < Enemybirdtop + Enemybirdheight)) {
                        //龙与宝箱发生了碰撞
                        game.removeChild(arrEnemybird[j].imgNode);
                        arrEnemybird.splice(j, 1);
                        j--;
                        point += 3;
                        break;
                    }
                }
            }
        }
}
function birdshousi2() {        //敌方小鸟状态为死亡时消失
    for (var i = 0; i < arrEnemybird.length; i++) {
        if (arrEnemybird[i].isDeed) {
            game.removeChild(arrEnemybird[i].imgNode);
            arrEnemybird.splice(i, 1);
            point += 1;
            i--;
        }
    }
}
function planeshousi1() {        //敌方飞机被打中后die图片状态
    for (var i = 0; i < arrEnemyplane.length; i++) {
        if (arrEnemyplane[i].isDeed) {
            arrEnemyplane[i].imgNode.src = "image/enemy/plane/die.gif";
        }
    }
}
function planeshousi2() {        //敌方飞机状态为死亡时消失
    for (var i = 0; i < arrEnemyplane.length; i++) {
        if (arrEnemyplane[i].isDeed) {
            game.removeChild(arrEnemyplane[i].imgNode);
            arrEnemyplane.splice(i, 1);
            i--;
            point += 1;
        }
    }
}
function  ghostshousi1() {        //敌方蝙蝠被打中后die图片状态
    for (var i = 0; i < arrEnemyghost.length; i++) {
        if (arrEnemyghost[i].isDeed) {
            arrEnemyghost[i].imgNode.src = "image/enemy/ghost/die.gif";
        }
    }
}
function  ghostshousi2() {        //敌方蝙蝠状态为死亡时消失
    for (var i = 0; i < arrEnemyghost.length; i++) {
        if (arrEnemyghost[i].isDeed) {
            game.removeChild(arrEnemyghost[i].imgNode);
            arrEnemyghost.splice(i, 1);
            i--;
            point += 2;
        }
    }
}
function  bossshousi1() {        //敌方boss被打中后die图片状态
    for (var i = 0; i < arrEnemyboss.length; i++) {
        if (arrEnemyboss[i].isDeed) {
            arrEnemyboss[i].imgNode.src = "image/enemy/boss/die.gif";
        }
    }
}
function  bossshousi2() {        //敌方boss状态为死亡时消失
    for (var i = 0; i < arrEnemyboss.length; i++) {
        if (arrEnemyboss[i].isDeed) {
            game.removeChild(arrEnemyboss[i].imgNode);
            arrEnemyboss.splice(i, 1);
            i--;
            point += 8;
        }
    }
}
function  dragonshousi1() {        //龙让敌方boss被打中后die图片状态
        if (arrDragon[0].isDeed==true) {
            arrDragon[0].imgNode.src = "image/dragon/dead/dead.gif";
            arrDragon[0].imgNode2.src = "image/ui/HP0.png";
        }
    }
function dragonshousi2() {        //龙让敌方boss状态为死亡时消失
    if(arrDragon[0].isDeed||time5time==90) {
        game.removeChild(arrDragon[0].imgNode);
        game.removeChild(arrDragon[0].imgNode2);
        arrDragon.splice(0, 1);
          birdshousi1Timer = clearInterval(birdshousi1Timer);
          birdshousi2Timer = clearInterval(birdshousi2Timer);
          planeshousi1Timer = clearInterval(planeshousi1Timer);
          planeshousi2Timer = clearInterval(planeshousi2Timer);
          dragonshousi2Timer = clearInterval(dragonshousi2Timer);
          dragonshousi1Timer = clearInterval(dragonshousi1Timer);
          bossshousi2Timer = clearInterval(bossshousi2Timer);
          bossshousi1Timer = clearInterval(bossshousi1Timer);
          moveDragonZidanTimer = clearInterval(moveDragonZidanTimer);
          DragonopenmouseTimer = clearInterval( DragonopenmouseTimer);
          DragonclosemouseTimer = clearInterval(DragonclosemouseTimer);
          createEnemybirdTimer = clearInterval(createEnemybirdTimer);
          moveEnemybirdTimer = clearInterval(moveEnemybirdTimer);
          createEnemyplaneTimer = clearInterval(createEnemyplaneTimer);
          moveEnemyplaneTimer = clearInterval( moveEnemyplaneTimer);
          createEnemyghostTimer = clearInterval(createEnemyghostTimer);
          moveEnemyghostTimer = clearInterval(moveEnemyghostTimer);
          createEnemybossTimer = clearInterval(createEnemybossTimer);
          moveEnemybossTimer = clearInterval(moveEnemybossTimer);
          movebossshotTimer = clearInterval( movebossshotTimer);
          movebossZidanTimer = clearInterval( movebossZidanTimer);
          bossattackstartTimer = clearInterval( bossattackstartTimer);
          bossattackendTimer = clearInterval(bossattackendTimer);
          time5Timer = clearInterval(time5Timer);
        game.style.opacity = "0.8";
        gameover.style.display = "block";
        spanpoint.innerHTML = point;
        gameover.style.display = "block";
    }
}
sure.onclick = function(){
    location.reload();
}
var timebegin5 = 0;            //90秒倒计时设置
var time5time = 0;              //time5time为已经过去多少秒的时间
function time5a(){
    timebegin5 --;
    time5time++;
    if(timebegin5 == -1){
        timebegin5 = 9;
    }
    time5.src = arrClock[timebegin5];
    if(time5time == 30){
        dazhaochance++;
    }
    if(time5time == 90){
        time5Timer = clearInterval(time5Timer);
    }
}
function time4a(){
    var i = parseInt((90-time5time)%60/10);
    time4.src = arrClock[i];
}
function time2a() {
    var i = parseInt((90 - time5time)/60);
    time2.src = arrClock[i];
}
