redirectIfLog();
/* Cette fonction redirige si jamais je suis loggée */

function register()
{
  //XMLHttpRequest is an javascript object who let us to communicate with the API.
  var request = new XMLHttpRequest();
  /* XMLHttpRequest: c'est l'"objet" qui permet d'envoyer
  des requêtes dynamiques au serveur
  permet de lancer une requête sans obliger la navigateur à recharger*/

  //The XMLHttpRequest method open() initializes a newly-created request
  //or re-initializes an existing one.
  //here we prepare the request for a inscription
  var url = API_URL + "inscription"
  request.open('POST', url, true);

  //setRequestHeader initialize the value of an HTTP request header.
  //you must call it after calling open(), but before calling send().
  request.setRequestHeader("Content-Type", "application/json");

  //this 3line take the value of the input of the html page
  //and create an object to prepare the data to be send
  var email = document.getElementById("emailR").value;
  var password = document.getElementById("passwordR").value;
  var data = {'email' : email , 'password' : password};
  /* Indique le format json, nom + value (tel que mentionné dans l'exercice)*/

  //when the API give an answer we can check if everything work or not
  //the function onload is call when the API give an answer
  request.onload =  function ()
  /* je définis le comportement que je veux qd j'ai formulé la requête)*/
  {
    console.log("API answer " + this.status + " " + this.responseText);
    if (this.status >= 200 && this.status <= 299)
    {
      window.location.href = ROUTE_SIGNIN;
    }
    else
    {
      //JSON.parse take a string in parameter
      //and convert it in an javascript object
      document.getElementById("errorStatus").innerHTML = "Error " + this.status + " : " + JSON.parse(this.responseText).data;
    }
  };

  //stringify transform the javascript object data in a string to be send
  //and understand by the server
  //the send function send your request.
  //the parameter of send is the content of your request you are sending
  request.send(JSON.stringify(data));
  /* stringify : convertit l'objet json en string
  l'inverse est une json PARSE */
}

window.onload = function()
{
  var registerButton = document.getElementById("buttonR");

  registerButton.addEventListener("click", register);
}
/* Je récupère la fonction register, et je lui dis d'exécuter si récupèrer */
