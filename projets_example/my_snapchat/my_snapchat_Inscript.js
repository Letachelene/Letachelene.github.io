window.onload = function() {


  var register = document.getElementsByTagName("button")[0];
  register.onclick = function inscription()
  /* je pointe mon bouton et je l'installe */
   {
    var mypass = document.getElementById("mdp").value;
    var mymail = document.getElementById("mail").value;
      //console.log(mypass, mymail);
    /* Au clic du bouton, password et mail doivent être récupérés : j'installe donc leur valeur*/

    var objet = new Object;

    objet.email = mymail;
    objet.password = mypass;
    //console.log(objet);

    /*je récupère les valeurs de password et email pour créer un objet*/

    var myObjetPaquet = JSON.stringify(objet);
    //console.log(myObjetPaquet);
    var XHR = new XMLHttpRequest(); //Je prépare ma réquête : j'instancie XHR(XMLHttpRequest)
    var url = "https://api.snapchat.wac.epitech.eu/";
    var requestURL = "https://api.snapchat.wac.epitech.eu/";
    XHR.open("POST", url + "inscription"); //je poste mon paquet (encore au port)

    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onload = function()
    /* Onload : permet d'attendre que l'API réponde
      This : reprend le XHR onload*/
    {
      console.log(this.status , this.statusText);//400 si erreur, 200 si OK

      if (this.status >= 200 && this.status < 400) {
        console.log("ok");
        window.location.replace("my_snapchat_Connection.html");
      }
      else {
        console.log('error')
      }

      console.log(this.responseText); //responseText est la réponse en elle-même
      var res = JSON.parse(this.responseText);//parse reformule le JSON text pur en objet

      /*Open permet de préparer la requête et prend en paramètre :
       - les arguments GET, POST ou HEAD
       - l'URL auquel je souhaite soumettre ma requête
       - un booléen facultatif ("true", de type asynchrone; "false" de type synchrone)*/

      }//fin de fonction XRR onload

      XHR.send(myObjetPaquet);

    }//fin de ma fonction inscription
        /*  */

} // fin de ma fonction onload


/*
    const params = {
      email: "test.test@epitech.expfun",
      password: "toto"
    }
    */
/*
    const http = new XMLHttpRequest()
    http.open('POST', 'https://api.snapchat.wac.epitech.eu/inscription')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params)) // Make sure to stringify
*/
/*
    http.onload = function() {
      // Do whatever with response
      alert(http.responseText)
      console.log(http.response)
      var data = JSON.parse(this.response);
      console.log(this.status); //400 si erreur, 200 si OK
      if (this.status >= 200 && this.status < 400) {
        console.log("ok");
        data.forEach(inscription => {
          console.log(inscription.title)
        })
      } else {
        console.log('error')
      }

      */



/*  XHR.onload = function()

  {
    console.log(this.status);//400 si erreur, 200 si OK
    var data = JSON.parse(this.response);
    var resultText = XMLHttpRequest.responseText;*/

    /*
          alert(XHR.responseText)
          console.log(XHR.response)
          var data = JSON.parse(this.response);
          console.log(this.status); //400 si erreur, 200 si OK
          if (this.status >= 200 && this.status < 400) {
            console.log("ok");
            data.forEach(inscription => {
              console.log(inscription.title)
            })
          } else {
            console.log('error')

            */



/* Pour savoir si ma requête a bien marché, je vérifie avec "status":
cette propriété renverra deux code : 404 disant que le serveur n'a pas trouvé les fichiers,
ou 200 indiquant que tout s'est bien passé
Une fois la requête terminée, il faut récupérer les données avec responseXML (pour un URL)
et responseText qui fournira la réponse sous forme de chaîne de caractère :
la conversion se fera alors comme suit : var response = JSON.parse(xhr.responseText); */

//XMLHttpRequest.send();
