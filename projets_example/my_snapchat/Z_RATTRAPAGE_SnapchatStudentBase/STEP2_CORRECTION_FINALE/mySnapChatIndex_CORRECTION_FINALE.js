
redirectIfNotLog();

var selectedTo;

function loadFile()
{
  getUsers();
}

function sendSnap() {

  if (selectedTo === undefined)
  {
    document.getElementById("errorStatus").innerHTML = "Error: to must be selected !";
    return ;
  }

  let to = selectedTo.textContent;
  /* textContent = une balise "li" (textContent : cet attribut designe toutes les balises
html qui contiennent du texte)*/
  let duration = document.getElementById('duration').value;
  let file = document.getElementById('sendingFile').files[0];
  /* Ici le [0] ne renvoie pas à la place dans le HTML mais au démarrage du tableau*/
  /* mon snap a besoin de trois variables (voir HTML input id "duration,
  "sendingFile" "sendsnapp") : durée + image + liste des utlisateurs*/

  //XMLHttpRequest is an javascript object who let us to communicate with the API.
  let request = new XMLHttpRequest();

  //The XMLHttpRequest method open() initializes a newly-created request
  //or re-initializes an existing one.

  //The XMLHttpRequest method open() initializes a newly-created request
  //or re-initializes an existing one.
  //here we prepare the request to get all the users know by the API
  let url = API_URL + "snap"
  request.open('POST', url, true);

  //setRequestHeader initialize the value of an HTTP request header.
  //you must call it after calling open(), but before calling send().
  request.setRequestHeader("token", getCookie("token"));

  // Create Form data instance that will manage sending datas
  var formData = new FormData();
  /* méthode d'envoi de ma liste*/

  formData.append('to', to);
  formData.append('duration', duration);
  formData.append('image', file);
  /* Important : ici, le 2e paramètre entre () désigne une variable:
  la variable to (contient la valeur de "to", etc)
  to indique l'adresse mail de l'individu que j'ai récupérée
  File indique l'image*/
  //when the API give an answer we can check if everything work or not
  //the function onload is call when the API give an answer
  request.onload = function ()
  {
    if (this.status >= 200 && this.status <= 299)
    {
      //JSON.parse take a string in parameter
      //and convert it in an javascript object
      document.getElementById('message').textContent = JSON.parse(this.responseText).data;
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
  request.send(formData);
}

function selectUser(elementUser)
{
  if (selectedTo !== undefined)
  /* Si j'ai déjà sélectionné qqu'un dans la page...
  Ce if prévoit le cas d'avance qd je rentre dans ma page
  avant même que j'ai choisi quelqu'un */
  {
    selectedTo.style.backgroundColor = '';
    selectedTo.style.color = '';
      /* Je supprime le style et la couleur de la personne déjà sélectionnée...*/
  }
  /* Quand je rentre sur ma page, je ne rentre pas dans le if
  À partir du moment où je sélectionne, le if prend son importance...*/
  selectedTo = elementUser;
  selectedTo.style.backgroundColor = 'red';
  selectedTo.style.color = 'white';
  document.getElementById('sendSnap').style.display = 'inline';
    /* Pour appliquer le style et la couleur ("rouge") au nouveau sélectionné ...
    De cette façon, je peux surligner la personne sélectionnée*/
}

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
      let saveSelected = (selectedTo !== undefined) ? selectedTo.textContent : null;

      //JSON.parse take a string in parameter
      //and convert it in an javascript object
      let allUsers = JSON.parse(this.responseText).data;

      list.innerHTML = '';
      selectedTo = undefined;
      //with this forEach, wi will display all the users and the html file
      allUsers.forEach(function(item)
      {
          let node = document.createElement("li");
          let textNode = document.createTextNode(item.email);

          node.onclick = (e) => {
            selectUser(e.target);
            /* target indique la cible de l'événement
            c'est le node onclick qui exécute l'évenement*/
        };
        if (textNode.textContent === saveSelected)
        {
          selectUser(node);
        }
        node.appendChild(textNode);
        list.appendChild(node);
      });
    }
    else
    {
      //JSON.parse take a string in parameter
      //and convert it in an javascript object
      document.getElementById("errorStatus").innerHTML = "Error "
      + this.status + " : " + JSON.parse(this.responseText).data;
    }
  };

  //the send function send your request.
  //with no parameter, send will only send the header of the request
  request.send();
}

window.onload = function(){

  var registerButton = document.getElementById("buttonR");
  var uploadFileInput = document.getElementById('sendingFile');
  var sendSnapButton = document.getElementById('sendSnap');

  registerButton.addEventListener("click", logout);
  uploadFileInput.addEventListener('change', loadFile);
  sendSnapButton.addEventListener('click', sendSnap);
}
