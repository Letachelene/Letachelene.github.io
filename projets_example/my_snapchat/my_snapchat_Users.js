//seconde étape lister les utilisateurs : cf pdf
//puis read cookie regarder W3C (ou get cookie), qui permet de récupérer
//la valeur du cookie que j'avais créé
//Créer un 3e bouton qui eprmette de choisir la durée où l'image restera à l'écran
function users()
{

      function readCookie(myCookie)
            {
                var reader = myCookie + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var tab = decodedCookie.split(';');
                for(var i = 0; i <tab.length; i++)
                {
                  var tab_value = tab[i];
                  while (tab_value.charAt(0) == ' ') {
                  tab_value = tab_value.substring(1);
                  }
                if (tab_value.indexOf(reader) == 0) {
                  return tab_value.substring(reader.length, tab_value.length);
                  }
                }
              return "";
            }
/* Je récupère le cookie avec le numéro d'authentification "token"*/


      /*{
        //censé demander le chemin de l'image désirée
        console.log("Mhhhm?")
          if (this.files && this.files[0]) {
          var img = document.getElementById('image');
          img.src = URL.createObjectURL(this.files[0]);
        }
        console.log("ALLO LE MONDE ESKE TU MENTEND ",myImage.src);
        myImage.src = myWay.value;*/

      var register = document.getElementsByTagName("button")[0];
      register.onclick = function (event)
      {

       event.preventDefault()

        var XHR = new XMLHttpRequest();
        /*ma requête : récupérer dans mon doc image les emails de tous les utilisateurs inscrits */
        var url = "https://api.snapchat.wac.epitech.eu/";
        var requestURL = "https://api.snapchat.wac.epitech.eu/";
        var token ="eyJhbGciOiJIUzI1NiIsImV4cCI6MTU1Mzg4NTU2MiwiaWF0IjoxNTUzODgxOTYyfQ.eyJpZCI6MzY5NH0.u-tMs1VVzv1wFsS_YxICgtOzxbVwPXCd4sqW-70l7Io";
        XHR.open("GET", url + "all");
        XHR.setRequestHeader("token", token);
        XHR.onload = function()
        {
          console.log(this.status , this.statusText);//400 si erreur, 200 si OK

          if (this.status >= 200 && this.status < 400)
          {
            console.log("ok");

            var res =  JSON.parse(this.responseText);
            var list = res["data"];
            list.forEach((item, index) =>
                  {
                    document.getElementsByTagName('div')[0].innerHTML += item.email + "<br>";
                    //remplacer par un Get by Id, pointer sur  select
                    //ds js, le bouton liste doit être à nouveau visible qd clic sur le destinataire

          }
              else {
                     console.log('error: ',this.responseText);

                   }

        }

        XHR.send();
        }
      }









//puis récuperer les utilisateurs avec XHR et GET
//fonction création d'une liste


/*

var cookieReader = function(){
c = document.cookie.split('; ');
cookies = {};
for(i=c.length-1; i>=0; i--)
{
  C = c[i].split('=');
  cookies[C[0]] = C[1];
}
return cookies;
};*/
