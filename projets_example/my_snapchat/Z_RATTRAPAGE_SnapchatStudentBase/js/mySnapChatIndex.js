
redirectIfNotLog();


function getUsers() {
  //XMLHttpRequest is an javascript object who let us to communicate with the API.
  let request = new XMLHttpRequest();

  //The XMLHttpRequest method open() initializes a newly-created request
  //or re-initializes an existing one.

  //The XMLHttpRequest method open() initializes a newly-created request
  //or re-initializes an existing one.
  //here we prepare the request to get all the users know by the API
  let url = API_URL + "all"
  request.open('GET', url, true);

  //setRequestHeader initialize the value of an HTTP request header.
  //you must call it after calling open(), but before calling send().
  request.setRequestHeader("token", getCookie("token"));

  //when the API give an answer we can check if everything work or not
  //the function onload is call when the API give an answer
  request.onload = function ()
  {
    if (this.status >= 200 && this.status <= 299)
    {
      let list = document.getElementById("users");

      //JSON.parse take a string in parameter
      //and convert it in an javascript object
      let allUsers = JSON.parse(this.responseText).data;

      //with this forEach, wi will display all the users and the html file
      allUsers.forEach(function(user)
      /* Important : cette function est anonyme; elle prend en paramètre user;
      elle est callback : elle appelle le paramètre user
      objectif du callback : on donne à une variable la valeur d'une fonction
      pour pouvoir l'utiliser qd on veut*/
      {
        let node = document.createElement("li");
        let textNode = document.createTextNode(user.email);

        node.appendChild(textNode);
        list.appendChild(node);
      });
    }
    else
    {
      //JSON.parse take a string in parameter
      //and convert it in an javascript object
      document.getElementById("errorStatus").innerHTML = "Error " + this.status + " : " + JSON.parse(this.responseText).data;
    }
  };

  //the send function send your request.
  //with no parameter, send will only send the header of the request
  request.send();
}

function uploadFile(){
  getUsers();
  /* j'appelle la fonction ici, pour que la liste des allUsers
  s'affiche EN MÊME TEMPS QUE JE CHARGE L'IMAGE*/
  //alert('File is upload !');
}

window.onload = function(){

  var registerButton = document.getElementById("buttonR");
  var inputFile = document.getElementById('sendingFile');

  registerButton.addEventListener("click", logout);
  inputFile.addEventListener('change', uploadFile);
    /* "change" = nom de l'événement onchange */
  /* logout permet de se déconnecter, aussi indiquée dans le html*/

}
