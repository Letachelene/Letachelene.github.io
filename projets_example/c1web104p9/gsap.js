/*TweenMax.to(target, duration, {vars});
syntaxe de base pour les TweenMax*/

function animation_visage(element, numero){
  //var tl = new TimeLineMax();
  //tl.to(element, 1, {x:10, ease:"shake"}, 0.5);
  var element = document.getElementsByClassName(element)[numero]
  TweenMax.to(element, 1, {x:40});


  var tl = new TimelineLite();
  //tl.staggerFrom(element, 0.2, {scale:0, autoAlpha:0}, 0.1, "stagger");
  tl.to(element, 0.5, {rotation:360}, "+=0.5");

  var visage0 = document.getElementsByClassName("heureux")
  tl.to(visage0, 0.8, {x:1000});

  var visage1 = document.getElementsByClassName("triste")
  tl.to(visage1, 0.7, {x:1000}, "-=0.8");

  var visage2 = document.getElementsByClassName("tongue")
  tl.to(visage2, 1, {x:1000}, "-=0.8");

  var visage3 = document.getElementsByClassName("love")
  tl.to(visage3, 0.9, {x:1000}, "-=0.8");
//tl.to(visage0, 3, {width: '+=400',x:-60, y:+120}, 5);
}

function usine(monVisage) {
  var tl = new TimelineLite();
  var tool_0 = document.getElementsByClassName("robinet") //0s
  tl.to(tool_0, 5, {y:-1850});

  var tool_1 = document.getElementsByClassName("entonnoir") // 5s
  tl.to(tool_1, 5.5, {y:-1500}, "-=5");

  var tool_2 = document.getElementsByClassName("conveyeur")
  tl.to(tool_2, 6, {y:-1390}, "-=5");
  //tl.to(tool_2, 0.5, {x:400}, "-=3");

  var tool_3 = document.getElementsByClassName("machine")
  tl.to(tool_3, 6.5, {y:-1420}, "-=5");
  tl.to(tool_3, 0.5, {x:-130}, "-=3");

  var tool_4 = document.getElementsByClassName("machine2")
  tl.to(tool_4, 6.5, {y:-1420}, "-=5");
  tl.to(tool_4, 0.5, {x:-100}, "-=3");

  var tool_5 = document.getElementsByClassName("conveyeur_key")
  tl.to(tool_5, 6.5, {y:-1450}, "-=5");

  var tool_1 = document.getElementsByClassName("entonnoir")
  tl.to(tool_1, 0.5, {x:-180}, "-=3");

  var tool_2 = document.getElementsByClassName("conveyeur")
  tl.to(tool_2, 0.5, {x:620, width: '+=100'},"-=4");
  //tl.to(tool_2, 0.5, {x:-170}, "-=2.5");
  //tl.to(tool_2, 3, {width: '+=400',x:-60, y:+120}, 5);

  var tool_3 = document.getElementsByClassName("machine")
  tl.to(tool_3, 0.5, {width: '+=160'},"-=1");

  var tool_4 = document.getElementsByClassName("machine2")
  tl.to(tool_4, 0.5, {width: '+=160'},"-=1");

  var tool_5 = document.getElementsByClassName("conveyeur_key")
  tl.to(tool_5, 0.5, {width: '+=790'},"-=0.8");

  var tool_1 = document.getElementsByClassName("entonnoir")
  tl.to(tool_1, 0.5, {height: '+=100', y: '+=90'},"-=0.8");
  //tl.to(tool_1, 0.5, {y:1000}, "+=1");

  var engrenage1 = document.getElementsByClassName("roue1")
  //tl.to(engrenage1, 7, {y:-1750}, "+=1"); //ease:Bounce.easeOut
  tl.staggerTo(engrenage1, 6, {y:-1680, ease:Elastic.easeOut}, "-=0.1");
  tl.to(engrenage1, 0.1, {x:1050}, "-=0.1")
  tl.to(engrenage1, 60, {rotation:500000, repeat:-1}, "-=59");

  var engrenage2 = document.getElementsByClassName("roue2")
  tl.staggerTo(engrenage2, 6, {y:-1680, ease:Elastic.easeOut}, "-=0.1");
  tl.to(engrenage2, 0.1, {x:730}, "+=1");
  tl.to(engrenage2, 60, {rotation:500000, repeat:-1}, "-=61");

  var engrenage3 = document.getElementsByClassName("roue3")
  tl.staggerTo(engrenage3, 6, {y:-1680, ease:Elastic.easeOut}, "-=0.1");
  tl.to(engrenage3, 0.1, {x:420}, "+=1");
  tl.to(engrenage3, 60, {rotation:500000, repeat:-1}, "-=61");

  var visage_usine = document.getElementsByClassName("visage_usine")
  tl.to(visage_usine, 0.1, {x:200}, "-=0.1");
  tl.staggerTo(visage_usine, 0.1, {y:-2390, ease:Elastic.easeOut}, "+=0.1");
  tl.to(visage_usine, 0.1, {x:790}, "-=0.1");
  tl.to(visage_usine, 1, {x:"+=100", yoyo:true, repeat:-1}, "-=0.1");
  tl.to(visage_usine, 0.1, {x:790}, "-=0.1");
  tl.to(visage_usine, 1, {y:"+=20", yoyo:true, repeat:0}, "-=0.1");
  tl.to(visage_usine, 0.1, {x:400}, "-=0.1");
  tl.to(visage_usine, 1, {width: '+=50'},"-=0.1");

  var element_usine = document.getElementsByClassName("yeux_happy1")[0];
  tl.to(element_usine, 0.1, {y:-2420}, "-=0.1");
  tl.to(element_usine, 0.1, {x:317}, "-=0.1");

  var element_usine = document.getElementsByClassName("bouche_happy1")[0];
  tl.to(element_usine, 0.1, {y:-2378}, "-=0.1");
  tl.to(element_usine, 0.1, {x:245}, "-=0.1");

  var element_usine = document.getElementsByClassName("yeux_sad1")[1];
  tl.to(element_usine, 0.1, {y:-2420}, "-=0.1");
  tl.to(element_usine, 0.1, {x:317}, "-=0.1");

  var element_usine = document.getElementsByClassName("bouche_sad1")[1];
  tl.to(element_usine, 0.1, {y:-2378}, "-=0.1");
  tl.to(element_usine, 0.1, {x:317}, "-=0.1");

  var element_usine = document.getElementsByClassName("yeux_tongue1")[2];
  tl.to(element_usine, 0.1, {y:-2420}, "-=0.1");
  tl.to(element_usine, 0.1, {x:317}, "-=0.1");

  var element_usine = document.getElementsByClassName("bouche_tongue1")[2];
  tl.to(element_usine, 0.1, {y:-2378}, "-=0.1");
  tl.to(element_usine, 0.1, {x:245}, "-=0.1");

  var element_usine = document.getElementsByClassName("yeux_love1")[3];
  tl.to(element_usine, 0.1, {y:-2420}, "-=0.1");
  tl.to(element_usine, 0.1, {x:317}, "-=0.1");

  var element_usine = document.getElementsByClassName("bouche_love1")[3];
  tl.to(element_usine, 0.1, {y:-2378}, "-=0.1");
  tl.to(element_usine, 0.1, {x:245}, "-=0.1");



  //var visage0 = document.getElementsByClassName(monVisage)[0];
  //tl.to(visage0, 1, {x:100}, "+=2");
}

/*function reverse1(){
  var the_end2 = new TimelineLite();
  var visage1 = document.getElementsByClassName("triste")[1]
  console.log(visage1);
  the_end2.to(visage1, 0.4, {x:-1000});
}*/



/*function engrenage()*/


window.onload = function(){

}

var button_happy = document.getElementsByTagName("button")[0];
button_happy.onclick = function(){
  for (let i = 0; i <= 3; i++) {
  animation_visage("eyes", i);
  animation_visage("mouth", i);
}
  usine("heureux");
}

var button_sad = document.getElementsByTagName("button")[1];
button_sad.onclick = function(){
  for (let i = 0; i <= 3; i++) {
  animation_visage("eyes", i);
  animation_visage("mouth", i);
  //reverse1();
  }
    usine("triste");
}

var button_tongue = document.getElementsByTagName("button")[2];
button_tongue.onclick = function(){
  for (let i = 0; i <= 3; i++) {
    animation_visage("eyes", i);
    animation_visage("mouth", i);
  }
  usine("tongue");
  //reverse0();
  //}
  //reverse0();
}

var button_love = document.getElementsByTagName("button")[3];
button_love.onclick = function(){
  for (let i = 0; i <= 3; i++) {
  animation_visage("eyes", i);
  animation_visage("mouth", i);
  }
  usine("love");
}





    /*var eyes = document.getElementsByClassName("eyes")[0]
    console.log(eyes);

    TweenMax.to(eyes, 2, {x:-95});
    var mouth = document.getElementsByClassName("mouth")[0]
    console.log(mouth);
    TweenMax.to(mouth, 2, {x:-95});

    var eyes1 = document.getElementsByClassName("eyes")[1]
    console.log(eyes);
    TweenMax.to(eyes1, 2, {x:-95});
    var mouth1 = document.getElementsByClassName("mouth")[1]
    console.log(mouth);
    TweenMax.to(mouth, 2, {x:-95});*/

  /*TweenLite.to(eyes, 2, {left:"542px", backgroundColor:"black", borderBottomColor:"#90e500", color:"white"});*/
  /*var button = document.getElementsByTagName("button");
  button[0].onclick = function()*/
