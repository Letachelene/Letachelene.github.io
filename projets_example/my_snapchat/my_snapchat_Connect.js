window.onload = function()
{
  console.log("SCRIPT CHARGÉ")
  var XHR = new XMLHttpRequest();
  var requestURL = "https://api.snapchat.wac.epitech.eu/connection";

  var connect = document.getElementsByTagName("button")[0];



  connect.onclick = function connection()
  {
    console.log("CLICK DETECTÉ")
    var mypass = document.getElementById("mdp").value;
    var mymail = document.getElementById("mail").value;


    var objet = new Object;

    objet.email = mymail;
    objet.password = mypass;

    //console.log(objet);

    var myObjetPaquet = JSON.stringify(objet);
    console.log("myObjetPaquet: ", myObjetPaquet)


    XHR.open("POST", requestURL, true);
    XHR.setRequestHeader("Content-Type", "application/json");
    XHR.onload = function()
    {

        var data = JSON.parse(this.responseText);
        if (data.data == "Unauthorized Access") {
          console.log("ATTENTION ACCÈS NON AUTORISÉ, NOUS AVONS CONTACTÉ LES AUTORITÉS COMPÉTENTES !")
          }
        /*else {
          window.location.replace("my_snapchat_Image.html");
          console.log("WELCOME");
        }*/
        //console.log("DANS ONLOAD data: ", data)
        //console.log("DANS LE XHR.ONLOAD ",data.data.token);
        //FAIRE un if : data token false, ne pas rentrer dans le site
        //OU au choix if mot de passe et mail correspondent, rentrer dans le site
        var token = data["data"]["token"];
        var username = data["data"]["email"];

        alert("utilisateur = " + token);

      function setCookie(myCookie, data)
      {
        console.log(data.data.token);
        if (data.data.token == "" || !data.data.token)
          console.log("Error connecting: ", data.data.token)
        var d = new Date();
        d.setTime(d.getTime() + (60*60));//(5*24*60*60*1000)
        var expires = "expires="+ d.toUTCString();
        document.cookie = myCookie + "=" + data.data.token + ";" + expires + ";path=/";
        console.log("END OF SETCOOKIE")


        /*if (this.status >= 200 && this.status < 400) {
          console.log("ok");
        }
        else {
          console.log('error')
        }*/
      }
  setCookie("myCookie", data);
  window.location.replace("my_snapchat_Image.html");
  //window.location.replace("my_snapchat_Image.html");
//partir d'une chaîne de caractère pour la retransformer en objet
        //this.response
        //
        //stocker le token

      //document.cookie = myCookie = token; expires= 24* 60* 60* 1000;
    }

    console.log("POST SETCOOKIE")
    //console.log(myObjetPaquet);
    XHR.send(myObjetPaquet);
    console.log("ALLO LE MONDE? ", XHR.status)

// choisir ce que ton utilisateur va faire
  }

}
//

/*var token = jwt.sign({
   user: req.user.id
 }, secretKey, {
   expiresIn: model.accessTokenLifetime,
   subject: req.client.clientId
 });*/
