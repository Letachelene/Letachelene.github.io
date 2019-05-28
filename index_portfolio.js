function RedirectionJavascript() {
  document.location.href="CVDEV_copie.pdf";
}

function navScroll(event)
{
  const idScroll = event.target.dataset.scrollto;
  let elmnt = document.getElementById(idScroll);

  window.scrollTo(elmnt.offsetLeft, elmnt.offsetTop - document.getElementById('menu').parentNode.clientHeight);
}

document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.carousel');
   var instances = M.Carousel.init(elems);
 });

/*La fonction Navscroll sert à naviguer sur toute la page :
Je définis une variable (idScroll) qui est égale à :
evenement + cible + renvoi à data + variable scrollto qui a été stockée dans le html
Je charge la variable scrollto avec en paramètre : l'élément déplacé vers la gauche,
sur l'Id ciblé + bloc parent + taille' */



/*function myFunction6() {
  var elmnt = document.getElementById("formulaire");
  elmnt.scrollIntoView();
}*/

/*function animation_logos(element, numero){

  var element = document.getElementsByClassName(element)[numero]
  TweenMax.to(element, 1, {x:40});

  var tl = new TimelineLite();
  tl.to("logo_techno", 0.5, {rotation:360});

  var techno = document.getElementsByClassName("logo_techno")
  tl.to("logo_techno", 0.8, {x:1000});


}

animation_logos("logo_techno");*/


                    /*wow = new WOW(
                            {
                            boxClass:     'wow',
                            animateClass: 'animated',
                            offset:       0,
                            mobile:       true,
                            live:         true
                          }
                          )
                          wow.init();*/

window.onload = function(){

}
